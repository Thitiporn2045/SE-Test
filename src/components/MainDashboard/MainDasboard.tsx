import React, { useState, useEffect } from 'react';

import './style.css'
import { FiSun } from "react-icons/fi";
import { BsMoonFill } from "react-icons/bs";

function MainDasboard() {

    const [isSideMenuOpen, setIsSideMenuOpen] = useState(true);
    
    const toggleCloseSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
    };
    const toggleShoeSideMenu = () => {
        setIsSideMenuOpen(!isSideMenuOpen);
    };

    //chang theme
    const themeTogglerRef = React.useRef<HTMLDivElement>(null);
    const handleThemeToggle = () => {
        if (themeTogglerRef.current) {
            document.body.classList.toggle('dark-theme-variables');
            themeTogglerRef.current.querySelector('span:nth-child(1)')?.classList.toggle('active');
            themeTogglerRef.current.querySelector('span:nth-child(2)')?.classList.toggle('active');
        }
    };
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const toggleMenu = () => {
        setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
    };

    return (
        <div className="MainDash">
            {/* <div className="right"> */}
                    <div className="top">
                        <button id="menu-btn" onClick={toggleShoeSideMenu}>
                            <span className="material-symbols-outlined">ico</span>
                        </button>
                        <div className="theme-toggler" ref={themeTogglerRef} onClick={handleThemeToggle}>
                            <span className="material-symbols-outlined active"><FiSun /></span>
                            <span className="material-symbols-outlined"><BsMoonFill/></span>
                        </div>
                        <div className="profile">
                            <div className="info">
                                <p>Hey, <b>Deniel</b></p>
                                <small className="text-muted">Admin</small>
                            </div>
                            <div className="heromenu">
                                <div className="profile-photoA">
                                    <nav>
                                        <img src="https://i.pinimg.com/564x/b7/34/1c/b7341cccf44e4ee73f53bbbdda1aeb52.jpg" alt=""id="subMenu" className={isMenuOpen ? 'open-menu' : ''}/>
                                        
                                        <div className="sub-menu-wrap">
                                            <div className="sub-menu">
                                                <div className="user-info">
                                                    <img src="https://i.pinimg.com/564x/b7/34/1c/b7341cccf44e4ee73f53bbbdda1aeb52.jpg" alt="" />
                                                    <h3>Deniel Aldrino</h3>
                                                </div>
                                                <hr />
                                                <a href="#" className='sub-menu-link'>
                                                    <span>icon</span>
                                                    <p>Edit Profile</p>
                                                    <i></i>
                                                </a>
                                                <a href="#" className='sub-menu-link'>
                                                    <span>icon</span>
                                                    <p>Edit Profile</p>
                                                    <i></i>
                                                </a>
                                                <a href="#" className='sub-menu-link'>
                                                    <span>icon</span>
                                                    <p>Edit Profile</p>
                                                    <i></i>
                                                </a>
                                                <a href="#" className='sub-menu-link'>
                                                    <span>icon</span>
                                                    <p>Edit Profile</p>
                                                    <i></i>
                                                </a>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
            {/* </div> */}
        </div>
    )
}

export default MainDasboard