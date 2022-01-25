import React from "react";
import './Sidebar.scss';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>Instruction</h2>
            <ul>
                <li>
                    Create cart
                    <p>1.Click Creat cart the new post</p>
                </li>
                <li>
                    Sort Cart
                    <p>1.Click Sort cart the sort carts by ID</p>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;