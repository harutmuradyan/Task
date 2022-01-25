import React,{ useCallback } from "react";
import './Content.scss';
import Carts from "../Carts/Carts";
import { useState } from 'react';

const Content = () => {
    const [carts , setCarts] = useState([]) 
    const [title,setTitle] = useState('')
    
    const getRandomInt = useCallback((max) => {
        return Math.floor(Math.random() * max);
    },[])
      

    const addNewCart = useCallback(() => {
        const newCart = {
            id : getRandomInt(10000),
            title: title,
        }
        setCarts(prev => {
            return [
                ...prev,
                newCart
            ]
        });
    },[title,getRandomInt])

    
    const handleSort = useCallback(() => {
        const sortedCarts = [...carts].sort((a,b) => {
            return b.id - a.id;
        })
        setCarts(sortedCarts);
    },[carts])

    const removeCart = useCallback((id) => {
        const filteredCart = carts.filter(item => item.id !== id);
        setCarts(filteredCart)
    },[carts])
    
    return (
        <div className="content">
            <div className="content__navbar">
                <ul> 
                    <li>
                        <button className="btn" onClick={addNewCart}>Create cart</button>
                    </li>
                    <li>
                        <button className="btn" onClick={handleSort}>Sort carts</button>
                    </li>
                </ul>
            </div>
            <div> 
                <input 
                    className="styledInput" 
                    value={title}
                    onChange={e => setTitle(e.target.value)} 
                    type="text" 
                    placeholder=" Insert Title"
                />
                 
            </div>
            <Carts remove={removeCart} data={carts}/>
        </div>
    )
}

export default Content;