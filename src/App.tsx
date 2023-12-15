import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginMember from './pages/LoginMember/LoginMemer';
import LoginAdmin from './pages/LoginAdmin/LoginAdmin';
import LoginTrainer from './pages/LoginTrainer/LoginTrainer';
import DashboardAdmin from './pages/DashboardAdmin/DashboardAdmin';
import AddMember from './pages/AddUser/AddMember';
import AddTrainer from './pages/AddUser/AddTrainer';

import ProfileAdmin from './pages/ProfileAdmin/ProfileAdmin'
import MemberInformation from './pages/MemberInformation/MemberInformation'
import SelectPage from './pages/SelectPage/SelectPage';


const App: React.FC = () => {
  return (

      <Routes>
        <Route path="/" element={<SelectPage />} />
        <Route path="/LoginMember" element={<LoginMember />} />
        <Route path="/LoginAdmin" element={<LoginAdmin />} />
        <Route path="/LoginTrainer" element={<LoginTrainer />} />
        <Route path="/DashboardAdmin" element={<DashboardAdmin />} />
        <Route path="/MemberInformation" element={<MemberInformation />} />
        <Route path="/ProfileAdmin" element={<ProfileAdmin />} />
        <Route path="/AddMember" element={<AddMember />} />
        <Route path="/AddTrainer" element={<AddTrainer />} />
      </Routes>

  );
}

export default App;
