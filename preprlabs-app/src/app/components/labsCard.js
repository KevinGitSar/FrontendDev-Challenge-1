"use client"; // This is a client component
import {useState} from "react";

export default function LabsCard(props) {

    const [labsTab, setLabsTab] = useState(1);

    return (
      <>
          <div className="w-11/12 lg:h-full lg:relative mx-auto bg-white shadow-lg shadow-gray-500/40 border rounded-3xl mt-3">
              <div>
                    <div className="flex flex-col justify-center px-5 pt-5 pb-1">
                        <h2 className="text-xl font-bold text-[#27AE60]">{props.title}</h2>
                    </div>

                    {/* Buttons */}
                    <div className="border">
                        <button className={labsTab === 1 ? 'text-base lg:text-xs 2xl:text-sm text-[#27AE60] font-bold pt-3 px-2 pb-5 border-b-4 border-b-[#27AE60] w-1/2' : 'text-base lg:text-xs font-bold pt-3 px-2 pb-5 border-b-4 w-1/2'} onClick={() => {setLabsTab(1)}}>My Labs</button>

                        <button className={labsTab === 2 ? 'text-base lg:text-xs 2xl:text-sm text-[#27AE60] font-bold  px-2 pt-3 pb-5 border-x border-b-4 border-b-[#27AE60] w-1/2' : 'text-base lg:text-xs font-bold px-2 pt-3 pb-5 border-x border-b-4 w-1/2'} onClick={() => {setLabsTab(2)}}>Invited</button>
                    </div>

                    <div className="text-center py-5">
                        <p className={labsTab === 1 ? 'font-semibold text-[#727d92]' : 'hidden'}>No labs found.</p>
                        <p className={labsTab === 2 ? 'font-semibold text-[#727d92]' : 'hidden'}>No pending Lab invitations.</p>
                    </div>
              </div>

                <div className="w-full lg:absolute lg:inset-x-0 lg:bottom-0 justify-end mx-auto border-t border-[#D2D4DA] bg-[#F7F7F7] rounded-b-3xl">
                    <div className="flex justify-center py-5">
                        <button className="bg-[#27AE60] text-white w-[150px] p-2 rounded hover:shadow-lg hover:shadow-gray-500/40">{props.buttonText}</button>
                    </div>
                </div>
          </div>
      </>
    );
  }