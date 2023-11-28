"use client"; // This is a client component
import {useState} from "react";

export default function ProgressCard(props) {
    const [progressTab, setProgressTab] = useState(1);
  return (
    <>
        <div className="w-11/12 lg:h-full mx-auto bg-white shadow-lg shadow-gray-500/40 border rounded-3xl mt-3">
            <div className="flex lg:flex-col justify-between p-5">
                <div className="flex flex-col justify-center">
                    <h2 className="text-xl font-bold">{props.title}</h2>
                </div>
                <div className="border lg:mt-3">
                    <button className={progressTab === 1 ? 'lg:w-1/3 text-sm text-[#27AE60] pt-3 px-2 pb-5 border-b-4 border-b-[#27AE60]' : 'lg:w-1/3 text-sm text-[#D2D4DA] pt-3 px-2 pb-5 border-b-4'} onClick={() => {setProgressTab(1)}}>Challenges</button>

                    <button className={progressTab === 2 ? 'lg:w-1/3 text-sm text-[#27AE60] px-2 pt-3 pb-5 border-x border-b-4 border-b-[#27AE60]' : 'lg:w-1/3 text-sm text-[#D2D4DA] px-2 pt-3 pb-5 border-x border-b-4'} onClick={() => {setProgressTab(2)}}>Labs</button>
                    
                    <button className={progressTab === 3 ? 'lg:w-1/3 text-sm text-[#27AE60] pt-3 px-2 pb-5 border-b-4 border-b-[#27AE60]' : 'lg:w-1/3 text-sm text-[#D2D4DA] pt-3 px-2 pb-5 border-b-4'} onClick={() => {setProgressTab(3)}}>Resources</button>
                </div>
            </div>
            
            <div className="px-5">
                <p className="text-sm">{props.description}</p>
            </div>
            <div className={progressTab === 1 ? 'p-5 w-9/12 mx-auto' : 'hidden'}>
                <div className="py-10">
                    <h3 className="text-center text-2xl"><span className="font-bold text-4xl text-[#27AE60]">0</span>/22</h3>
                    <h3 className="text-center text-2xl text-[#27AE60]">Challenges</h3>
                </div>
                <div className="pb-5">
                    <p>Project Submitted: <span className="float-right">0</span></p>
                    <p className="my-2">Project Created: <span className="float-right">0</span></p>
                    <p className="my-2">Invited: <span className="float-right">0</span></p>
                    <p>Followed: <span className="float-right">0</span></p>
                </div>
            </div>

            <div className={progressTab === 2 ? 'p-5 w-11/12 mx-auto flex justify-between my-5' : 'hidden'}>
                
                <div className="w-1/2">
                    <p>Completed: <span className="float-right">0</span></p>
                    <p className="my-2">In progress: <span className="float-right">0</span></p>
                    <p>Not started: <span className="float-right">0</span></p>
                </div>
                <div className="flex flex-col justify-center w-1/4">
                    <h3 className="text-center text-2xl"><span className="font-bold text-4xl text-[#498cce]">0</span>/3</h3>
                    <h3 className="text-center text-2xl text-[#498cce]">Labs</h3>
                </div>
            </div>

            <div className={progressTab === 3 ? 'p-5 w-11/12 mx-auto my-5' : 'hidden'}>
                
                <div className="w-4/12 mx-auto mb-5">
                    <img src="my-progress-icon.png"/>
                </div>
                <div className="flex justify-center">
                    <button className="bg-[#27AE60] text-white w-[150px] p-2 rounded hover:shadow-lg hover:shadow-gray-500/40">Explore Modules</button>
                </div>
            </div>
        </div>
    </>
  );
}