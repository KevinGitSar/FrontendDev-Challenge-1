"use client"; // This is a client component
import {useState} from "react";
import Navbar from "../components/navbar"

export default function Home() {
    let [heroToggle, setHeroToggle] = useState(true);
    const handleHeroToggle = () => {
        return setHeroToggle(!heroToggle);
    }
    return (
    <>
        <Navbar />
        {/* Hero Section? */}
        <div className={heroToggle ? 'my-10 p-5 bg-gradient-to-r from-[#D5FFC6] to-[#7BD1F2] text-center' : 'hidden'}>
            
                <button className="h-auto float-right" onClick={() => handleHeroToggle()}>
                    <img src="x-mark-240.png" className="w-[40px] h-auto"/>
                </button>

                <h1 className="mt-20 text-5xl font-bold">Explore Your Interests</h1>
                <p className="mt-5 font-medium">We'll recommend content based on your interests we've listed here.</p>
                <p className="mt-1 font-medium">Feel free to add or remove topics to customize your experience !</p>

                <div className="flex justify-center w-11/12 md:w-8/12 lg:w-1/2 2xl:w-5/12 my-20 mx-auto">
                        <img src="search-240.png" className="bg-white p-4 w-[50px] h-auto border-r rounded-l-lg"/>
                    
                        {/* Add dropdownlist and tags into search bar */}
                        <input type="text" className="pl-5 rounded-r-lg grow focus:outline-none" placeholder="Search Skills" />
                </div>

                <h2 className="font-bold text-3xl">Click an interest to narrow your recommendations.</h2>

                <div className="mt-3 mb-20 w-11/12 md:w-8/12 lg:w-1/2 2xl:w-5/12 mx-auto">
                    <button className="bg-white border rounded-lg p-1 my-2 mx-3">Presentation</button>
                    <button className="bg-white border rounded-lg p-1 my-2 mx-3">Neural Intelligence</button>
                    <button className="bg-white border rounded-lg p-1 my-2 mx-3">Wellness</button>
                    <button className="bg-white border rounded-lg p-1 my-2 mx-3">Project Leadership</button>
                    <button className="bg-white border rounded-lg p-1 my-2 mx-3">Planning</button>
                    <button className="bg-white border rounded-lg p-1 my-2 mx-3">STAR</button>
                    <button className="bg-white border rounded-lg p-1 my-2 mx-3">GitLab</button>
                    <button className="bg-white border rounded-lg p-1 my-2 mx-3">Matplotlib</button>
                    <button className="bg-white border rounded-lg p-1 my-2 mx-3">Presentation Solutions</button>
                    <button className="bg-white border rounded-lg p-1 my-2 mx-3">Digital Production</button>
                </div>
        </div>
    </>
    )
  }
  