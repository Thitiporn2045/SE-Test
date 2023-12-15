import React, { useState, useRef } from "react";
import { useNavigate, } from "react-router-dom";
import { message, Form,} from "antd";

import { GetTrainerByEmail } from "../../service/https/Trainer";
import { Link } from "react-router-dom";
import muscle from '../../img/muscle.png';
import { IoArrowBack } from "react-icons/io5";
import Navbar from '../../components/Navbar/Navbar';

function LoginTrainer() {
    const [logregBoxActive, setLogregBoxActive] = useState(false);

    const handleRegisterClick = () => {
        setLogregBoxActive(true);
    };

    const handleLoginClick = () => {
        setLogregBoxActive(false);
    };

    //login admin
    const [form] = Form.useForm();
    let navigate = useNavigate();
    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [loginMessage, setLoginMessage] = useState("");
    const getEmail = localStorage.getItem("emailDataTrainer");
    const getPassword = localStorage.getItem("passwordDataTrainer");

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const emailValue = emailRef.current?.value;
        const passwordValue = passwordRef.current?.value;        
        
        setConfirmLoading(true);

        try {
            const trainerE = await GetTrainerByEmail(emailValue);
            if (trainerE.TrainerEmail === emailValue && trainerE.TrainerPassword === passwordValue) {
                const teainerInfo = JSON.stringify(trainerE);

                console.log(teainerInfo);

                localStorage.setItem("teainerInfo", teainerInfo);
                
                message.success("เข้าสู่ระบบสำเร็จ");

                navigate("/MemberInformation");
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

    return (
        <div className="loginmember">
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

                        <div className="social-icons"></div>
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
                            <Link to="/" className="btnback" ><IoArrowBack />Back</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginTrainer;
