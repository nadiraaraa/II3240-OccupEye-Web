'use client';
import React from "react";

interface NavProps {
  currPage: string;
}

const Navbar: React.FC<NavProps> = ({currPage}) => {
  return (
    <div className= "fixed w-full bg-blue1 h-[4.5rem] p-4 flex items-center justify-between">
      <button onClick={() => (window.location.href = "/")} className= {(currPage ==="dashboard" ? "text-blue2 hover:text-black1 " : "text-white ")  + "font-bold hover:bg-pink1 ml-4  py-3 rounded-sm"}>
        <img src="/logo.png" alt="logo" className="w-52"></img>
      </button>
      {/* <button onClick={() => (window.location.href = "/dashboard")} className= {(currPage ==="Transcript" ? "text-blue2 hover:text-black1 " : "text-white ")  + "font-bold hover:bg-pink1 pt-2 px-6 rounded-sm"}>Transcript</button> */}
      <button onClick={() => (window.location.href = "/profile")} className= {(currPage ==="logged in" ? " " : "invisible ")  + "font-bold hover:bg-pink1 px-6 rounded-sm flex items-center gap-x-8 text-xl"}>
        Profile
        <img src="/profile.png" alt="profile icon">
        </img>
      </button>
    </div>
  );
};

export default Navbar;