"use client"; // This is a client component
import {useState} from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ProgressCard from "../components/progressCard";
import BasicCard from "../components/basicCard";
import ScheduleCard from "../components/scheduleCard";
import LeaderboardCard from "../components/leaderboardCard";
import LabsCard from "../components/labsCard";
import ChallengesCard from "../components/challengesCard";
import ProjectsCard from "../components/projectsCard";
import { useSelector } from "react-redux";


export default function Home() {
    
    const projects = useSelector((state) => state.projectReducer);


    //Light/Dark Mode Toggle
    let [toggleMode, setToggleMode] = useState(false);
    const handleToggleMode = () => {
        toggleMode ? document.body.classList.remove('dark', 'bg-[#5C5C5C]') : document.body.classList.add('dark', 'bg-[#5C5C5C]')
        return setToggleMode(!toggleMode);
    }

    return (
    <div>

        {/* Navbar Component */}
        <Navbar darkMode={toggleMode} toggleDarkMode={handleToggleMode} />

        {/* Mid Section */}
        <div className="mt-36">
            <div className="w-11/12 mx-auto">
                <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">Hello, Kevin!<span className="font-normal text-sm md:text-base lg:text-lg text-[#27AE60] hover:underline hover:underline-off-set-8"><a href="#0"> Complete Profile</a></span></h1>
            </div>
            

            {/* Cards Section */}
            <div className="bg-white rounded-lg w-11/12 mx-auto my-5 pb-5">

                <div className="lg:flex lg:mb-5">
                    <div className="py-1 lg:w-1/3">
                        <ProgressCard title={'My Progress'} description={'You joined PreprLabs on Nov 13, 2023, here is your Challenge journey.'}/>
                    </div>
                    <div className="py-1 lg:w-1/3">
                        <BasicCard title={'Continue Where You Left Off!'} description={'Start your PreprLabs journey now!'} image={'last-visited-icon.png'} buttonText={'Explore More'}/>
                    </div>
                    <div className="py-1 lg:w-1/3">
                        <ScheduleCard title={'Upcoming Challenge Deadlines'} description={''} />
                    </div>
                </div>

                <div className="lg:flex lg:mb-5">
                    <div className="py-1 lg:w-2/3">
                        <LeaderboardCard title={'Leaderboard'} />
                    </div>
                    <div className="py-1 lg:w-1/3">
                        <BasicCard title={'Latest Achievement!'} description={'Join Challenges and Labs, get awarded with micro-credentials.'} image={'latest_achievement.png'} buttonText={'Explore More'} />
                    </div>
                </div>

                <div className="lg:flex lg:mb-5">
                    <div className="py-1 lg:w-1/3">
                        <LabsCard title={'0 Labs'} buttonText={'Explore More'} />
                    </div>
                    <div className="py-1 lg:w-1/3">
                        <ChallengesCard title={'0 Challenges'} buttonText={'Explore More'} />
                    </div>
                    <div className="py-1 lg:w-1/3">
                        <ProjectsCard title={'Project(s)'} buttonText={'Explore More'} projects={projects} />
                    </div>
                </div>
            </div>
        </div>


        {/* Footer */}
        <Footer />
    </div>
    )
  }
  