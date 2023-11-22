"use client"; // This is a client component
import {useState} from "react";

export default function navbar(props) {
    

    //Menu toggle
    let [toggle, setToggle] = useState(true);
    const handleToggle = () => {
        return setToggle(!toggle);
    }
    return (
    <div className="bg-white">
        {/* Larger Display Navbar */}
        <div className="fixed top-0 w-full bg-white hidden lg:block p-3 dark:bg-[#363535]">
            <div className="flex w-full h-[50px] m-[5px]">
                <div className="flex grow">
                    <img src="prepr-logo.png" />
                    <ul className="flex grow pl-1 xl:pl-5 my-auto">
                        <a href="#"><li className="px-2 xl:px-4 text-sm xl:text-lg text-[#8b8b8b] font-bold hover:text-[#27AE60] dark:text-[#F8F9FA] dark:hover:text-[#27AE60]">Explore</li></a>
                        <a href="#"><li className="px-2 xl:px-4 text-sm xl:text-lg text-[#8b8b8b] font-bold hover:text-[#27AE60] dark:text-[#F8F9FA] dark:hover:text-[#27AE60]">Dashboard</li></a>
                        <a href="#"><li className="px-2 xl:px-4 text-sm xl:text-lg text-[#8b8b8b] font-bold hover:text-[#27AE60] dark:text-[#F8F9FA] dark:hover:text-[#27AE60]">My Challenges</li></a>
                        <a href="#"><li className="px-2 xl:px-4 text-sm xl:text-lg text-[#8b8b8b] font-bold hover:text-[#27AE60] dark:text-[#F8F9FA] dark:hover:text-[#27AE60]">My Labs</li></a>
                        <a href="#"><li className="px-2 xl:px-4 text-sm xl:text-lg text-[#8b8b8b] font-bold hover:text-[#27AE60] dark:text-[#F8F9FA] dark:hover:text-[#27AE60]">My Projects</li></a>
                        <a href="#"><li className="px-2 xl:px-4 text-sm xl:text-lg text-[#8b8b8b] font-bold hover:text-[#27AE60] dark:text-[#F8F9FA] dark:hover:text-[#27AE60]">Career Explorer</li></a>
                    </ul>
                </div>
                <div className="flex justify-end">
                    {/* Dark Mode Switch */}
                    <div className="my-auto w-[40px] xl:mx-2">
                        <button className="" onClick={() => props.toggleDarkMode()}>
                            {props.darkMode ? <img src="switch-to-light-240.png" className="w-[30px] h-auto"/> : <img src="switch-to-dark-240.png" className="w-[40px] h-auto"/>}
                        </button>
                    </div>
                    {/* notification bell */}
                    <div className="my-auto w-[30px] xl:mx-2">
                        <a href="#"><img src={props.darkMode ? 'bell-white-240.png' : 'bell-240.png'}className="mx-auto w-[25px] h-auto hover:opacity-80 hover:transition hover:duration-500 hover:ease-in-out"/></a>
                    </div>

                    {/* chat bubble */}
                    <div className="my-auto w-[30px] xl:mx-1">
                        <a href="#"><img src={props.darkMode ? 'speech-bubble-white-240.png' : 'speech-bubble-240.png'} className="mx-auto w-[25px] h-auto hover:opacity-80 hover:transition hover:duration-500 hover:ease-in-out"/></a>
                    </div>

                    {/* question mark */}
                    <div className="my-auto w-[30px] xl:mx-1">
                        <a href="#"><img src={props.darkMode ? 'question-white-240.png' : 'question-mark-240.png'} className="mx-auto w-[25px] h-auto hover:opacity-80 hover:transition hover:duration-500 hover:ease-in-out"/></a>
                    </div>

                    {/* search bar */}
                    <div className="my-auto mx-2 xl:mx-1">
                        <input type="text" placeholder="Search..." className="pl-3 h-[40px] border focus:outline-none w-[175px] xl:w-full dark:bg-[#F8F9FA]" />
                    </div>

                    {/* profile image  */}
                    <div className="flex w-[50px] h-[50px] xl:mx-1">
                        <input type="image" src="https://wallpapers.com/images/hd/cool-profile-picture-1ecoo30f26bkr14o.jpg" className="border rounded-full w-[50px] h-auto object-contain"/>
                    </div>

                    {/* grid + dropdown  */}
                    <div className="my-auto w-[50px] xl:mx-1">
                        <a href=""><img src={props.darkMode ? 'grid-filled-white-240.png' : 'grid-filled-240.png'} className="mx-auto w-[50px] h-auto hover:opacity-80 hover:transition hover:duration-500 hover:ease-in-out"/></a>
                    </div>
                </div>
            </div>
        </div>

        {/* Smaller Display Navbar */}
        <div className="fixed top-0 w-full bg-white lg:hidden p-5 border-b dark:bg-[#363535]">
            <div className="flex justify-between h-[40px]">
                <img src="prepr-logo.png" />

                <div>
                    <button className="mr-4" onClick={() => props.toggleDarkMode()}>
                        {props.darkMode ? <img src="switch-to-light-240.png" className="w-[40px] h-auto"/> : <img src="switch-to-dark-240.png" className="w-[40px] h-auto"/>}
                    </button>
                    <button className="h-auto" onClick={() => handleToggle()}>
                        {toggle ? <img src={props.darkMode ? 'hamburger-white-240.png': 'hamburger-240.png'} className="w-[40px] h-auto"/> : <img src={props.darkMode ? 'x-mark-white-240.png': 'x-mark-240.png'} className="w-[40px] h-auto"/>}
                    </button>
                </div>
            </div>

            {/* Menu List */}
            <div className={toggle ? "fixed w-full h-full inset-x-0 my-5 bg-white transform translate-x-[-100%] transition duration-800 ease-in-out" : "fixed w-full h-full inset-x-0 my-5 bg-white transform translate-x-[0%] transition duration-800 ease-in-out"}>
                <div className="bg-[#13A859] dark:bg-[#5C5C5C] py-3">
                    <div className="flex justify-center">
                        <input type="text" className="w-11/12 mx-auto h-[50px] px-10 rounded text-xl placeholder-[#495057] focus:outline-none focus:ring-[#5C5C5C]" placeholder="Search PreprLabs..."/>
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
                <ul className="dark:bg-[#363535] dark:text-[#F8F9FA]">
                    <a href="/explore"><li className="p-[20px] text-[20px] hover:bg-[#F3F4F8] dark:hover:bg-[#343A40]">Explore</li></a>
                    <a href=""><li className="p-[20px] text-[20px] hover:bg-[#F3F4F8] dark:hover:bg-[#343A40]">Dashboard</li></a>
                    <a href="/labs"><li className="p-[20px] text-[20px] hover:bg-[#F3F4F8] dark:hover:bg-[#343A40]">My Labs</li></a>
                    <a href="/challenges"><li className="p-[20px] text-[20px] hover:bg-[#F3F4F8] dark:hover:bg-[#343A40]">My Challenges</li></a>
                    <a href="/projects"><li className="p-[20px] text-[20px] hover:bg-[#F3F4F8] dark:hover:bg-[#343A40]">My Projects</li></a>
                    <a href=""><li className="p-[20px] text-[20px] hover:bg-[#F3F4F8] dark:hover:bg-[#343A40]">Browse</li></a>
                    <a href=""><li className="p-[20px] text-[20px] hover:bg-[#F3F4F8] dark:hover:bg-[#343A40]">Account</li></a>
                    <a href=""><li className="p-[20px] text-[20px] hover:bg-[#F3F4F8] dark:hover:bg-[#343A40]">Help Center</li></a>
                    <a href=""><li className="p-[20px] text-[20px] hover:bg-[#F3F4F8] dark:hover:bg-[#343A40]">Log Out</li></a>
                </ul>
            </div>
        </div>
    </div>
    )
  }
  