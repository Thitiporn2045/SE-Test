import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";

import './style.css';

import { MemberInterface } from '../../interface/IMember';
import { GetAllMember } from '../../service/https/Member';
import { IoHome } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { FaDumbbell } from "react-icons/fa6";
import { PiSignOutBold } from "react-icons/pi";
import { FaBars } from "react-icons/fa";

import muscle2 from '../../img/muscle2.png';

import MainDasboard from '../../components/MainDashboard/MainDasboard';

const DashboardAdmin = () => {
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(true);
    
    const toggleCloseSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
    };
    const toggleShoeSideMenu = () => {
        setIsSideMenuOpen(!isSideMenuOpen);
    };

    // getAllMember
    const [members, setMembers] = useState<MemberInterface[]>([]);
    const getAllMembers = async () => {
        let res = await GetAllMember();
        if (res) {
            setMembers(res);
        }
    };
    
    //logn out
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("adminInfo");
        navigate("/DashboardAdmin");
    };


    useEffect(() => {
        // Fetch data when the component mounts
        getAllMembers();
        console.log(members[0])
    }, []);

    return (
        <div className='registerMember'>
            <div className="container" style={{ gridTemplateColumns: isSideMenuOpen ? '12rem auto 21rem' : 'auto 23rem' }}>
                <aside style={{ display: isSideMenuOpen ? 'block' : 'none' }}>
                    <div className="top">
                    <div className="logo">
                        <img src={muscle2} alt="" />                     
                        <h2>T10 <span>SPORT </span> </h2>
                    </div>
                    <div className="close" id="close-btn" onClick={toggleCloseSideMenu}>
                        <span className="material-symbols-outlined">
                        close
                        </span>
                    </div>
                    </div>
                    <div className="sidebar">
                        <a href="/DashboardAdmin" className='active'>
                            <span className="material-symbols-outlined"><IoHome /></span>
                            <h3>Dashboard</h3>
                        </a>
                        <a href="/AddMember">
                            <span className="material-symbols-outlined"><FaUsers /></span>
                            <h3>Member</h3>
                        </a>
                        <a href="/AddTrainer">
                            <span className="material-symbols-outlined"><FaDumbbell /></span>
                            <h3>Trainer</h3>
                        </a>
                        <a href="#">
                            <span className="material-symbols-outlined">icon</span>
                            <h3>Dashboard</h3>
                        </a>
                        <a href="#">
                            <span className="material-symbols-outlined">icon</span>
                            <h3>Dashboard</h3>
                        </a>
                        <a href="#">
                            <span className="material-symbols-outlined">icon</span>
                            <h3>Dashboard</h3>
                        </a>
                        <a href="#" onClick={handleLogout}>
                            <span className="material-symbols-outlined"><PiSignOutBold /></span>
                            <h3>Sign Out</h3>
                        </a>
                    </div>
                </aside>
                {/* <!------------------------------------------------> */}
                <main className='main'>
                    <div className="className" id="close-btn" onClick={toggleCloseSideMenu}>
                        <span className="material-symbols-outlined">
                            <FaBars />
                        </span>
                    </div>
                    <h1>Dashboard</h1>

                    <div className="date">
                        <input type="date" />
                    </div>

                    <div className="insights">
                        <div className="sales">
                            <span className="material-symbols-outlined">ico</span>
                            <div className="middle">
                                <div className="left">
                                    <h3>Total Sales</h3>
                                    <h1>$25,024</h1>
                                </div>
                                <div className="progress">
                                    <svg>
                                        <circle cx="38" cy="38" r="36"></circle>
                                    </svg>
                                    <div className="number">
                                        <p>81%</p>
                                    </div>
                                </div>
                            </div>
                            <small className="text-muted">Last 24 Hours</small>                    
                        </div>
                        {/* <!------------------------------------------------> */}
                        <div className="expenses">
                            <span className="material-symbols-outlined">ico</span>
                            <div className="middle">
                                <div className="left">
                                    <h3>Total Expenses</h3>
                                    <h1>$14,160</h1>
                                </div>
                                <div className="progress">
                                    <svg>
                                        <circle cx="38" cy="38" r="36"></circle>
                                    </svg>
                                    <div className="number">
                                        <p>62%</p>
                                    </div>
                                </div>
                            </div>
                            <small className="text-muted">Last 24 Hours</small>                    
                        </div>
                        {/* <!------------------------------------------------> */}
                        <div className="income">
                            <span className="material-symbols-outlined">ico</span>
                            <div className="middle">
                                <div className="left">
                                    <h3>Total Income</h3>
                                    <h1>$10,864</h1>
                                </div>
                                <div className="progress">
                                    <svg>
                                        <circle cx="38" cy="38" r="36"></circle>
                                    </svg>
                                    <div className="number">
                                        <p>44%</p>
                                    </div>
                                </div>
                            </div>
                            <small className="text-muted">Last 24 Hours</small>                    
                        </div>
                    </div>
                    {/* <!------------------------------------------------> */}
                    <div className="recent-orders">
                        <h2>Recent Order</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Password</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {members.slice(0, 6).map((member, index) => (
                                    <tr key={index}>
                                        <td>{member.ID}</td>
                                        <td>{member.MemberUsername}</td>
                                        <td>{member.MemberEmail}</td>
                                        <td>{member.MemberPassword}</td>
                                        <td className={member.MemberStatus ? 'pass-status' : 'fail-status'}>
                                        {member.MemberStatus ? 'Pass' : "Did's Pass"}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <a href="/AddMember">Show All</a>
                    </div>
                </main>
                {/* <!------------------------------------------------> */}
                <div className="right">
                    <MainDasboard></MainDasboard>
                    {/* <!------------------------------------------------> */}
                    <div className="recent-updates">
                        <h2>Recent Update</h2>
                        <div className="updates">
                            <div className="update">
                                <div className="profile-photo">
                                    <img src="https://img.freepik.com/free-photo/pensive-young-professiona-deep-thoughts_1262-16211.jpg" alt="" />
                                </div>
                                <div className="message">
                                    <p><b>Mike Tyson</b>received his order of Night lion tech GPS drone</p>
                                    <small className="text-muted">2 Minutes Ago</small>
                                </div>
                            </div>
                            <div className="update">
                                <div className="profile-photo">
                                    <img src="https://img.freepik.com/free-photo/pensive-young-professiona-deep-thoughts_1262-16211.jpg" alt="" />
                                </div>
                                <div className="message">
                                    <p><b>Mike Tyson</b>received his order of Night lion tech GPS drone</p>
                                    <small className="text-muted">2 Minutes Ago</small>
                                </div>
                            </div>
                            <div className="update">
                                <div className="profile-photo">
                                    <img src="https://img.freepik.com/free-photo/pensive-young-professiona-deep-thoughts_1262-16211.jpg" alt="" />
                                </div>
                                <div className="message">
                                    <p><b>Mike Tyson</b>received his order of Night lion tech GPS drone</p>
                                    <small className="text-muted">2 Minutes Ago</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!------------------------------------------------> */}
                    <div className="sales-analytics">
                        <h2>Sales Analytics</h2>
                        <div className="item online">
                            <div className="icon">
                                <span className="material-symbols-outlined">ico</span>
                            </div>
                            <div className="right">
                                <div className="info">
                                    <h3>ONLINE ORDERS</h3>
                                    <small className="text-muted">Last 24 Hours</small>
                                </div>
                                <h5 className="success">+39%</h5>
                                <h3>3849</h3>
                            </div>
                        </div>
                        <div className="item offline">
                            <div className="icon">
                                <span className="material-symbols-outlined">ico</span>
                            </div>
                            <div className="right">
                                <div className="info">
                                    <h3>OFFLINE ORDERS</h3>
                                    <small className="text-muted">Last 24 Hours</small>
                                </div>
                                <h5 className="danger">-17%</h5>
                                <h3>3849</h3>
                            </div>
                        </div>
                        <div className="item customers">
                            <div className="icon">
                                <span className="material-symbols-outlined">ico</span>
                            </div>
                            <div className="right">
                                <div className="info">
                                    <h3>NEW CUSTOMERS</h3>
                                    <small className="text-muted">Last 24 Hours</small>
                                </div>
                                <h5 className="success">+25%</h5>
                                <h3>849</h3>
                            </div>
                        </div>
                        <div className="item add-product">
                            <div>
                                <span className="material-symbols-outlined">ico</span>
                            </div>
                            <h3>Add Product</h3>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    )
}

export default DashboardAdmin