import React from 'react'

import Navbar from '../../components/Navbar/Navbar';

import { FaChevronDown } from "react-icons/fa";
import { ImCalendar } from "react-icons/im";
import { FaImagePortrait } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { BsGenderTrans } from "react-icons/bs";
import { GoSignOut } from "react-icons/go";
import './style.css'

function ProfileAdmin() {
    return (
        <div className='ProfileAdmin'>
            {/* <Navbar></Navbar> */}
            <div className="box">
                <aside className='sidebar' data-sidebar>
                    <div className="sidebar-info">
                        <figure className="avatar-box">
                            <img src="https://img.freepik.com/free-photo/jump-rope-neck-gorgeous-blonde-woman-gym-her-weekend-time_146671-17008.jpg" alt="Richard hanrick" width="80"/>
                        </figure>

                        <div className="info-content">
                            <h1 className="name" title='Richard hanrick'>Richard hanrick</h1>
                            <p className="title">Admin</p>
                        </div>

                        {/* <button className='info_more-btn'data-sidebar-btn>
                            <span>Show Contacts</span>
                            <i> <FaChevronDown /></i>
                        </button> */}
                    </div>

                    <div className='sidebar-info_more'>
                        <div className='separator'>
                            <ul className="contacts-list">
                                <li className='contact-item'>
                                    <div className="icon-box">
                                        <i><ImCalendar /></i>
                                    </div>
                                
                                    <div className="contact-info">
                                        <p className="contact-title">Birthday</p>
                                        <time className="dataAdmin" dateTime="1982-06-23">June 23, 1982</time>
                                    </div>
                                </li>

                                <li className='contact-item'>
                                    <div className="icon-box">
                                        <i><FaImagePortrait /></i>
                                    </div>
                                
                                    <div className="contact-info">
                                        <p className="contact-title">Age</p>
                                        <div className="dataAdmin">21 ปี</div>
                                    </div>
                                </li>

                                <li className='contact-item'>
                                    <div className="icon-box">
                                        <i><BsGenderTrans /></i>
                                    </div>
                                
                                    <div className="contact-info">
                                        <p className="contact-title">Gender</p>
                                        <div className="dataAdmin">LGBTQ</div>
                                    </div>
                                </li>

                                <li className='contact-item'>
                                    <div className="icon-box">
                                        <i><FiPhone /></i>
                                    </div>
                                
                                    <div className="contact-info">
                                        <p className="contact-title">Phone</p>
                                        <div className="dataAdmin">0987654321</div>
                                    </div>
                                </li>
                            </ul>
                            <div className="buttom">
                                <button><GoSignOut />Sing Out</button>
                            </div>
                        </div>
                    </div>
                </aside>

                <form>
                        
                </form>
            </div>
        </div>
    )
}

export default ProfileAdmin