import React, { useState, useEffect } from 'react';
import './style.css';

import { MemberInterface } from '../../interface/IMember';
import { GetAllMember, CreateMember } from '../../service/https/Member';
import { FaUserPlus, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { message, Form, Input, Modal} from "antd";

const Table = () => {
    // getAllMember
    const [members, setMembers] = useState<MemberInterface[]>([]);
    const getAllMembers = async () => {
        let res = await GetAllMember();
        if (res) {
            setMembers(res);
        }
    };

    // Enable statur

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
        navigate("/employee/room");
    }, 2000);
    } else {
    messageApi.open({
        type: "error",
        content: "บันทึกข้อมูลไม่สำเร็จ",
    });
    }
};

    useEffect(() => {
        // Fetch data when the component mounts
        getAllMembers();
    }, []);

    return (
        <div className="Table">
            <button className="newUser" onClick={showCustomModal}>
                New User <FaUserPlus />
            </button>

            {isCustomModalVisible && (
                <div className="custom-modal-overlay">
                    <div className="custom-modal">
                        <h2>Create New User</h2>
                        <Form form={form} onFinish={handleSubmit}>
                            {contextHolder}
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
                            
                            <button onClick={hideCustomModal}>Cancel</button>
                            <button className="adduser" type="submit" color="primary">
                                Add <FaUserPlus />
                            </button>
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
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {members.map((member, index) => (
                        <tr key={index}>
                            <td>{member.ID}</td>
                            <td>{member.MemberUsername}</td>
                            <td>{member.MemberEmail}</td>
                            <td>{member.MemberPassword}</td>
                            <td>{member.MemberStatus ? 'Pass' : "Did's Pass"}</td>
                            <td>
                                
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <a href="#">Show All</a>

            
        </div>
    );
};

export default Table;

