"use client"; // This is a client component
import {useEffect, useState} from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { cancelProject, createProject } from "@/redux/features/project-slice";
import { useDispatch, useSelector } from "react-redux";


export default function Home() {
    //Dispatch function
    const dispatch = useDispatch();
    
    //Get form values
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [outsideView, setOutsideView] = useState('');
    const [outsideDownload, setOutsideDownload] = useState('');
    const [slug, setSlug] = useState('');
    const [challenge, setChallenge] = useState('');
    const [lab, setLab] = useState('');
    const [recruitStatus, setRecruitStatus] = useState('');
    const [leader, setLeader] = useState('');

    //Light/Dark Mode Toggle
    let [toggleMode, setToggleMode] = useState(false);
    const handleToggleMode = () => {
        toggleMode ? document.body.classList.remove('dark', 'bg-[#5C5C5C]') : document.body.classList.add('dark', 'bg-[#5C5C5C]')
        return setToggleMode(!toggleMode);
    }

    //Image File Upload/Preview
    const [selectedFile, setSelectedFile] = useState(); //Use selectedFile for dropzoneFile
    const [preview, setPreview] = useState();

    // Change image on new upload
    useEffect(() => {
        if(!selectedFile){
            setPreview(undefined);
            return
        }

        // Free memory when component is unmounted
        const objectUrl = URL.createObjectURL(selectedFile);
        setPreview(objectUrl);
        return () => URL.revokeObjectURL(objectUrl);
    },[selectedFile]);


    const onSelectFile = (e) => {
        if(!e.target.files || e.target.files.length === 0){
            setSelectedFile(undefined);
            return;
        }

        setSelectedFile(e.target.files[0]);
    };

    const [button, setButton] = useState('submitButton');

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        if(button == 'cancelButton'){
            dispatch(cancelProject());
            window.location.replace('/dashboard');
        }

        else if(button == 'submitButton'){
            console.log(selectedFile.name);
            
            dispatch(createProject({title:title, description:description, outsideView:outsideView, outsideDownload:outsideDownload, slug:slug, challenge:challenge, lab:lab, dropzoneFile:selectedFile.name, recruitStatus:recruitStatus, leader:leader}));
            window.location.replace('/dashboard');
        }
    };

    //Hover Information Icon Effect
    const [hoverAccessible, setHoverAccessible] = useState(false);
    const [hoverDownload, setHoverDownload] = useState(false);
    const [hoverSlug, setHoverSlug] = useState(false);
    const [hoverChallenge, setHoverChallenge] = useState(false);
    const [hoverLab, setHoverLab] = useState(false);

    return (
    <div>

        {/* Navbar Component */}
        <Navbar darkMode={toggleMode} toggleDarkMode={handleToggleMode} />

        {/* Mid Section */}
        <div className="mt-36">

            {/* Cards Section */}
            <div className="bg-white rounded-lg w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12 2xl:w-4/12 mx-auto my-5">
                <h1 className="text-2xl text-[#8b8b8b] font-semibold py-5 mx-10 border-b border-[#8b8b8b]">CREATE PROJECT</h1>

                

                {/* Progress Dots */}
                <div className="flex justify-evenly m-10">
                    <div>
                        <div className="bg-[#27AE60] w-[25px] h-[25px] rounded-full mx-auto">
                            <p className="text-center text-white font-bold">1</p>
                        </div>
                        <div>
                            <p>Project Creation</p>
                        </div>
                    </div>
                </div>

                {/* Challenge Message */}
                <div className="m-10">
                    <h2 className="text-lg font-semibold">Challenge: <span className="text-[#C4C4C4]">No active challenge selected.</span></h2>
                    
                    {/* Warning Message */}
                    <div className="bg-[#FFF3CC] p-2 border border-[#FF9D00]">
                        <p className="font-semibold">To browse challenge requirements here, you need to select an active challenge below.</p>
                    </div>
                </div>

                        
                <form onSubmit={onSubmitHandler} encType="multipart/form-data">
                {/* Project Overview Form Card */}
                <div className="w-11/12 lg:h-full mx-auto bg-white shadow-lg shadow-gray-500/40 border rounded-2xl mt-3">
                    <div className="p-5">
                        <div className="flex flex-col justify-center">
                            <h2 className="text-xl font-semibold">Project Overview</h2>
                        </div>
                            {/* Title */}
                            <div className="flex flex-col">
                                <label htmlFor="title">Title <span>*</span></label>
                                <input type="text" id="title" placeholder="Max 150 Characters" maxLength={150} required={button == 'submitButton'} onChange={(e)=>{setTitle(e.target.value)}}/>
                            </div>

                            {/* Description */}
                            <div className="flex flex-col">
                                <label htmlFor="description">Description <span>*</span></label>
                                <textarea id="description" className="resize-none " rows={5} required={button == 'submitButton'}  onChange={(e)=>{setDescription(e.target.value)}}></textarea>
                            </div>
                            
                            {/* Checkboxes */}
                            <div>
                                <table className="w-full">
                                    <tbody>
                                    <tr>
                                        <td className="pt-5">
                                            <input type="checkbox" id="outsideView" name="outsideView" value="outsideViewAllow" defaultChecked={true} className="focus:ring-0"  onChange={(e)=>{setOutsideView(e.target.checked)}}/>
                                            <label htmlFor="outsideView" className="w-1/2"> Allow users outside your team to view your project.</label>
                                        </td>
                                        <td>
                                            <div className="flex flex-col relative justify-center bg-[#8b8b8b] w-[25px] h-[25px border rounded-full hover:cursor-pointer" onMouseEnter={()=>{setHoverAccessible(true)}} onMouseLeave={()=>{setHoverAccessible(false)}}>
                                                <p className="text-center text-white font-bold">?</p>
                                                <div className={hoverAccessible ? 'absolute right-10 bg-[#27AE60] p-3 min-w-[250px] rounded-lg': 'hidden'}>
                                                    <p className="text-white text-xs">Leave this box unchecked to keep your Project acessible to you and your team members only.</p>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="pt-5">
                                            <input type="checkbox" id="outsideDownload" name="outsideDownload" value="outsideDownloadAllow" defaultChecked={true} className="focus:ring-0" onChange={(e)=>{setOutsideDownload(e.target.checked)}}/>
                                            <label htmlFor="outsideDownload"> Allow users outside your team to download your project files.</label>
                                        </td>
                                        <td>
                                            <div className="flex flex-col relative justify-center bg-[#8b8b8b] w-[25px] h-[25px border rounded-full hover:cursor-pointer" onMouseEnter={()=>{setHoverDownload(true)}} onMouseLeave={()=>{setHoverDownload(false)}}>
                                                <p className="text-center text-white font-bold">?</p>
                                                <div className={hoverDownload ? 'absolute right-10 bg-[#27AE60] p-3 min-w-[250px] rounded-lg': 'hidden'}>
                                                    <p className="text-white text-xs">Leave this box unchecked to prevent others from downloading your project.</p>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="pt-5">
                                            <label htmlFor="slug">Project Slug *</label>
                                            <input type="text" id="slug" className="w-11/12" required={button == 'submitButton'} onChange={(e)=>{setSlug(e.target.value)}}/>
                                        </td>
                                        <td>
                                            <div className="flex flex-col relative justify-center bg-[#8b8b8b] w-[25px] h-[25px border rounded-full hover:cursor-pointer" onMouseEnter={()=>{setHoverSlug(true)}} onMouseLeave={()=>{setHoverSlug(false)}}>
                                                <p className="text-center text-white font-bold">?</p>
                                                <div className={hoverSlug ? 'absolute right-10 bg-[#27AE60] p-3 min-w-[250px] rounded-lg': 'hidden'}>
                                                    <p className="text-white text-xs">Project Slug must be 140 characters or less and Unique.</p>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="pt-5">
                                            <label htmlFor="challenge">Active Challenge *</label>
                                            <input type="text" id="challenge" className="w-11/12" required={button == 'submitButton'} onChange={(e)=>{setChallenge(e.target.value)}} />
                                        </td>
                                        <td>
                                            <div className="flex flex-col relative justify-center bg-[#8b8b8b] w-[25px] h-[25px border rounded-full hover:cursor-pointer" onMouseEnter={()=>{setHoverChallenge(true)}} onMouseLeave={()=>{setHoverChallenge(false)}}>
                                                <p className="text-center text-white font-bold">?</p>
                                                <div className={hoverChallenge ? 'absolute right-10 bg-[#27AE60] p-3 min-w-[250px] rounded-lg': 'hidden'}>
                                                    <p className="text-white text-xs">Select a challenge for this project.</p>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="pt-5">
                                            <label htmlFor="lab">Associated Lab</label>
                                            <input type="text" id="lab" className="w-11/12" onChange={(e)=>{setLab(e.target.value)}} />
                                        </td>
                                        <td>
                                            <div className="flex flex-col relative justify-center bg-[#8b8b8b] w-[25px] h-[25px border rounded-full hover:cursor-pointer" onMouseEnter={()=>{setHoverLab(true)}} onMouseLeave={()=>{setHoverLab(false)}}>
                                                <p className="text-center text-white font-bold">?</p>
                                                <div className={hoverLab ? 'absolute right-10 bg-[#27AE60] p-3 min-w-[250px] rounded-lg': 'hidden'}>
                                                    <p className="text-white text-xs">To associate with a lab, you must first join that lab.</p>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                    </div>
                </div>
                {/* Upload Image Section */}
                <div className="w-11/12 lg:h-full mx-auto bg-white shadow-lg shadow-gray-500/40 border rounded-2xl mt-3">
                    <div className="p-5">
                        <div className="flex flex-col justify-center">
                            <h2 className="text-xl font-semibold my-5">Upload Project Banner</h2>
                            <p>Please select png, jpg or jpeg image with minimum dimension of width: 625px, height: 355px.</p>
                        </div>
                        <div className="my-5 ">
                            <div className="flex items-center justify-center w-full">
                                <label htmlFor="dropzoneFile" className="flex flex-col w-11/12 items-center justify-center w-full h-64 border-2 border-[#27AE60] border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                    {/* Image Preview Section */}
                                    {selectedFile && preview ? <div className="w-11/12 h-auto overflow-hidden"><img src={preview} className="object-cover w-max h-max"/>
                                    </div> :
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                        </svg>
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG or JPEG (MAX. 625x355px)</p>
                                    </div>}
                                    <input id="dropzoneFile" name="dropzoneFile" type="file" className="hidden" accept="image/*" onChange={onSelectFile}  required={button == 'submitButton'}/>
                                </label>
                            </div> 
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        </div>
                    </div>
                </div>
                <div className="w-11/12 lg:h-full mx-auto bg-white shadow-lg shadow-gray-500/40 border rounded-2xl mt-3">
                    <div className="p-5">
                        <div className="flex flex-col justify-center">
                            <h2 className="text-xl font-semibold">Team Building</h2>
                            <p>Building a team is important for your project.</p>
                        </div>
                        <div className="my-5">
                            <label htmlFor="recruitStatus">Recruiting Status:</label>
                            <select id="recruitStatus" className="w-full" onChange={(e)=>{setRecruitStatus(e.target.value)}}>
                                <option value={'Not Selected'}>Select recruiting status for your Project.</option>
                                <option value={'Not Recruiting'}>Not currently recruiting.</option>
                                <option value={'Recruiting'}>Currently recruiting.</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="leader">Team Leader/Project Creator:</label>
                            <input type="text" id="leader" className="w-full" required={button == 'submitButton'} onChange={(e)=>{setLeader(e.target.value)}} />
                        </div>
                    </div>
                </div>
                <div className="flex my-5">
                    <div className="w-1/2 lg:w-10/12 mx-auto mb-5 text-center">
                        <button className="bg-[#eb3d1e] font-bold w-[150px] p-2 rounded hover:shadow-lg hover:shadow-gray-500/40" onClick={()=>{setButton('cancelButton')}}>Cancel Project</button>
                    </div>
                    <div className="w-1/2 lg:w-10/12 mx-auto mb-5 text-center">
                        <button className="bg-[#27AE60] text-white font-bold w-[150px] p-2 rounded hover:shadow-lg hover:shadow-gray-500/40" name="submitButton" onClick={()=>{setButton('submitButton')}}>Create Project</button>
                    </div>
                </div>
                </form>

            </div>

        </div>


        {/* Footer */}
        <Footer />
    </div>
    )
  }
  