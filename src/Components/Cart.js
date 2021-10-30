import React from "react";
import { connect } from "react-redux";

function Cart(props) {
  return (
    <div>
      <h1>this is cart page</h1>
      <div
        style={{
          display: "flex",
          width: "90%",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {props.cart.map((product) => {
          return (
            <div
              key={product.product[0]}
              style={{
                display: "flex",
                flexDirection: "row",
                width: "90%",
                margin: "2rem 5px",
                justifyContent:"space-between"
              }}
            >
                <div style={{display:"flex",width:"40%",flexDirection:'row',alignContent:"center",justifyContent:"center"}}>

              <img
                src={product.product[1].image}
                style={{ height: "300px", width: "300px" }}
                alt="productImage"
                ></img>
              <div className="quantity and price" style={{display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignContent:"center",width:"4rem"}}>
<div className="quantity">

              <input className="e-input"style={{height:"1.5rem",width:"2.5rem"}} type="text" placeholder="Enter Name" value={product.quantity} readOnly= {true}/> 
</div>
              <h2 style={{width:"5rem"}}>price:{product.product[1].price}$   </h2>
              </div>
            </div>
            <div style={{width:"40%",display:"flex",flexDirection:"column",margin:"3px"}}> <h1>{product.product[1].title}</h1>
            <h4>{product.product[1].description}</h4>
            <h3>Ratings :    {product.product[1].rating.rate}</h3>
            </div>
                </div>
          );
        })}
      </div>
    </div>
  );
}
let mapStateToProps = (store) => {
  return store;
};
let mapDispatchToProps = (dispatch) => {
  return {
    IncreaseQuantity: (product) =>
      dispatch({
        action: "IncreaseCount",
        payload: {
          product: product,
        },
      }),
    DecreaseQuantity: (product) =>
      dispatch({
        action: "DecreaseCount",
        payload: {
          product: product,
        },
      }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
