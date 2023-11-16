"use client"; // This is a client component
import {useState} from "react";
import Navbar from "../components/navbar"
import Footer from "../components/footer"

export default function Home() {
    let [heroToggle, setHeroToggle] = useState(true);
    const handleHeroToggle = () => {
        return setHeroToggle(!heroToggle);
    }
    return (
    <>
        <Navbar />
        {/* Hero Section? */}
        <div className={heroToggle ? 'mt-20 p-5 bg-gradient-to-r from-[#D5FFC6] to-[#7BD1F2] text-center' : 'hidden'}>
            
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

        {/* Main Tabs */}
        <div className="w-10/12 mx-auto mt-10 mb-5 bg-white border rounded-xl">
            <ul className="flex justify-center">
                <a href="#"><li className="w-[100px] h-[40px] text-center table-cell align-middle rounded-l-xl">Labs</li></a>
                <a href="#"><li className="w-[100px] h-[40px] text-center table-cell align-middle">Challenges</li></a>
                <a href="#"><li className="w-[100px] h-[40px] text-center table-cell align-middle">Resources</li></a>
                <a href="#"><li className="w-[100px] h-[40px] text-center table-cell align-middle rounded-r-xl">Projects</li></a>
            </ul>
        </div>

        {/* Secondary Tabs dependent on main tabs */}
        {/* Labs Tab */}
        <div className="w-10/12 mx-auto my-5 bg-white border rounded-xl">
            <ul className="pl-4">
                <a href="#"><li className="py-2">Labs</li></a>
                <a href="#"><li className="py-2">Lab Programs</li></a>
            </ul>
        </div>

        {/* Challenge Tab */}
        <div className="w-10/12 mx-auto my-5 bg-white border rounded-xl">
            <ul className="pl-4">
                <a href="#"><li className="py-2">Challenges</li></a>
                <a href="#"><li className="py-2">Challenge Paths</li></a>
            </ul>
        </div>

        {/* Resource Tab */}
        <div className="w-10/12 mx-auto my-5 bg-white border rounded-xl">
            <ul className="pl-4">
                <a href="#"><li className="py-2">Resources Modules</li></a>
                <a href="#"><li className="py-2">Resource Collections</li></a>
                <a href="#"><li className="py-2">Resource Paths</li></a>
            </ul>
        </div>

        {/* Projects has no tab */}

        {/* Filters */}
        {/* Filters for Labs Challenges and Resources */}
        <div className="w-10/12 mx-auto my-5 bg-white border rounded-xl">
            <div className="flex justify-between px-4 pt-4">
                <h1 className="text-2xl font-extrabold">Filters</h1>
                <a href="#" className="font-semibold hover:text-[#498CCE]">Clear All</a>
            </div>
            <ul>
                <a href="#"><li className="py-2 my-4 bg-[#498CCE] pl-1 text-white"><img src="right-arrow-240.png" className="w-[15px] float-left m-1" />DURATION</li></a>
                <a href="#"><li className="py-2 my-4 bg-[#498CCE] pl-1 text-white"><img src="right-arrow-240.png" className="w-[15px] float-left m-1" />LEVEL</li></a>
                <a href="#"><li className="py-2 my-4 bg-[#498CCE] pl-1 text-white"><img src="right-arrow-240.png" className="w-[15px] float-left m-1" />ORGANIZATIONS</li></a>
                <a href="#"><li className="py-2 my-4 bg-[#498CCE] pl-1 text-white"><img src="right-arrow-240.png" className="w-[15px] float-left m-1" />SKILLS</li></a>
            </ul>
        </div>

        {/* Filters for Projects */}
        <div className="w-10/12 mx-auto my-5 bg-white border rounded-xl">
            <div className="flex justify-between px-4 pt-4">
                <h1 className="text-2xl font-extrabold">Filters</h1>
                <a href="#" className="font-semibold hover:text-[#498CCE]">Clear All</a>
            </div>
            <ul>
                <a href="#"><li className="py-2 my-4 bg-[#498CCE] pl-1 text-white"><img src="right-arrow-240.png" className="w-[15px] float-left m-1" />STATUS</li></a>
            </ul>
        </div>

        {/* Search Bar */}
        <div className="w-10/12 mx-auto my-5 bg-white border rounded-xl">
            <div className="flex justify-center w-11/12 md:w-8/12 lg:w-1/2 2xl:w-5/12 my-8 mx-auto">

                <img src="search-240.png" className="bg-white p-4 w-[50px] h-auto border-l-2 border-y-2 rounded-l-xl"/>
            
                {/* Add dropdownlist and tags into search bar */}
                <input type="text" className="border-r-2 border-y-2 rounded-r-xl grow focus:outline-none mr-1" placeholder="Search" />

                <button type="submit" className="w-[100px] bg-[#498CCE] rounded-lg ml-1">Search</button>
            </div>
            <div className="flex justify-end my-8">
                <label htmlFor="sortby" className="flex flex-col justify-center text-xs">Sort by</label>
                <select name="sortby" id="sortby" className="border rounded-lg px-4 py-2 mr-4 ml-2 text-xl">
                    <option value="recent">Recently Added</option>
                    <option value="popular">Most Popular</option>
                </select>
            </div>
        </div>

        {/* Fake Pagination */}
        <div className="w-10/12 mx-auto my-5">
            <div className="flex justify-end">
                <p className="flex flex-col justify-center border border-[#13b15c] rounded-l w-[45px] h-[45px] text-center text-white text-lg bg-[#498CCE]">1</p>
                <p className="flex flex-col justify-center border border-[#13b15c] w-[45px] h-[45px] text-center text-lg">2</p>
                <p className="flex flex-col justify-center border border-[#13b15c] w-[45px] h-[45px] text-center text-lg">3</p>
                <p className="flex flex-col justify-center border border-[#13b15c] w-[45px] h-[45px] text-center text-lg">4</p>
                <p className="flex flex-col justify-center border border-[#13b15c] w-[45px] h-[45px] text-center text-lg">5</p>
                <p className="flex flex-col justify-center border border-[#13b15c] w-[45px] h-[45px] text-center text-lg">...</p>
                <p className="flex flex-col justify-center border border-[#13b15c] rounded-r w-[45px] h-[45px] text-center text-lg">12</p>
            </div>
        </div>

        {/* Content */}
        <div className="w-10/12 mx-auto my-5 border-b">
            
            {/* Content #1 */}
            <div className="bg-white border rounded-xl mb-5">
                <img src="https://prepr-preprlabs-prod-bucket.s3.ca-central-1.amazonaws.com/uploads/labs/GU4ZjyHg7uFtLdcW4A44qcQtj.png" className="p-5"/>
                
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
                    {/* Add Image Here */}
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
                <img src="https://prepr-preprlabs-prod-bucket.s3.ca-central-1.amazonaws.com/uploads/labs/XQCvHLwke2XeHj34yugFinwYl.png" className="p-5"/>
                
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
                <img src="https://prepr-preprlabs-prod-bucket.s3.ca-central-1.amazonaws.com/uploads/labs/rkVCArtK8UyOSo4HLH6QtzZbd.png" className="p-5"/>
                
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

        {/* Fake Pagination */}
        <div className="w-10/12 mx-auto my-5">
            <div className="flex justify-end">
                <p className="flex flex-col justify-center border border-[#13b15c] rounded-l w-[45px] h-[45px] text-center text-white text-lg bg-[#498CCE]">1</p>
                <p className="flex flex-col justify-center border border-[#13b15c] w-[45px] h-[45px] text-center text-lg">2</p>
                <p className="flex flex-col justify-center border border-[#13b15c] w-[45px] h-[45px] text-center text-lg">3</p>
                <p className="flex flex-col justify-center border border-[#13b15c] w-[45px] h-[45px] text-center text-lg">4</p>
                <p className="flex flex-col justify-center border border-[#13b15c] w-[45px] h-[45px] text-center text-lg">5</p>
                <p className="flex flex-col justify-center border border-[#13b15c] w-[45px] h-[45px] text-center text-lg">...</p>
                <p className="flex flex-col justify-center border border-[#13b15c] rounded-r w-[45px] h-[45px] text-center text-lg">12</p>
            </div>
        </div>

        {/* Footer */}
        <Footer />
    </>
    )
  }
  