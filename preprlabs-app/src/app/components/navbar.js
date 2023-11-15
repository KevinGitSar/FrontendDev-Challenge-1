"use client"; // This is a client component
import {useState} from "react";

export default function navbar() {
    let [toggle, setToggle] = useState(true);
    const handleToggle = () => {
        return setToggle(!toggle);
    }
    return (
    <div className="bg-white">
        {/* Larger Display Navbar */}
        <div className="hidden lg:block p-5">
            <div className="flex h-[40px] m-[5px] p-[5px]">
                <img src="prepr-logo.png" className="w-[100px] h-auto" />
                <ul className="flex pl-10 mt-auto">
                    <a href=""><li className="px-5 text-lg text-[#8b8b8b] font-bold hover:text-[#27AE60]">Explore</li></a>
                    <a href=""><li className="px-5 text-lg text-[#8b8b8b] font-bold hover:text-[#27AE60]">Dashboard</li></a>
                    <a href=""><li className="px-5 text-lg text-[#8b8b8b] font-bold hover:text-[#27AE60]">My Challenges</li></a>
                    <a href=""><li className="px-5 text-lg text-[#8b8b8b] font-bold hover:text-[#27AE60]">My Labs</li></a>
                    <a href=""><li className="px-5 text-lg text-[#8b8b8b] font-bold hover:text-[#27AE60]">My Projects</li></a>
                    <a href=""><li className="px-5 text-lg text-[#8b8b8b] font-bold hover:text-[#27AE60]">Career Explorer</li></a>
                </ul>
                {/* notification bell */}

                {/* chat bubble */}

                {/* question mark */}

                {/* search bar */}

                {/* profile image  */}

                {/* grid + dropdown  */}
            </div>
        </div>

        {/* Smaller Display Navbar */}
        <div className="lg:hidden p-5 border-b">
            <div className="flex justify-between h-[40px]">
                <img src="prepr-logo.png" className="w-[100px] h-auto" />
                <button className="h-auto" onClick={() => handleToggle()}>
                    {toggle ? <img src="hamburger-240.png" className="w-[40px] h-auto"/> : <img src="x-mark-240.png" className="w-[40px] h-auto"/>}
                </button>
            </div>
            <div className={toggle ? "fixed w-full inset-x-0 my-5 bg-white transform translate-x-[-100%] transition duration-800 ease-in-out" : "fixed w-full inset-x-0 my-5 bg-white transform translate-x-[0%] transition duration-800 ease-in-out"}>
                <div className="bg-[#13A859] py-3">
                    <div className="flex justify-center">
                        <input type="text" className="w-11/12 mx-auto h-[50px] px-10 rounded text-xl placeholder-[#495057] focus:outline-none" placeholder="Search PreprLabs..."/>
                    </div>
                    <div className="mt-8">
                        <div className="flex w-11/12 mx-auto">
                            <img src="https://wallpapers.com/images/hd/cool-profile-picture-1ecoo30f26bkr14o.jpg" className="w-[56px] h-auto object-contain"/>
                            <div className="pl-5">
                                <p className="text-2xl text-white">Kevin Sar</p>
                                <p className="text-sm text-white"><span className="align-middle before:content-[url('https://preprlabs.org/assets/images/header/achievement-glyph.svg')]"></span>Learn Rank 0</p>
                            </div>
                        </div>
                    </div>
                </div>
                <ul>
                    <a href="/explore"><li className="p-[20px] text-[20px] hover:bg-[#F3F4F8]">Explore</li></a>
                    <a href=""><li className="p-[20px] text-[20px] hover:bg-[#F3F4F8]">Dashboard</li></a>
                    <a href="/labs"><li className="p-[20px] text-[20px] hover:bg-[#F3F4F8]">My Labs</li></a>
                    <a href="/challenges"><li className="p-[20px] text-[20px] hover:bg-[#F3F4F8]">My Challenges</li></a>
                    <a href="/projects"><li className="p-[20px] text-[20px] hover:bg-[#F3F4F8]">My Projects</li></a>
                    <a href=""><li className="p-[20px] text-[20px] hover:bg-[#F3F4F8]">Browse</li></a>
                    <a href=""><li className="p-[20px] text-[20px] hover:bg-[#F3F4F8]">Account</li></a>
                    <a href=""><li className="p-[20px] text-[20px] hover:bg-[#F3F4F8]">Help Center</li></a>
                    <a href=""><li className="p-[20px] text-[20px] hover:bg-[#F3F4F8]">Log Out</li></a>
                </ul>
            </div>
        </div>
    </div>
    )
  }
  