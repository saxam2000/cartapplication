import React from 'react'
import {connect} from "react-redux";

function Home(props) {
    console.log(props);
    return (
        <div>
            <h1> hello from home </h1>
            <button onClick={ props.addToCart} >addToCart</button>
            <button onClick={ props.removeFromCart} >removeFromCart</button>
        </div>
    )
}
let mapStateToProps=function(store){
    return store;
}
let mapDisPatchToProps=(dispatch)=>{
    return{

        addToCart:()=> dispatch({type:"addToCart"}),
        removeFromCart:()=>dispatch({type:"removeFromCart"})
    }
}

export default connect(mapStateToProps,mapDisPatchToProps)(Home);
