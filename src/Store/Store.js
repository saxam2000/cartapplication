import {createStore} from "redux";

let initialState = {
count:3,
}
function cartReducer(state=initialState, action){
    console.log(action);
    switch(action.type){
        case "increase":return {count:state.count+1}
        case "addToCart":return {count:state.count+1}
        case "removeFromCart":return {count:state.count-1}
        default:{return state}
    }
}
// function ProductsReducer(state=initialState,action){
//     switch(action.type){
//         default: return state;
//     }
// }
// let store=createStore(ProductsReducer);
let store =createStore(cartReducer)
export default store;