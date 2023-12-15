import React, { useState, useRef } from "react";
import { useNavigate, } from "react-router-dom";
import { message, Form,} from "antd";
import "./style.css";

import Navbar from '../../components/Navbar/Navbar';
import { AdminInterface } from "../../interface/IAdmin";
import { CreateAdmin, GetAdminByEmail } from "../../service/https/Admin";
import { Link } from "react-router-dom";
import muscle from '../../img/muscle.png';



function LoginAdmin() {
    const [logregBoxActive, setLogregBoxActive] = useState(false);

    const handleRegisterClick = () => {
        setLogregBoxActive(true);
    };

    const handleLoginClick = () => {
        setLogregBoxActive(false);
    };
    
     // Create Admin
    const [form] = Form.useForm();
    let navigate = useNavigate();
    const [messageApi, contextHolder] = message.useMessage();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmitSignIn = async (values: AdminInterface) => {
        values.AdminUsername = username;
        values.AdminEmail = email;
        values.AdminPassword = password;

    let res = await CreateAdmin(values);
    if (res.status) {
    messageApi.open({
        type: "success",
        content: "บันทึกข้อมูลสำเร็จ",
    });
    setTimeout(function () {
        navigate("/LoginAdmin");
        window.location.reload();
    }, 2000);
    } else {
    messageApi.open({
        type: "error",
        content: "บันทึกข้อมูลไม่สำเร็จ",
    });
    }
    };

    //login admin
    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [loginMessage, setLoginMessage] = useState("");
    const getEmail = localStorage.getItem("emailDataAdmin");
    const getPassword = localStorage.getItem("passwordDataAdmin");

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const emailValue = emailRef.current?.value;
        const passwordValue = passwordRef.current?.value;        
        
        setConfirmLoading(true);

        try {
            const adminE = await GetAdminByEmail(emailValue);
            if (adminE.AdminEmail === emailValue && adminE.AdminPassword === passwordValue) {
                const adminInfo = JSON.stringify(adminE);
                
                localStorage.setItem("adminInfo", adminInfo);
                console.log(adminInfo);
                message.success("เข้าสู่ระบบสำเร็จ");

                navigate("/DashboardAdmin");
            } else {
                message.error("เข้าสู่ระบบไม่สำเร็จ");
            }
        } catch (error) {
            console.error("เกิดข้อผิดพลาดในการล็อกอิน:", error);
            message.error("เข้าสู่ระบบไม่สำเร็จ");
        } finally {
            setConfirmLoading(false);
        }
    };

    //logn out
    const handleLogout = () => {
        localStorage.removeItem("adminInfo");
        window.location.reload();
    };


    return (
        <div className="loginadmin">
            <Navbar></Navbar>

            <div className="background"></div>

            <div className="container">
                <div className="content">
                    <div className="logo">
                        <img src={muscle} alt="Muscle Logo" />
                        T10 SPORT
                    </div>

                    <div className="text-sci">
                        <h2>
                            Welcome! <br />
                            <span>To Our New Website.</span>
                        </h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, nihil!</p>

                    </div>
                </div>

                <div className={`logreg-box ${logregBoxActive ? 'active' : ''}`}>                    
                <div className="form-box login">
                        <form action="#">
                            <h2>Sign In</h2>
                            {getEmail && getPassword ? null : (
                                <div>
                                    {loginMessage && <p>{loginMessage}</p>}
                                    <div className="input-box">
                                        <span className="icon"></span>
                                        <input
                                            type="email"
                                            ref={emailRef}
                                            required
                                            id="adminEmail"
                                        />
                                        <label>Email</label>
                                    </div>

                                    <div className="input-box">
                                        <span className="icon"></span>
                                        <input
                                            type="password"
                                            required
                                            ref={passwordRef}                                        
                                            id="adminPassword"
                                        />
                                        <label>Password</label>
                                    </div>

                                    <div className="remember-forgot">
                                        <label>
                                            <input type="checkbox" />
                                            Remember me
                                        </label>
                                        <a href="#">Forgot password</a>
                                    </div>

                                    <button type="submit" onClick={handleSubmit} className="btn">
                                        Sign In
                                    </button>
                                </div>
                            )}
                            <div className="login-register">
                                <p>
                                    Don't have an account ? 
                                    <a href="#" className="register-link" onClick={handleRegisterClick}> Sign up</a>
                                </p>
                            </div>
                        </form>
                    </div>

                    <div className="form-box register">
                        <Form form={form} onFinish={handleSubmitSignIn}>                            
                            <h2>Sign Up</h2>
                                {contextHolder}
                                <div className="input-box">
                                    <span className="icon"></span>
                                    <input
                                        type="text"
                                        required
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                    <label htmlFor="label">Username</label>
                                </div>

                                <div className="input-box">
                                    <span className="icon"></span>
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <label htmlFor="label">Email</label>
                                </div>

                                <div className="input-box">
                                    <span className="icon"></span>
                                    <input
                                        type="password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <label htmlFor="label">Password</label>
                                </div>

                                <div className="remember-forgot">
                                    <label>
                                        <input type="checkbox" />
                                        I agree to the terms & conditions
                                    </label>
                                </div>

                                <button type="submit" className="btn">
                                    Sign Up
                                </button>
                            
                            <div className="login-register">
                                <p>
                                    Already have an account? <a href="#" className="login-link" onClick={handleLoginClick}>Sign in</a>
                                </p>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginAdmin;
