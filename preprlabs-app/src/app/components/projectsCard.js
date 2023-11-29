"use client"; // This is a client component
import {useState} from "react";

export default function ProjectsCard(props) {

    const [projectsTab, setProjectsTab] = useState(1);

    return (
      <>
          <div className="w-11/12 lg:h-full lg:relative mx-auto bg-white shadow-lg shadow-gray-500/40 border rounded-3xl mt-3">
              <div className="pb-20">
                    <div className="flex justify-between h-[50px]">
                        <div className="flex flex-col justify-center px-5 pt-5 pb-1">
                            <h2 className="text-xl font-bold text-[#27AE60]">{props.title}</h2>
                        </div>
                        
                        <button className="text-sm bg-[#27AE60] text-white w-[80px] h-[40px] m-4 rounded hover:shadow-lg hover:shadow-gray-500/40" onClick={() => {window.location.replace('/projects')}}>Create</button>
                    </div>

                    {/* Buttons */}
                    <div className="border mt-5">
                        <button className={projectsTab === 1 ? 'text-base lg:text-xs 2xl:text-sm text-[#27AE60] font-bold pt-3 px-1 pb-5 border-b-4 border-b-[#27AE60] w-1/3' : 'text-base lg:text-xs 2xl:text-sm font-bold pt-3 px-1 pb-5 border-b-4 w-1/3'} onClick={() => {setProjectsTab(1)}}>My Projects</button>

                        <button className={projectsTab === 2 ? 'text-base lg:text-xs 2xl:text-sm text-[#27AE60] font-bold  px-1 pt-3 pb-5 border-x border-b-4 border-b-[#27AE60] w-1/3' : 'text-base lg:text-xs 2xl:text-sm font-bold px-1 pt-3 pb-5 border-x border-b-4 w-1/3'} onClick={() => {setProjectsTab(2)}}>Need to Assess</button>

                        <button className={projectsTab === 3 ? 'text-base lg:text-xs 2xl:text-sm text-[#27AE60] font-bold  px-1 pt-3 pb-5 border-x border-b-4 border-b-[#27AE60] w-1/3' : 'text-base lg:text-xs 2xl:text-sm font-bold px-1 pt-3 pb-5 border-x border-b-4 w-1/3'} onClick={() => {setProjectsTab(3)}}>Invited</button>
                    </div>

                    <div className="text-center py-5 lg:min-h-[250px]">
                        <div className={projectsTab === 1 ? 'overflow-auto max-h-[250px]' : 'hidden'}>
                            {!props.projects ? 
                            <p className="font-semibold text-[#727d92]">No Projects found.</p> : 
                            
                            // Map out all projects
                            props.projects &&
                            props.projects.projects.map((project, index) =>
                            <div key={project.slug + index} className="p-2">
                                <p className="text-left text-[#27AE60] font-bold text-xl">{project.title}</p>
                                <div className="flex">
                                    <img src={project.dropzoneFile} className="w-1/4" />
                                    <p className="text-left pl-1 text-sm">{project.description}</p>
                                </div>
                            </div>)
                            }
                        </div>
                        <p className={projectsTab === 2 ? 'font-semibold text-[#727d92]' : 'hidden'}>This area will display project submissions for you to assess in a challenge if you are invited.</p>
                        <p className={projectsTab === 3 ? 'font-semibold text-[#727d92]' : 'hidden'}>No pending project invitations.</p>
                    </div>
              </div>

                <div className="w-full lg:absolute lg:inset-x-0 lg:bottom-0 mx-auto border-t border-[#D2D4DA] bg-[#F7F7F7] rounded-b-3xl">
                    <div className="flex justify-center py-5">
                        <button className="bg-[#27AE60] text-white w-[150px] p-2 rounded hover:shadow-lg hover:shadow-gray-500/40" >{props.buttonText}</button>
                    </div>
                </div>
          </div>
      </>
    );
  }