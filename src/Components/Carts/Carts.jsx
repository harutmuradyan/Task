import React from "react";
import "./Carts.scss";
import Cart from "../Cart/Cart";
import PropTypes from 'prop-types';

const Carts = ({data, remove}) => {
    return (
        <div className="carts">
            {data.map(item => 
                <Cart remove={remove} key={item.id} title={item.title}  id={item.id}/>
            )}
        </div>
    )
}

Carts.propTypes ={
    data: PropTypes.array.isRequired,
    remove: PropTypes.func.isRequired
}

export default Carts;