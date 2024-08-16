import React from "react";
import {
  Dashboard,
  Mail,
  Message,
  Wallet,
  ShowChart,
  CreditCard,
  Logout,
} from "@mui/icons-material";
import Logo from '../assets/logo.png'

const Sidebar: React.FC = () => {
  return (
    <div className=" h-screen bg-black text-white p-4 ml-2 mt-4 fixed rounded-3xl ">
      <div className="mb-8">
      <img 
          src={Logo} 
          alt="Logo" 
          className="w-5 h-auto" 
        />
      </div>
      <div className="flex flex-col space-y-4">
        <div className="flex items-center text-green-400">
          <Dashboard />
        </div>
        <div className="flex items-center">
          <Wallet />
        </div>
        <div className="flex items-center">
          <Message />
        </div>
        <div className="flex items-center">
          <Mail />
        </div>
        <div className="flex items-center">
          <ShowChart />
        </div>
        <div className="flex items-center">
          <CreditCard />
        </div>
        <div className="flex items-center ">
          <Logout />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
