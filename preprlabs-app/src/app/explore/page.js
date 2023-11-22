"use client"; // This is a client component
import {useState} from "react";
import Navbar from "../components/navbar"
import Footer from "../components/footer"

export default function Home() {
    //Light/Dark Mode Toggle
    let [toggleMode, setToggleMode] = useState(false);
    const handleToggleMode = () => {
        return setToggleMode(!toggleMode);
    }

    // Toggle for the hero section
    let [heroToggle, setHeroToggle] = useState(true);
    const handleHeroToggle = () => {
        return setHeroToggle(!heroToggle);
    }

    // Switches for the main tabs
    let [mainTabSwitch, setMainTabSwitch] = useState(1);

    const mainLabSwitch = () => {
        return setMainTabSwitch(mainTabSwitch = 1);
    }

    const mainChallengeSwitch = () => {
        return setMainTabSwitch(mainTabSwitch = 2);
    }

    const mainResourceSwitch = () => {
        return setMainTabSwitch(mainTabSwitch = 3);
    }

    const mainProjectSwitch = () => {
        return setMainTabSwitch(mainTabSwitch = 4);
    }

    // Switches for the sub lab tabs
    let [subLabSwitch, setSubLabSwitch] = useState(1);
    
    const labTab1 = () => {
        return setSubLabSwitch(subLabSwitch = 1);
    }

    const labTab2 = () => {
        return setSubLabSwitch(subLabSwitch = 2);
    }

    // Switches for the sub challenge tabs
    let [subChallengeSwitch, setSubChallengeSwitch] = useState(1);
    
    const challengeTab1 = () => {
        return setSubChallengeSwitch(subChallengeSwitch = 1);
    }

    const challengeTab2 = () => {
        return setSubChallengeSwitch(subChallengeSwitch = 2);
    }

    // Switches for the sub resource tabs
    let [subResourceSwitch, setSubResourceSwitch] = useState(1);
    
    const resourceTab1 = () => {
        return setSubResourceSwitch(subResourceSwitch = 1);
    }

    const resourceTab2 = () => {
        return setSubResourceSwitch(subResourceSwitch = 2);
    }

    const resourceTab3 = () => {
        return setSubResourceSwitch(subResourceSwitch = 3);
    }

    //Duration Filter Toggle
    let [durationToggle, setDurationToggle] = useState(false);
    const toggleDuration = () => {
        return setDurationToggle(!durationToggle);
    }

    //Level Filter Toggle
    let [levelToggle, setLevelToggle] = useState(false);
    const toggleLevel = () => {
        return setLevelToggle(!levelToggle);
    }

    //Organization Filter Toggle
    let [organizationToggle, setOrganizationToggle] = useState(false);
    const toggleOrganization = () => {
        return setOrganizationToggle(!organizationToggle);
    }

    //Skills Filter Toggle
    let [skillsToggle, setSkillsToggle] = useState(false);
    const toggleSkills = () => {
        return setSkillsToggle(!skillsToggle);
    }

    //Status Filter Toggle
    let [statusToggle, setStatusToggle] = useState(false);
    const toggleStatus = () => {
        return setStatusToggle(!statusToggle);
    }

    return (
    <div  className={toggleMode ? 'dark bg-[#5C5C5C]' : ""}>

        {/* Navbar Component */}
        <Navbar darkMode={toggleMode} toggleDarkMode={handleToggleMode} />

        {/* Hero Section */}
        <div className={heroToggle ? 'mt-20 p-5 bg-gradient-to-r from-[#D5FFC6] to-[#7BD1F2] text-center dark:text-[#F8F9FA] dark:bg-gradient-to-r dark:from-[#5C5C5C] dark:to-[#212529] ' : 'hidden'}>
        
            <button className="h-auto float-right" onClick={() => handleHeroToggle()}>
                <img src="x-mark-240.png" className="w-[40px] h-auto dark:bg-[#F8F9FA] dark:rounded-lg"/>
            </button>

            <h1 className="mt-20 text-5xl font-bold">Explore Your Interests</h1>
            <p className="mt-5 font-medium">We'll recommend content based on your interests we've listed here.</p>
            <p className="mt-1 font-medium">Feel free to add or remove topics to customize your experience !</p>

            <div className="flex justify-center w-11/12 md:w-8/12 lg:w-1/2 2xl:w-5/12 my-20 mx-auto">
                    <img src="search-240.png" className="bg-white p-4 w-[50px] h-auto border-r rounded-l-lg"/>
                
                    {/* Add dropdownlist and tags into search bar */}
                    <input type="text" className="pl-5 rounded-r-lg grow focus:outline-none dark:bg-[#363535]" placeholder="Search Skills" />
            </div>

            <h2 className="font-bold text-3xl">Click an interest to narrow your recommendations.</h2>

            <div className="mt-3 mb-20 w-11/12 md:w-8/12 lg:w-1/2 2xl:w-5/12 mx-auto">
                <button className="bg-white border rounded-lg p-1 my-2 mx-3 dark:bg-[#363535] dark:border-[#ADB5BD]">Presentation</button>
                <button className="bg-white border rounded-lg p-1 my-2 mx-3 dark:bg-[#363535] dark:border-[#ADB5BD]">Neural Intelligence</button>
                <button className="bg-white border rounded-lg p-1 my-2 mx-3 dark:bg-[#363535] dark:border-[#ADB5BD]">Wellness</button>
                <button className="bg-white border rounded-lg p-1 my-2 mx-3 dark:bg-[#363535] dark:border-[#ADB5BD]">Project Leadership</button>
                <button className="bg-white border rounded-lg p-1 my-2 mx-3 dark:bg-[#363535] dark:border-[#ADB5BD]">Planning</button>
                <button className="bg-white border rounded-lg p-1 my-2 mx-3 dark:bg-[#363535] dark:border-[#ADB5BD]">STAR</button>
                <button className="bg-white border rounded-lg p-1 my-2 mx-3 dark:bg-[#363535] dark:border-[#ADB5BD]">GitLab</button>
                <button className="bg-white border rounded-lg p-1 my-2 mx-3 dark:bg-[#363535] dark:border-[#ADB5BD]">Matplotlib</button>
                <button className="bg-white border rounded-lg p-1 my-2 mx-3 dark:bg-[#363535] dark:border-[#ADB5BD]">Presentation Solutions</button>
                <button className="bg-white border rounded-lg p-1 my-2 mx-3 dark:bg-[#363535] dark:border-[#ADB5BD]">Digital Production</button>
            </div>
        </div>

        {/* Main Tabs */}
        <div className="dark:bg-[#5C5C5C] dark:h-[75px]"></div>
        <div className={heroToggle ? 'w-10/12 mx-auto mt-28 mb-5 bg-white border rounded-xl lg:w-11/12 xl:w-3/4 2xl:w-8/12' : 'w-10/12 mx-auto mt-10 mb-5 bg-white border rounded-xl lg:w-11/12 xl:w-3/4 2xl:w-8/12'}>
            <button className={mainTabSwitch == 1 ? 'w-1/4 h-[40px] text-center table-cell align-middle rounded-l-xl font-bold text-lg text-white bg-[#498CCE] dark:bg-[#5C5C5C]' : 'w-1/4 h-[40px] text-center table-cell align-middle rounded-l-xl font-bold text-lg'} onClick={() => mainLabSwitch()}>Labs</button>
            <button className={mainTabSwitch == 2 ? 'w-1/4 h-[40px] text-center table-cell align-middle font-bold text-lg text-white bg-[#498CCE] dark:bg-[#5C5C5C] px-2' : 'w-1/4 h-[40px] text-center table-cell align-middle rounded-l-xl font-bold text-lg px-2'} onClick={() => mainChallengeSwitch()}>Challenges</button>
            <button className={mainTabSwitch == 3 ? 'w-1/4 h-[40px] text-center table-cell align-middle font-bold text-lg text-white bg-[#498CCE] dark:bg-[#5C5C5C] px-2' : 'w-1/4 h-[40px] text-center table-cell align-middle rounded-l-xl font-bold text-lg px-2'} onClick={() => mainResourceSwitch()}>Resources</button>
            <button className={mainTabSwitch == 4 ? 'w-1/4 h-[40px] text-center table-cell align-middle rounded-r-xl font-bold text-lg text-white bg-[#498CCE] dark:bg-[#5C5C5C]' : 'w-1/4 h-[40px] text-center table-cell align-middle rounded-l-xl font-bold text-lg'} onClick={() => mainProjectSwitch()}>Projects</button>
        </div>

        <div className="w-10/12 mx-auto lg:flex lg:w-11/12 xl:w-3/4 2xl:w-8/12">
            <div className="lg:w-1/4 lg:mr-5">

                {/* Secondary Tabs dependent on main tab selection */}
                {/* Labs Tab */}
                <div className={mainTabSwitch == 1 ? 'my-5 bg-white border rounded-xl' : 'hidden'}>
                    <ul>
                        <a href="#!" onClick={() => labTab1()}><li className={subLabSwitch == 1 ? 'py-2 pl-4 bg-[#498CCE] dark:bg-[#5C5C5C] text-white font-bold rounded-t-xl' : 'py-2 pl-4 font-bold rounded-t-xl'}>Labs</li></a>
                        <a href="#!" onClick={() => labTab2()}><li className={subLabSwitch == 2 ? 'py-2 pl-4 bg-[#498CCE] dark:bg-[#5C5C5C] text-white font-bold rounded-b-xl' : 'py-2 pl-4 font-bold rounded-b-xl'}>Lab Programs</li></a>
                    </ul>
                </div>

                {/* Challenge Tab */}
                <div className={mainTabSwitch == 2 ? 'my-5 bg-white border rounded-xl' : 'hidden'}>
                    <ul>
                        <a href="#!" onClick={() => challengeTab1()}><li className={subChallengeSwitch == 1 ? 'py-2 pl-4 bg-[#498CCE] dark:bg-[#5C5C5C] text-white font-bold rounded-t-xl' : 'py-2 pl-4 font-bold rounded-t-xl'}>Challenges</li></a>
                        <a href="#!" onClick={() => challengeTab2()}><li className={subChallengeSwitch == 2 ? 'py-2 pl-4 bg-[#498CCE] dark:bg-[#5C5C5C] text-white font-bold rounded-b-xl' : 'py-2 pl-4 font-bold rounded-b-xl'}>Challenge Paths</li></a>
                    </ul>
                </div>

                {/* Resource Tab */}
                <div className={mainTabSwitch == 3 ? 'my-5 bg-white border rounded-xl' : 'hidden'}>
                    <ul>
                        <a href="#!" onClick={() => resourceTab1()}><li className={subResourceSwitch == 1 ? 'py-2 pl-4 bg-[#498CCE] dark:bg-[#5C5C5C] text-white font-bold rounded-t-xl' : 'py-2 pl-4 font-bold rounded-t-xl'}>Resources Modules</li></a>
                        <a href="#!" onClick={() => resourceTab2()}><li className={subResourceSwitch == 2 ? 'py-2 pl-4 bg-[#498CCE] dark:bg-[#5C5C5C] text-white font-bold' : 'py-2 pl-4 font-bold'}>Resource Collections</li></a>
                        <a href="#!" onClick={() => resourceTab3()}><li className={subResourceSwitch == 3 ? 'py-2 pl-4 bg-[#498CCE] dark:bg-[#5C5C5C] text-white font-bold rounded-b-xl' : 'py-2 pl-4 font-bold rounded-b-xl'}>Resource Paths</li></a>
                    </ul>
                </div>
                {/* Projects has no tab */}

                {/* Filters for Labs Challenges and Resources */}
                <div className={mainTabSwitch == 1 || mainTabSwitch == 2 || mainTabSwitch == 3 ? 'my-5 bg-white border rounded-xl' : 'hidden'}>
                    <div className="flex justify-between px-4 pt-4">
                        <h1 className="text-2xl font-extrabold">Filters</h1>
                        <a href="#!" className="font-semibold hover:text-[#498CCE]">Clear All</a>
                    </div>
                    <ul>
                        <button onClick={() => toggleDuration()} className="w-full text-left"><li className="py-2 my-4 bg-[#498CCE] dark:bg-[#5C5C5C] pl-1 text-white"><img src={durationToggle ? 'down-arrow-240.png' : 'right-arrow-240.png'} className="w-[15px] float-left m-1" />DURATION</li></button>
                        <div className={!durationToggle ? 'hidden' : ''}>
                            <input type="checkbox" id="duration1" name="duration1" value="LessThan2Hours" className="appearance-none ml-5 my-2 scale-125 border-[#999] bg-[#EEE] rounded checked:border-[#999] checked:bg-[#EEE] checked:bg-[url('https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/checkmark-24-512.png')] hover:bg-[#999] hover:text-[#999] focus:border focus:border-[#999] focus:ring-[#EEE] focus:bg-[#EEE] focus:text-[#f3f7fc] hover:cursor-pointer" />
                            <label htmlFor="duration1" className="ml-2 hover:cursor-pointer" >Less than 2 Hours</label><br/>
                            
                            <input type="checkbox" id="duration2" name="duration2" value="2-4Hours" className="appearance-none ml-5 my-2 scale-125 border-[#999] bg-[#EEE] rounded checked:border-[#999] checked:bg-[#EEE] checked:bg-[url('https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/checkmark-24-512.png')] hover:bg-[#999] hover:text-[#999] focus:border focus:border-[#999] focus:ring-[#EEE] focus:bg-[#EEE] focus:text-[#f3f7fc] hover:cursor-pointer" />
                            <label htmlFor="duration2" className="ml-2 hover:cursor-pointer">2 - 4 Hours</label><br/>

                            <input type="checkbox" id="duration3" name="duration3" value="4-8Hours" className="appearance-none ml-5 my-2 scale-125 border-[#999] bg-[#EEE] rounded checked:border-[#999] checked:bg-[#EEE] checked:bg-[url('https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/checkmark-24-512.png')] hover:bg-[#999] hover:text-[#999] focus:border focus:border-[#999] focus:ring-[#EEE] focus:bg-[#EEE] focus:text-[#f3f7fc] hover:cursor-pointer" />
                            <label htmlFor="duration3" className="ml-2 hover:cursor-pointer">4 - 8 Hours</label><br/>

                            <input type="checkbox" id="duration4" name="duration4" value="1-2Days" className="appearance-none ml-5 my-2 scale-125 border-[#999] bg-[#EEE] rounded checked:border-[#999] checked:bg-[#EEE] checked:bg-[url('https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/checkmark-24-512.png')] hover:bg-[#999] hover:text-[#999] focus:border focus:border-[#999] focus:ring-[#EEE] focus:bg-[#EEE] focus:text-[#f3f7fc] hover:cursor-pointer" />
                            <label htmlFor="duration4" className="ml-2 hover:cursor-pointer">1 - 2 Days</label><br/>

                            <input type="checkbox" id="duration5" name="duration5" value="3-5Days" className="appearance-none ml-5 my-2 scale-125 border-[#999] bg-[#EEE] rounded checked:border-[#999] checked:bg-[#EEE] checked:bg-[url('https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/checkmark-24-512.png')] hover:bg-[#999] hover:text-[#999] focus:border focus:border-[#999] focus:ring-[#EEE] focus:bg-[#EEE] focus:text-[#f3f7fc] hover:cursor-pointer" />
                            <label htmlFor="duration5" className="ml-2 hover:cursor-pointer">3 - 5 Days</label><br/>

                            <input type="checkbox" id="duration6" name="duration6" value="5+Days" className="appearance-none ml-5 my-2 scale-125 border-[#999] bg-[#EEE] rounded checked:border-[#999] checked:bg-[#EEE] checked:bg-[url('https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/checkmark-24-512.png')] hover:bg-[#999] hover:text-[#999] focus:border focus:border-[#999] focus:ring-[#EEE] focus:bg-[#EEE] focus:text-[#f3f7fc] hover:cursor-pointer" />
                            <label htmlFor="duration6" className="ml-2 hover:cursor-pointer">5+ Days</label><br/>
                        </div>

                        <button onClick={() => toggleLevel()} className="w-full text-left"><li className="py-2 my-4 bg-[#498CCE] dark:bg-[#5C5C5C] pl-1 text-white"><img src={levelToggle ? 'down-arrow-240.png' : 'right-arrow-240.png'} className="w-[15px] float-left m-1" />LEVEL</li></button>
                        <div className={!levelToggle ? 'hidden' : ''}>
                            <input type="checkbox" id="beginner" name="beginner" value="beginner" className="appearance-none ml-5 my-2 scale-125 border-[#999] bg-[#EEE] rounded checked:border-[#999] checked:bg-[#EEE] checked:bg-[url('https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/checkmark-24-512.png')] hover:bg-[#999] hover:text-[#999] focus:border focus:border-[#999] focus:ring-[#EEE] focus:bg-[#EEE] focus:text-[#f3f7fc] hover:cursor-pointer" />
                            <label htmlFor="beginner" className="ml-2 hover:cursor-pointer" >Beginner</label><br/>
                            
                            <input type="checkbox" id="intermediate" name="intermediate" value="intermediate" className="appearance-none ml-5 my-2 scale-125 border-[#999] bg-[#EEE] rounded checked:border-[#999] checked:bg-[#EEE] checked:bg-[url('https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/checkmark-24-512.png')] hover:bg-[#999] hover:text-[#999] focus:border focus:border-[#999] focus:ring-[#EEE] focus:bg-[#EEE] focus:text-[#f3f7fc] hover:cursor-pointer" />
                            <label htmlFor="intermediate" className="ml-2 hover:cursor-pointer">Intermediate</label><br/>

                            <input type="checkbox" id="advanced" name="advanced" value="advanced" className="appearance-none ml-5 my-2 scale-125 border-[#999] bg-[#EEE] rounded checked:border-[#999] checked:bg-[#EEE] checked:bg-[url('https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/checkmark-24-512.png')] hover:bg-[#999] hover:text-[#999] focus:border focus:border-[#999] focus:ring-[#EEE] focus:bg-[#EEE] focus:text-[#f3f7fc] hover:cursor-pointer" />
                            <label htmlFor="advanced" className="ml-2 hover:cursor-pointer">Advanced</label><br/>

                            <input type="checkbox" id="mixed" name="mixed" value="mixed" className="appearance-none ml-5 my-2 scale-125 border-[#999] bg-[#EEE] rounded checked:border-[#999] checked:bg-[#EEE] checked:bg-[url('https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/checkmark-24-512.png')] hover:bg-[#999] hover:text-[#999] focus:border focus:border-[#999] focus:ring-[#EEE] focus:bg-[#EEE] focus:text-[#f3f7fc] hover:cursor-pointer" />
                            <label htmlFor="mixed" className="ml-2 hover:cursor-pointer">Mixed</label><br/>
                        </div>

                        <button onClick={() => toggleOrganization()} className="w-full text-left"><li className="py-2 my-4 bg-[#498CCE] dark:bg-[#5C5C5C] pl-1 text-white"><img src={organizationToggle ? 'down-arrow-240.png' : 'right-arrow-240.png'} className="w-[15px] float-left m-1" />ORGANIZATIONS</li></button>
                        <div className={!organizationToggle ? 'hidden' : ''}>
                            <input type="checkbox" id="prepr" name="prepr" value="prepr" className="appearance-none ml-5 my-2 scale-125 border-[#999] bg-[#EEE] rounded checked:border-[#999] checked:bg-[#EEE] checked:bg-[url('https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/checkmark-24-512.png')] hover:bg-[#999] hover:text-[#999] focus:border focus:border-[#999] focus:ring-[#EEE] focus:bg-[#EEE] focus:text-[#f3f7fc] hover:cursor-pointer" />
                            <label htmlFor="prepr" className="ml-2 hover:cursor-pointer" >Prepr</label><br/>
                            
                            <input type="checkbox" id="linuxFoundation" name="linuxFoundation" value="linuxFoundation" className="appearance-none ml-5 my-2 scale-125 border-[#999] bg-[#EEE] rounded checked:border-[#999] checked:bg-[#EEE] checked:bg-[url('https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/checkmark-24-512.png')] hover:bg-[#999] hover:text-[#999] focus:border focus:border-[#999] focus:ring-[#EEE] focus:bg-[#EEE] focus:text-[#f3f7fc] hover:cursor-pointer" />
                            <label htmlFor="linuxFoundation" className="ml-2 hover:cursor-pointer">Linux Foundation</label><br/>

                            <input type="checkbox" id="magnet" name="magnet" value="magnet" className="appearance-none ml-5 my-2 scale-125 border-[#999] bg-[#EEE] rounded checked:border-[#999] checked:bg-[#EEE] checked:bg-[url('https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/checkmark-24-512.png')] hover:bg-[#999] hover:text-[#999] focus:border focus:border-[#999] focus:ring-[#EEE] focus:bg-[#EEE] focus:text-[#f3f7fc] hover:cursor-pointer" />
                            <label htmlFor="magnet" className="ml-2 hover:cursor-pointer">Magnet</label><br/>

                            <input type="checkbox" id="certNexus" name="certNexus" value="certNexus" className="appearance-none ml-5 my-2 scale-125 border-[#999] bg-[#EEE] rounded checked:border-[#999] checked:bg-[#EEE] checked:bg-[url('https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/checkmark-24-512.png')] hover:bg-[#999] hover:text-[#999] focus:border focus:border-[#999] focus:ring-[#EEE] focus:bg-[#EEE] focus:text-[#f3f7fc] hover:cursor-pointer" />
                            <label htmlFor="certNexus" className="ml-2 hover:cursor-pointer">CertNexus</label><br/>

                            <input type="checkbox" id="ococ" name="ococ" value="ococ" className="appearance-none ml-5 my-2 scale-125 border-[#999] bg-[#EEE] rounded checked:border-[#999] checked:bg-[#EEE] checked:bg-[url('https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/checkmark-24-512.png')] hover:bg-[#999] hover:text-[#999] focus:border focus:border-[#999] focus:ring-[#EEE] focus:bg-[#EEE] focus:text-[#f3f7fc] hover:cursor-pointer" />
                            <label htmlFor="ococ" className="ml-2 hover:cursor-pointer">Ontario Chamber of Commerce</label><br/>

                            <input type="checkbox" id="youthBoost" name="youthBoost" value="youthBoost" className="appearance-none ml-5 my-2 scale-125 border-[#999] bg-[#EEE] rounded checked:border-[#999] checked:bg-[#EEE] checked:bg-[url('https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/checkmark-24-512.png')] hover:bg-[#999] hover:text-[#999] focus:border focus:border-[#999] focus:ring-[#EEE] focus:bg-[#EEE] focus:text-[#f3f7fc] hover:cursor-pointer" />
                            <label htmlFor="youthBoost" className="ml-2 hover:cursor-pointer">Youth Boost</label><br/>
                        </div>


                        <button onClick={() => toggleSkills()} className="w-full text-left"><li className="py-2 my-4 bg-[#498CCE] dark:bg-[#5C5C5C] pl-1 text-white"><img src={durationToggle ? 'down-arrow-240.png' : 'right-arrow-240.png'} className="w-[15px] float-left m-1" />SKILLS</li></button>
                        <div className={!skillsToggle ? 'hidden' : 'flex justify-center'}>
                            <input type="text" placeholder="Search skills" className="w-10/12 mb-5 rounded"/>
                        </div>
                    </ul>
                </div>

                {/* Filters for Projects */}
                <div className={mainTabSwitch == 4 ? 'my-5 bg-white border rounded-xl' : 'hidden'}>
                    <div className="flex justify-between px-4 pt-4">
                        <h1 className="text-2xl font-extrabold">Filters</h1>
                        <a href="#!" className="font-semibold hover:text-[#498CCE]">Clear All</a>
                    </div>
                    <ul>
                        <button onClick={() => toggleStatus()} className="w-full text-left"><li className="py-2 my-4 bg-[#498CCE] dark:bg-[#5C5C5C] pl-1 text-white"><img src={statusToggle ? 'down-arrow-240.png' : 'right-arrow-240.png'} className="w-[15px] float-left m-1" />STATUS</li></button>
                        <div className={!statusToggle ? 'hidden' : ''}>
                            <input type="checkbox" id="open" name="open" value="open" className="appearance-none ml-5 my-2 scale-125 border-[#999] bg-[#EEE] rounded checked:border-[#999] checked:bg-[#EEE] checked:bg-[url('https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/checkmark-24-512.png')] hover:bg-[#999] hover:text-[#999] focus:border focus:border-[#999] focus:ring-[#EEE] focus:bg-[#EEE] focus:text-[#f3f7fc] hover:cursor-pointer" />
                            <label htmlFor="open" className="ml-2 hover:cursor-pointer" >Open</label><br/>
                            
                            <input type="checkbox" id="closed" name="closed" value="closed" className="appearance-none ml-5 my-2 scale-125 border-[#999] bg-[#EEE] rounded checked:border-[#999] checked:bg-[#EEE] checked:bg-[url('https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/checkmark-24-512.png')] hover:bg-[#999] hover:text-[#999] focus:border focus:border-[#999] focus:ring-[#EEE] focus:bg-[#EEE] focus:text-[#f3f7fc] hover:cursor-pointer" />
                            <label htmlFor="closed" className="ml-2 hover:cursor-pointer">Closed</label><br/>

                            <input type="checkbox" id="inProgress" name="inProgress" value="inProgress" className="appearance-none ml-5 my-2 scale-125 border-[#999] bg-[#EEE] rounded checked:border-[#999] checked:bg-[#EEE] checked:bg-[url('https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/checkmark-24-512.png')] hover:bg-[#999] hover:text-[#999] focus:border focus:border-[#999] focus:ring-[#EEE] focus:bg-[#EEE] focus:text-[#f3f7fc] hover:cursor-pointer" />
                            <label htmlFor="inProgress" className="ml-2 hover:cursor-pointer">In Progress</label><br/>

                            <input type="checkbox" id="submitted" name="submitted" value="submitted" className="appearance-none ml-5 my-2 scale-125 border-[#999] bg-[#EEE] rounded checked:border-[#999] checked:bg-[#EEE] checked:bg-[url('https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/checkmark-24-512.png')] hover:bg-[#999] hover:text-[#999] focus:border focus:border-[#999] focus:ring-[#EEE] focus:bg-[#EEE] focus:text-[#f3f7fc] hover:cursor-pointer" />
                            <label htmlFor="submitted" className="ml-2 hover:cursor-pointer">Submitted</label><br/>
                        </div>
                    </ul>
                </div>

            </div>

            <div className="lg:w-3/4">

                {/* Search Bar */}
                <div className="my-5 bg-white border rounded-xl lg:flex lg:justify-between">
                    <div className="flex w-11/12 md:w-8/12 lg:w-1/2 2xl:w-5/12 my-8 ml-5">

                        <img src="search-240.png" className="bg-white p-4 w-[50px] h-auto border-[#5C5C5C] border-l-2 border-y-2 rounded-l-xl"/>
                    
                        {/* Add dropdownlist and tags into search bar */}
                        <input type="text" className="lg:max-w-[200px] 2xl:max-w-[300px] dark:bg-[#5C5C5C] dark:text-[#F8F9FA] dark:border-[#5C5C5C] border-r-2 border-y-2 rounded-r-xl grow focus:outline-none mr-1 placeholder:text-slate-300" placeholder="Search" />

                        <button type="submit" className="w-[100px] bg-[#498CCE] text-[#F8F9FA] dark:bg-[#5C5C5C] dark:text-[#F8F9FA] rounded-lg ml-1">Search</button>
                    </div>
                    <div className="flex justify-end my-8">
                        <label htmlFor="sortby" className="flex flex-col justify-center text-xs dark:font-bold">Sort by</label>
                        <select name="sortby" id="sortby" className="dark:bg-[#5C5C5C] dark:text-[#F8F9FA] border rounded-lg px-4 py-2 pr-10 mr-4 ml-2 text-xl">
                            <option value="recent">Recently Added</option>
                            <option value="popular">Most Popular</option>
                        </select>
                    </div>
                </div>

                {/* Fake Pagination */}
                <div className="my-5">
                    <div className="flex justify-end">
                        <p className="flex flex-col justify-center border border-[#13b15c] dark:border-[#363535] rounded-l w-[45px] h-[45px] text-center text-white text-lg bg-[#498CCE] dark:bg-[#363535]">1</p>
                        <p className="flex flex-col justify-center border border-[#13b15c] dark:border-[#363535] dark:bg-[#ADB5BD] w-[45px] h-[45px] text-center text-lg">2</p>
                        <p className="flex flex-col justify-center border border-[#13b15c] dark:border-[#363535] dark:bg-[#ADB5BD] w-[45px] h-[45px] text-center text-lg">3</p>
                        <p className="flex flex-col justify-center border border-[#13b15c] dark:border-[#363535] dark:bg-[#ADB5BD] w-[45px] h-[45px] text-center text-lg">4</p>
                        <p className="flex flex-col justify-center border border-[#13b15c] dark:border-[#363535] dark:bg-[#ADB5BD] w-[45px] h-[45px] text-center text-lg">5</p>
                        <p className="flex flex-col justify-center border border-[#13b15c] dark:border-[#363535] dark:bg-[#ADB5BD] w-[45px] h-[45px] text-center text-lg">...</p>
                        <p className="flex flex-col justify-center border border-[#13b15c] dark:border-[#363535] dark:bg-[#ADB5BD] rounded-r w-[45px] h-[45px] text-center text-lg">12</p>
                    </div>
                </div>

                {/*Labs Content */}
                <div className={mainTabSwitch == 1 ? 'my-5 border-b' : 'hidden'}>
                    
                    {/* Content #1 */}
                    <div className="bg-white border rounded-xl mb-5">
                        <img src="https://prepr-preprlabs-prod-bucket.s3.ca-central-1.amazonaws.com/uploads/labs/GU4ZjyHg7uFtLdcW4A44qcQtj.png" className="p-5 mx-auto"/>
                        
                        <div className="p-5">
                            <p>Hosted by <span className="font-bold">Prepr</span></p>
                        </div>

                        <div className="flex justify-between p-5">
                            <a href="#" className="w-9/12 font-bold text-[#498CCE] text-2xl">Getting Started Lab For Employment Service Providers (ESP)</a>
                            <button className="bg-[#498CCE] text-white w-[90px] h-[50px] rounded-lg">
                                <span className="font-bold text-2xl">+</span> Follow
                            </button>
                        </div>

                        <div className="p-5">
                            <p><span className="font-bold">Public Lab</span> · Last update: <span className="font-bold">1 year ago</span> · Members: <span className="font-bold">34</span> · Duration: <span className="font-bold">None</span> · Level: <span className="font-bold">None</span></p>
                        </div>

                        <div className="p-5">
                            <p>If you're here then you're a passionate employment service provider who's constantly looking for new tools and concepts. We've prepared a series of Challenges just for you! The Challenges in this Lab are designed to help you learn how you can get the most out of our platform, get started today!</p>
                        </div>

                        <div className="p-5">
                            <p className="flex flex-col justify-center border border-[#727d92] rounded-xl w-[100px] h-[40px] bg-[#F3F7FC] text-center text-sm">Prepr Labs</p>
                        </div>
                    </div>

                    {/* Fake Content #2 */}
                    <div className="bg-white border rounded-xl mb-5">
                        <img src="https://prepr-preprlabs-prod-bucket.s3.ca-central-1.amazonaws.com/uploads/labs/XQCvHLwke2XeHj34yugFinwYl.png" className="p-5 mx-auto"/>
                        
                        <div className="p-5">
                            <p>Hosted by <span className="font-bold">Prepr</span></p>
                        </div>

                        <div className="flex justify-between p-5">
                            <a href="#" className="w-9/12 font-bold text-[#498CCE] text-2xl">UX Feedback Lab</a>
                            <button className="bg-[#498CCE] text-white w-[90px] h-[50px] rounded-lg">
                                <span className="font-bold text-2xl">+</span> Follow
                            </button>
                        </div>

                        <div className="p-5">
                            {/* Add Image Here */}
                            <p><span className="font-bold">Public Lab</span> · Last update: <span className="font-bold">1 year ago</span> · Members: <span className="font-bold">21</span> · Duration: <span className="font-bold">None</span> · Level: <span className="font-bold">None</span></p>
                        </div>

                        <div className="p-5">
                            <p>Our goal is to get useful feedback for PreprLabs pre-react and our redesigned Version on Figma post-react. PreprLabs has different types of users: regular users (the Learners) and those who create their tasks in forms of Labs and Challenges (the Managers).   The next step for you is to start the Challenge within this Lab. </p>
                        </div>

                        <div className="p-5">
                            <p className="flex flex-col justify-center border border-[#727d92] rounded-xl w-[100px] h-[40px] bg-[#F3F7FC] text-center text-sm">Prepr Labs</p>
                        </div>
                    </div>

                    {/* Fake Content #3 */}
                    <div className="bg-white border rounded-xl mb-5">
                        <img src="https://prepr-preprlabs-prod-bucket.s3.ca-central-1.amazonaws.com/uploads/labs/rkVCArtK8UyOSo4HLH6QtzZbd.png" className="p-5 mx-auto"/>
                        
                        <div className="p-5">
                            <p>Hosted by <span className="font-bold">Prepr</span></p>
                        </div>

                        <div className="flex justify-between p-5">
                            <a href="#" className="w-9/12 font-bold text-[#498CCE] text-2xl">Getting Started Lab For Business Chambers</a>
                            <button className="bg-[#498CCE] text-white w-[90px] h-[50px] rounded-lg">
                                <span className="font-bold text-2xl">+</span> Follow
                            </button>
                        </div>

                        <div className="p-5">
                            {/* Add Image Here */}
                            <p><span className="font-bold">Public Lab</span> · Last update: <span className="font-bold">1 year ago</span> · Members: <span className="font-bold">10</span> · Duration: <span className="font-bold">None</span> · Level: <span className="font-bold">None</span></p>
                        </div>

                        <div className="p-5">
                            <p>Getting Started Lab For Business Chambers.</p>
                        </div>

                        <div className="p-5">
                            <p className="flex flex-col justify-center border border-[#727d92] rounded-xl w-[100px] h-[40px] bg-[#F3F7FC] text-center text-sm">Prepr Labs</p>
                        </div>
                    </div>
                </div>

                {/*Challenges Content */}
                <div className={mainTabSwitch == 2 ? 'my-5 border-b' : 'hidden'}>
                    
                    {/* Content #1 */}
                    <div className="bg-white border rounded-xl mb-5">
                        <img src="https://prepr-preprlabs-prod-bucket.s3.ca-central-1.amazonaws.com/uploads/challenge/DGIMMt3qAlFSXjNfOJ0NsrOsW.png" className="p-5 mx-auto"/>
                        
                        <div className="p-5">
                            <p>Hosted by <span className="font-bold">Prepr</span></p>
                        </div>

                        <div className="flex justify-between p-5">
                            <a href="#" className="font-bold text-[#498CCE] text-2xl">DTP & FUN - Team Business Innovation Challenge</a>
                        </div>

                        <div className="p-5">
                            <p><span className="font-bold">Private Challenge</span> · Challenge deadline: <span className="font-bold">12/01/2023</span> · Total submissions: <span className="font-bold">0</span> · Status: <span className="font-bold">Open</span> · Duration: <span className="font-bold">None</span></p>
                        </div>

                        <div className="p-5">
                            <p>How might we better support businesses around us? Businesses around the world have had to adapt over the last 3 years as the nature of sales has diversified and changed, and will need to continue to evolve to meet the realities of a post-pandemic world. Challenges abound across all aspects of organizations' business models, including operations, workforce, customer experience an...</p>
                        </div>

                        <div className="p-5 flex flex-wrap">
                            <p className="flex flex-col justify-center border border-[#727d92] rounded-xl w-[150px] h-[40px] bg-[#F3F7FC] text-center text-sm m-2">Audience Analysis</p>
                            <p className="flex flex-col justify-center border border-[#727d92] rounded-xl w-[150px] h-[40px] bg-[#F3F7FC] text-center text-sm m-2">Audience Segmentation</p>
                            <p className="flex flex-col justify-center border border-[#727d92] rounded-xl w-[150px] h-[40px] bg-[#F3F7FC] text-center text-sm m-2">Business Planning</p>
                            <p className="flex flex-col justify-center border border-[#727d92] rounded-xl w-[150px] h-[40px] bg-[#F3F7FC] text-center text-sm m-2">Collaborative Decision-making</p>
                        </div>
                    </div>

                    {/* Fake Content #2 */}
                    <div className="bg-white border rounded-xl mb-5">
                        <div className="flex flex-col w-10/12 mx-auto mt-5 rounded border">
                            <p className="py-5 pl-5 text-[#8dd596]">Challenge</p>
                            <p className="py-5 text-center bg-[#e1f8e4] text-[#686868] font-extrabold">Challenge #5 - ...</p>
                            <div className="py-6 w-full"></div>
                        </div>
                        
                        <div className="p-5">
                            <p>Hosted by <span className="font-bold">Prepr</span></p>
                        </div>

                        <div className="flex justify-between p-5">
                            <a href="#" className="font-bold text-[#498CCE] text-2xl">Challenge #5 - Selenium</a>
                        </div>

                        <div className="p-5">
                            {/* Add Image Here */}
                            <p><span className="font-bold">Private Challenge</span> · Challenge deadline: <span className="font-bold">None</span> · Total submissions: <span className="font-bold">0</span> · Status: <span className="font-bold">Open</span> · Duration: <span className="font-bold">2 - 4 Hours</span> Level: <span className="font-bold">Intermediate</span></p>
                        </div>

                        <div className="p-5">
                            <p>Our goal is to get useful feedback for PreprLabs pre-react and our redesigned Version on Figma post-react. PreprLabs has different types of users: regular users (the Learners) and those who create their tasks in forms of Labs and Challenges (the Managers).   The next step for you is to start the Challenge within this Lab. </p>
                        </div>

                        <div className="p-5">
                            <p className="flex flex-col justify-center border border-[#727d92] rounded-xl w-[100px] h-[40px] bg-[#F3F7FC] text-center text-sm">Selenium</p>
                        </div>
                    </div>

                    {/* Fake Content #3 */}
                    <div className="bg-white border rounded-xl mb-5">
                        <div className="flex flex-col w-10/12 mx-auto mt-5 rounded border">
                            <p className="py-5 pl-5 text-[#8dd596]">Challenge</p>
                            <p className="py-5 text-center bg-[#e1f8e4] text-[#686868] font-extrabold">Challenge #4 - ...</p>
                            <div className="py-6 w-full"></div>
                        </div>
                        
                        <div className="p-5">
                            <p>Hosted by <span className="font-bold">Prepr</span></p>
                        </div>

                        <div className="flex justify-between p-5">
                            <a href="#" className="font-bold text-[#498CCE] text-2xl">Challenge #4 - Testing Performance with JMeter for Quality Assurance of Web Applications</a>
                        </div>

                        <div className="p-5">
                            {/* Add Image Here */}
                            <p><span className="font-bold">Public Challenge</span> · Challenge deadline: <span className="font-bold">None</span> · Total submissions: <span className="font-bold">0</span> · Status: <span className="font-bold">Open</span> · Duration: <span className="font-bold">2 - 4 Hours</span> Level: <span className="font-bold">Intermediate</span></p>
                        </div>

                        <div className="p-5">
                            <p>JMeter is an open source testing software used for load and performance testing, functional testing, regression testing, and more. It can simulate a heavy load on a server or network and output performance data in several ways. Testing web application performance with JMeter is important because it helps to identify performance bottlenecks, enables load testing, facilitates testing of complex scen...</p>
                        </div>

                        <div className="p-5">
                            <p className="flex flex-col justify-center border border-[#727d92] rounded-xl w-[100px] h-[40px] bg-[#F3F7FC] text-center text-sm">Testing</p>
                        </div>
                    </div>
                </div>

                {/*Resources Content */}
                <div className={mainTabSwitch == 3 ? 'my-5 border-b' : 'hidden'}>
                    
                    {/* FakeContent #1 */}
                    <div className="bg-white border rounded-xl mb-5">
                        <div className="flex flex-col w-10/12 mx-auto mt-5 rounded border">
                            <p className="py-5 pl-5 text-[#9919F4]">Resource</p>
                            <p className="py-5 text-center bg-[#DEB5FC] text-[#686868] font-extrabold">SFS Digital Deck...</p>
                            <div className="py-6 w-full"></div>
                        </div>
                        
                        <div className="p-5">
                            <p>Hosted by <span className="font-bold">Prepr</span></p>
                        </div>

                        <div className="flex justify-between p-5">
                            <a href="#" className="font-bold text-[#498CCE] text-2xl">SFS Digtal Deck Activity Answer</a>
                        </div>

                        <div className="p-5">
                            <p><span className="font-bold">Status: open</span> · Duration: <span className="font-bold">None </span> · Level: <span className="font-bold">None </span></p>
                        </div>

                        <div className="p-5">
                            <p>Sample answer for Leveraging Digital Tools as a Manager.</p>
                        </div>

                        <div className="p-5 flex flex-wrap">
                            <p className="flex flex-col justify-center border border-[#727d92] rounded-xl w-[100px] h-[40px] bg-[#F3F7FC] text-center text-sm m-2">Digital Tools</p>
                        </div>
                    </div>

                    {/* Fake Content #2 */}
                    <div className="bg-white border rounded-xl mb-5">
                    <div className="flex flex-col w-10/12 mx-auto mt-5 rounded border">
                            <p className="py-5 pl-5 text-[#9919F4]">Resource</p>
                            <p className="py-5 text-center bg-[#DEB5FC] text-[#686868] font-extrabold">SFS Digital Too...</p>
                            <div className="py-6 w-full"></div>
                        </div>
                        
                        <div className="p-5">
                            <p>Hosted by <span className="font-bold">Prepr</span></p>
                        </div>

                        <div className="flex justify-between p-5">
                            <a href="#" className="font-bold text-[#498CCE] text-2xl">SFS Digital Tools Deck</a>
                        </div>

                        <div className="p-5">
                            <p><span className="font-bold">Status: open</span> · Duration: <span className="font-bold">None </span> · Level: <span className="font-bold">None </span></p>
                        </div>

                        <div className="p-5">
                            <p>Slides for Digital Tools Deck.</p>
                        </div>

                        <div className="p-5 flex flex-wrap">
                            <p className="flex flex-col justify-center border border-[#727d92] rounded-xl w-[100px] h-[40px] bg-[#F3F7FC] text-center text-sm m-2">Digital Toolkit</p>
                        </div>
                    </div>

                    {/* Fake Content #3 */}
                    <div className="bg-white border rounded-xl mb-5">
                        <img src="https://d3f06rtlkr354b.cloudfront.net/uploads/resources/image/QCpU1zh5cdItBUQRlBsrGkpVsI5kBDu3oHfGiEhI.png" className="p-5 mx-auto"/>
                        
                        <div className="p-5">
                            <p>Hosted by <span className="font-bold">Prepr</span></p>
                        </div>

                        <div className="flex justify-between p-5">
                            <a href="#" className="font-bold text-[#498CCE] text-2xl">How to Build a Lab for Business Leaders</a>
                        </div>

                        <div className="p-5">
                            <p><span className="font-bold">Status: open</span> · Duration: <span className="font-bold">Less than 2 Hours </span> · Level: <span className="font-bold">None </span></p>
                        </div>

                        <div className="p-5">
                            <p>This 19-minute video guides you through the process of designing, deploying, and managing a successful Lab for your staff. Learn how to define objectives, set up Challenges, plan learning experiences, and set up feedback loops.</p>
                        </div>

                        <div className="p-5">
                            <p className="flex flex-col justify-center border border-[#727d92] rounded-xl w-[100px] h-[40px] bg-[#F3F7FC] text-center text-sm">Prepr Labs</p>
                        </div>
                    </div>
                </div>

                {/* Projects content section */}
                <div className={mainTabSwitch == 4 ? 'my-5 border-b' : 'hidden'}>
                    
                    {/* Content #1 */}
                    <div className="bg-white border rounded-xl mb-5">
                        <div className="flex flex-col w-10/12 mx-auto mt-5 rounded border">
                            <p className="py-5 pl-5 text-[#398add]">Project</p>
                            <p className="py-5 text-center bg-[#cfeafa] text-[#686868] font-extrabold">Kevin Sar - Car...</p>
                            <div className="py-6 w-full"></div>
                        </div>
                        
                        <div className="p-5">
                            <p>1 Members - 14 minutes ago</p>
                        </div>

                        <div className="flex justify-between p-5">
                            <a href="#" className="font-bold text-[#498CCE] text-2xl">Kevin Sar - Career Planning 2: Explore Career Options</a>
                        </div>

                        <div className="p-5">
                            {/* Add Image Here */}
                            <p><span className="font-bold">Public</span> · Associated Challenge: <span className="font-bold">Career Planning 2: Explore Career Options </span></p>
                        </div>

                        <div className="flex justify-end p-5">
                            <p>Created by: <span className="font-bold">Kevin Sar</span></p>
                        </div>
                    </div>

                    {/* Fake Content #2 */}
                    <div className="bg-white border rounded-xl mb-5">
                        <div className="flex flex-col w-10/12 mx-auto mt-5 rounded border">
                            <p className="py-5 pl-5 text-[#398add]">Project</p>
                            <p className="py-5 text-center bg-[#cfeafa] text-[#686868] font-extrabold">Kevin Sar - Car...</p>
                            <div className="py-6 w-full"></div>
                        </div>
                        
                        <div className="p-5">
                            <p>1 Members - 2 hours ago</p>
                        </div>

                        <div className="flex justify-between p-5">
                            <a href="#" className="font-bold text-[#498CCE] text-2xl">Kevin Sar - Career Planning 1: Assess Yourself</a>
                        </div>

                        <div className="p-5">
                            {/* Add Image Here */}
                            <p><span className="font-bold">Public</span> · Associated Challenge: <span className="font-bold">Career Planning 1: Assess Yourself </span></p>
                        </div>

                        <div className="flex justify-end p-5">
                            <p>Created by: <span className="font-bold">Kevin Sar</span></p>
                        </div>
                    </div>
                </div>

                {/* Fake Pagination */}
                <div className="my-5">
                    <div className="flex justify-end">
                        <p className="flex flex-col justify-center border border-[#13b15c] dark:border-[#363535] rounded-l w-[45px] h-[45px] text-center text-white text-lg bg-[#498CCE] dark:bg-[#363535]">1</p>
                        <p className="flex flex-col justify-center border border-[#13b15c] dark:border-[#363535] dark:bg-[#ADB5BD] w-[45px] h-[45px] text-center text-lg">2</p>
                        <p className="flex flex-col justify-center border border-[#13b15c] dark:border-[#363535] dark:bg-[#ADB5BD] w-[45px] h-[45px] text-center text-lg">3</p>
                        <p className="flex flex-col justify-center border border-[#13b15c] dark:border-[#363535] dark:bg-[#ADB5BD] w-[45px] h-[45px] text-center text-lg">4</p>
                        <p className="flex flex-col justify-center border border-[#13b15c] dark:border-[#363535] dark:bg-[#ADB5BD] w-[45px] h-[45px] text-center text-lg">5</p>
                        <p className="flex flex-col justify-center border border-[#13b15c] dark:border-[#363535] dark:bg-[#ADB5BD] w-[45px] h-[45px] text-center text-lg">...</p>
                        <p className="flex flex-col justify-center border border-[#13b15c] dark:border-[#363535] dark:bg-[#ADB5BD] rounded-r w-[45px] h-[45px] text-center text-lg">12</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Footer */}
        <Footer />
    </div>
    )
  }
  