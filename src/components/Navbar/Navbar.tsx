import React from 'react'

import "./style.css";
import { BsList, BsBoxArrowInRight } from "react-icons/bs";
import muscle from '../../img/muscle.png';

function Navbar() {
    return (
        <div className="Navbar">
            <div className="logo">
                <img src={muscle} alt="Muscle Logo" />
                        T10 SPORT
            </div>
            <div className="menu">
                <BsList />
            </div>
        </div>
    )
}

export default Navbar