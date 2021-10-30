import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import fetchProductApi from "../Reducers/fetchProductApi";

let initialState = {
  products: [],
  cart: [],
  count: 0,
};
function cartReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case "increase":
      return { ...state, count: state.count + 1 };
    case "addToCart": {
      let newcart = [];
      let productId = action.payload.product[1].id;

      let productObjinCart = state.cart.find(
        (productinCart) => productinCart.product[1].id === productId
      );
      console.log(productObjinCart);
      if(!productObjinCart){
          console.log("abhi ni dala hai cart mai");
        newcart=[...state.cart,{quantity:1,product:action.payload.product}];
          return {...state,cart:newcart,count:state.count+1};
      }else{
          let objIndex = state.cart.findIndex((obj => obj.product[1].id === productId));
          console.log(objIndex);

          newcart=[...state.cart];
          newcart[objIndex].quantity++;
          return {
              ...state,cart:newcart,count:state.count+1
          }
      }

    }
    case "removeFromCart":
      return { ...state, count: state.count - 1 };
    case "SET_PRODUCT_DATA":
      return { ...state, products: Object.entries(action.payload.products) };
    default: {
      return state;
    }
  }
}
// function ProductsReducer(state=initialState,action){
//     switch(action.type){
//         default: return state;
//     }
// }
// let store=createStore(ProductsReducer);
let store = createStore(cartReducer, applyMiddleware(fetchProductApi));
export default store;
