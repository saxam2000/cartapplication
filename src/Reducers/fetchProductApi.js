const fetchProductApi = (store) => (next) => (action) => {
  switch (action.type) {
    // only catch a specific action
    case "FETCH_PRODUCT_DATA": {
      console.log("in middleware");
      // continue propagating the action through redux
      // // this is our only call to next in this middleware
      next(action);

      // fetch data from an API that may take a while to respond
      // MyMovieApi.get('/movies')
      fetch("https://fakestoreapi.com/products")
        // .then(res=>res.json())
        // .then(json=>console.log(json))
        .then((res) => res.json())
        .then((products) => {
          // successfully received data, dispatch a new action with our data
          //   console.log("products  ......" ,products);

          store.dispatch({
            type: "SET_PRODUCT_DATA",
            payload: { products: products },
          });
        })
        .catch((err) => {
          // received an error from the API, dispatch a new action with an error
          console.log(err.msg);
          store.dispatch({
            type: "SET_MOVIE_DATA_ERROR",
            payload: { error: err },
          });
        });
      break;
    }

    // if we don't need to handle this action, we still need to pass it along
    default:
      next(action);
  }
};

export default fetchProductApi;
