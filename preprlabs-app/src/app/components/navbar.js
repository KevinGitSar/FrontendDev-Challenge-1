"use client"; // This is a client component
import {useState} from "react";

export default function navbar() {
    let [toggle, setToggle] = useState(true);
    const handleToggle = () => {
        return setToggle(!toggle);
    }
    return (
    <>
    <div className="flex justify-between h-[40px] m-[5px] p-[5px]">
        <img src="preprlabs-logo.png" className="h-auto" />
        <button className="h-auto" onClick={() => handleToggle()}>
            {toggle ? <img src="hamburger-240.png" className="w-[40px] h-auto"/> : <img src="x-mark-240.png" className="w-[40px] h-auto"/>}
        </button>
    </div>
    <div>
        <div>
            <div>
                {/* add Search bar  */}
            </div>
            <div>
                {/* add profile picture name and rank */}
            </div>
        </div>
        <ul>
            <li className="px-[30px] py-[10px]"><a href="">Explore</a></li>
            <li className="px-[30px] py-[10px]"><a href="">Dashboard</a></li>
            <li className="px-[30px] py-[10px]"><a href="">My Labs</a></li>
            <li className="px-[30px] py-[10px]"><a href="">My Challenges</a></li>
            <li className="px-[30px] py-[10px]"><a href="">My Projects</a></li>
            <li className="px-[30px] py-[10px]"><a href="">Browse</a></li>
            <li className="px-[30px] py-[10px]"><a href="">Account</a></li>
            <li className="px-[30px] py-[10px]"><a href="">Help Center</a></li>
            <li className="px-[30px] py-[10px]"><a href="">Log Out</a></li>
        </ul>
    </div>
    </>
    )
  }
  