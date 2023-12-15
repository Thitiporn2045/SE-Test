import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, } from "react-router-dom";
import { message, Form,} from "antd";

import './style.css'
import profile from "../../img/profile.png"

import { GetGenders } from '../../service/https/Gender';
import { GendersInterface } from '../../interface/IGender';
import { GetMemberType } from '../../service/https/MemberType';
import { MemberTypeInterface } from '../../interface/IMemberType';



const MemberInformation: React.FC = () => {
const profilePicRef = useRef<HTMLImageElement | null>(null);

useEffect(() => {
    const cardbgFInput = document.querySelector('.cardFinput') as HTMLInputElement;
    const cardbgFName = document.querySelector('.cardFname') as HTMLDivElement;

    const cardbgLInput = document.querySelector('.cardLinput') as HTMLInputElement;
    const cardbgLName = document.querySelector('.cardLname') as HTMLDivElement;

    cardbgFInput.addEventListener('input', () => {
        cardbgFName.innerText = cardbgFInput.value;
    });

    cardbgLInput.addEventListener('input', () => {
        cardbgLName.innerText = cardbgLInput.value;
    });

    const labels = document.querySelectorAll('label');

    labels.forEach((label) => {
    const spanElements = Array.from(label.innerText).map((letter, i) => (
        `<span key=${i} style="transition-delay: ${i * 50}ms">${letter}</span>`
    ));

    // Set innerHTML using dangerouslySetInnerHTML
    label.innerHTML = spanElements.join('');
    });
}, []); // Empty dependency array means this effect runs once after the first render

const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (profilePicRef.current && event.target.files?.[0]) {
    const file = event.target.files[0];
    if (file instanceof Blob) {
        profilePicRef.current.src = URL.createObjectURL(file);
    }
    }
};

const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // เพิ่มโค้ดเพื่อดำเนินการเมื่อฟอร์มถูกส่ง
};

//Gender
const [Gender, setGender] = useState<GendersInterface[]>([]);
const getGender = async () => {
    let res = await GetGenders();
    if (res) {
        setGender(res);
    }
};

//MemberType
const [MemberType, setMemberType] = useState<MemberTypeInterface[]>([]);
const getMemberType = async () => {
    let res = await GetMemberType();
    if (res) {
        setMemberType(res);
    }
};

useEffect(() => {
    getGender();
    getMemberType();
}, []);

const [input, setInput] = useState({
    GenderID :0,
    MemberTypeID :0,
});

const handleInput = (e: any) => {
    const { name, value } = e.target;
    setInput({
        ...input,
        [name]: parseInt(value,10),
    });
};



return (
    <div className="MemberInformation">
    <div className="card">
        <div className="imgBox">
            <div className="profile">
                <div className="cardbg">
                    <div className="name">
                        <div className="cardFname">FirstName</div>
                        <div className="cardLname">LastName</div>
                    </div>
                    <p>@Username</p>
                    <div className="profilrimg">
                        <img className="pro" src={profile} id="profile-pic" alt="Profile" ref={profilePicRef} />
                    </div>
                    <label htmlFor="input-file" id="label">
                        Update Image
                    </label>
                    <input type="file" accept="img/jpeg, img/png, img/jpg" id="input-file" onChange={handleFileChange} />
                </div>
            </div>
        </div>
        <div className="datails">
            <div className="content">
                <form onSubmit={handleFormSubmit}>
                <h2>Fill in your information</h2>
                <div className="inputBox">
                    <input type="text" required className='cardFinput' />
                    <label htmlFor="label">FirstName</label>
                </div>
                <div className="inputBox">
                    <input type="text" required className='cardLinput'/>
                    <label htmlFor="label">LastName</label>
                </div>
                <div className="inputBox">
                    <input type="date" required />
                    <label className="date" htmlFor="label">Birthday</label>
                </div>
                <div className="inputBox">
                    <input type="number" required />
                    <label htmlFor="label">Age</label>
                </div>
                <div className="inputBox">
                    <input type="number" step="0.01" required />
                    <label htmlFor="label">Weight</label>
                </div>
                <div className="inputBox">
                    <input type="number" step="0.01" required />
                    <label htmlFor="label">Height</label>
                </div>
                <div className="inputBox">
                    <select className='Gender' name="Gender">
                        <option value="" disabled selected hidden>Gender</option>
                        {Gender.map((item) => (
                            <option value={item.ID} key={item.Gender}>
                                {item.Gender}
                            </option>
                        ) )}
                    </select>
                </div>
                <div className="inputBox">
                    <select className='MemberType' name="MemberType">
                        <option value="" disabled selected hidden>MemberType</option>
                        {MemberType.map((item) => (
                            <option value={item.ID} key={item.MemberType}>
                                {item.MemberType}
                            </option>
                        ) )}
                    </select>
                </div>
                <div className="inputBox">
                    <input type="submit" value="Submit" />
                </div>
                </form>
            </div>
        </div>
    </div>
    </div>
);
};

export default MemberInformation;
