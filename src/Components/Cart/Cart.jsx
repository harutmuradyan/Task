import React from "react";
import "./Cart.scss";


const Cart = ({title , id , remove}) => {
    return (
        <div className="cart">
            <i onClick={() => remove(id)} className="fas fa-times"></i>
            <h4>{title}</h4>
            <p>ID : {id}</p> 
        </div>
    )
}

export default Cart;