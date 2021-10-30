import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom"; 

function Home(props) {
  function handleClick(e, product) {
      e.preventDefault();
    console.log("event is  ", e);
    console.log("product selected is", product);
    props.addToCart(product);
  }
  console.log(props);
  return (
    <div>
      <h1> hello from home </h1>
      <button>

      <Link to="/cart" className="btn btn-primary" style={{color: 'black',textDecoration:"none"}} > Cart  </Link>
      </button>
      <button onClick={props.addToCart}>addToCart</button>
      <button onClick={props.removeFromCart}>removeFromCart</button>
      <button onClick={props.fetchData}>getProducts</button>
      {/* {console.log("products",props.products)} */}
      <div style={{ justifyContent: "center", display: "flex", flexWrap: "wrap" }}>
        {props.products.map((product) => {
          // console.log("product===>",product)
          return (
            <div
              style={{
                border: "1px solid grey",
                padding: "3px",
                margin: "4px",
                display: "flex",
                flexDirection: "column",
                width: "400px",
                height: "800px",
                alignContent: "center",
                justifyContent: "space-evenly",
              }}
              key={product[0]}
            >
              <h1> Title: {product[1].title}</h1>
              <img
                src={product[1].image}
                alt="imager"
                width="300"
                height="300"
              ></img>
              <h5>{product[1].description}</h5>
              <h2>Price :{product[1].price}$</h2>
              <h2>
                ratings : {product[1].rating.rate} count:
                {product[1].rating.count}
              </h2>
              <div>
                <button
                  onClick={(e) => {
                    handleClick(e, product);
                  }}
                >
                  addToCart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
let mapStateToProps = function (store) {
  return store;
};
let mapDisPatchToProps = (dispatch) => {
  return {
    addToCart: (product) =>
      dispatch({ type: "addToCart", payload: { product: product } }),
    removeFromCart: () => dispatch({ type: "removeFromCart" }),
    fetchData: () => dispatch({ type: "FETCH_PRODUCT_DATA" }),
  };
};

export default connect(mapStateToProps, mapDisPatchToProps)(Home);
