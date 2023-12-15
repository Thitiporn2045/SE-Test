import React, { useState, useEffect } from 'react';
import './style.css';

import { MemberInterface } from '../../interface/IMember';
import { GetAllMember, CreateMember, GetMemberById } from '../../service/https/Member';
import { UpdateStatus } from '../../service/https/Member';
import { FaUserPlus, FaEye } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { message, Form, Input, Modal} from "antd";

import { IoHome } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { FaDumbbell } from "react-icons/fa6";
import { PiSignOutBold } from "react-icons/pi";
import muscle2 from '../../img/muscle2.png';
import { FaBars } from "react-icons/fa";

import MainDasboard from '../../components/MainDashboard/MainDasboard'

function AddMember() {
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

    // Enable statur
    const {cid} = useParams();
    const GetStatusMember = async (id: Number) => {
        let res = await UpdateStatus(id);
        if (res.status) {
            messageApi.open({
            type: "success",
            content: "อนุมัติข้อมูลสำเร็จ"
        });
        setTimeout(function () {
            navigate(`/AddMember`);
        }, 2000);
        } else {
        messageApi.open({
            type: "error",
            content: "บันทึกข้อมูลไม่สำเร็จ"
        });
        }
    }

    // State for custom modal
    const [isCustomModalVisible, setIsCustomModalVisible] = useState(false);

    const showCustomModal = () => {
        setIsCustomModalVisible(true);
    };

    const hideCustomModal = () => {
        setIsCustomModalVisible(false);
    };

    const handleCustomModalSubmit = () => {
        // Your custom modal logic here
        hideCustomModal();
    };
    
    // lable
    const labels = document.querySelectorAll('label');

    labels.forEach((label) => {
    const spanElements = Array.from(label.innerText).map((letter, i) => (
        `<span key=${i} style="transition-delay: ${i * 50}ms">${letter}</span>`
    ));

    // Set innerHTML using dangerouslySetInnerHTML
    label.innerHTML = spanElements.join('');
    });

    // Create User
    const [form] = Form.useForm();
    let navigate = useNavigate();
    const [messageApi, contextHolder] = message.useMessage();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (values: MemberInterface) => {
        values.MemberUsername = username;
        values.MemberEmail = email;
        values.MemberPassword = password;

    let res = await CreateMember(values);
    if (res.status) {
    messageApi.open({
        type: "success",
        content: "บันทึกข้อมูลสำเร็จ",
    });
    setTimeout(function () {
        navigate("/AddMember");
        window.location.reload();
    }, 2000);
    } else {
    messageApi.open({
        type: "error",
        content: "บันทึกข้อมูลไม่สำเร็จ",
    });
    }
};
    

    const [user, setUser] = useState<MemberInterface>();

    // รับข้อมูลจาก params
    let { id } = useParams();

    // const handleStatusChange = async (values: MemberInterface) => {
    //     values.ID = user?.ID;
    //     let res = await UpdateMember(values);
    //     if (res.status) {
    //     messageApi.open({
    //         type: "success",
    //         content: "แก้ไขข้อมูลสำเร็จ",
    //     });
    //     setTimeout(function () {
    //         navigate("/customer");
    //     }, 2000);
    // } else {
    //     messageApi.open({
    //         type: "error",
    //         content: "แก้ไขข้อมูลไม่สำเร็จ",
    //     });
    //     }
    // };

    const getMemberById = async () => {
        let res = await GetMemberById(Number(id));
        if (res) {
        setUser(res);
        // set form ข้อมูลเริ่มของผู่้ใช้ที่เราแก้ไข
        form.setFieldsValue({ 
            MemberStarus: res.MMemberStarus ,
        });
        }
    };

    useEffect(() => {
        // Fetch data when the component mounts
        getAllMembers();
    }, []);

    return (
        <div className='addMember'>
            <div className="container" style={{ gridTemplateColumns: isSideMenuOpen ? '12rem auto' : 'auto' }}>
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
                        <a href="/DashboardAdmin">
                            <span className="material-symbols-outlined"><IoHome /></span>
                            <h3>Dashboard</h3>
                        </a>
                        <a href="/AddMember"  className='active'>
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
                        <a href="#">
                            <span className="material-symbols-outlined"><PiSignOutBold /></span>
                            <h3>Sign Out</h3>
                        </a>
                    </div>
                </aside>
                <main className='main'>
                    <div className="className" id="close-btn" onClick={toggleCloseSideMenu}>
                        <span className="material">
                            <FaBars />
                        </span>
                        <h1 className='title'>Member</h1>
                    </div>
                    <div className="right">
                            <MainDasboard></MainDasboard>
                    </div>
                    <hr />

                    <div className="recent-orders">
                        <div className="Table">
                            <div className='texttitle'>
                                <h1>Create an account</h1>
                            </div>
                            <div className="buttomNew">
                                <button className="newUser" onClick={showCustomModal}>
                                    New User <FaUserPlus />
                                </button>
                            </div>
                            {isCustomModalVisible && (
                                <div className="custom-modal-overlay">
                                    <div className="custom-modal">
                                        <h2>Create New User</h2>
                                        <Form form={form} onFinish={handleSubmit}>
                                            {contextHolder}
                                            <div className="contentIN">
                                                <div className="inputBoxM">
                                                    <input
                                                        type="text"
                                                        required
                                                        className="cardFinput"
                                                        value={username}
                                                        onChange={(e) => setUsername(e.target.value)}
                                                    />
                                                    <label htmlFor="label">Username</label>
                                                </div>
                                                <div className="inputBoxM">
                                                    <input
                                                        type="email"
                                                        required
                                                        className="cardFinput"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                    />
                                                    <label htmlFor="label">Email</label>
                                                </div>
                                                <div className="inputBoxM">
                                                    <input
                                                        type="password"
                                                        required
                                                        className="cardFinput"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                    />
                                                    <label htmlFor="label">Password</label>
                                                </div>
                                            </div>
                                            <div className="buttonCS">
                                                <button onClick={hideCustomModal}>Cancel</button>
                                                <button className="adduser" type="submit" color="primary">
                                                    Add <FaUserPlus />
                                                </button>
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                            )}
                            <table>
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th>Password</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {members.map((member, index) => (
                                        <tr key={index}>
                                            <td>{member.ID}</td>
                                            <td>{member.MemberUsername}</td>
                                            <td>{member.MemberEmail}</td>
                                            <td>{member.MemberPassword}</td>
                                            <td style={{ color: member.MemberStatus ? '#2eb387' : '#CC1010',
                                                            textShadow: member.MemberStatus ? '0 0 10px #2eb387' : '0 0 10px #CC1010'}}>
                                                {member.MemberStatus ? 'Pass' : "Did's Pass"}
                                            </td>                                          
                                            <td>
                                                <button className='change' onClick={ () => GetStatusMember(Number(cid))}>
                                                    Revert
                                                </button>
                                                <button className='delete'>
                                                    delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default AddMember