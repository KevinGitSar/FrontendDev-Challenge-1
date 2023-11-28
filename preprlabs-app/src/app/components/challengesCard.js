"use client"; // This is a client component
import {useState} from "react";

export default function ChallengesCard(props) {

    const [challengesTab, setChallengesTab] = useState(1);

    return (
      <>
          <div className="w-11/12 lg:h-full lg:relative mx-auto bg-white shadow-lg shadow-gray-500/40 border rounded-3xl mt-3">
              <div>
                    <div className="flex flex-col justify-center px-5 pt-5 pb-1">
                        <h2 className="text-xl font-bold text-[#27AE60]">{props.title}</h2>
                    </div>

                    {/* Buttons */}
                    <div className="border">
                        <button className={challengesTab === 1 ? 'text-base lg:text-xs 2xl:text-sm text-[#27AE60] font-bold pt-3 px-1 pb-5 border-b-4 border-b-[#27AE60] w-1/3' : 'text-base lg:text-xs 2xl:text-sm font-bold pt-3 px-1 pb-5 border-b-4 w-1/3'} onClick={() => {setChallengesTab(1)}}>My Challenges</button>

                        <button className={challengesTab === 2 ? 'text-base lg:text-xs 2xl:text-sm text-[#27AE60] font-bold  px-1 pt-3 pb-5 border-x border-b-4 border-b-[#27AE60] w-1/3' : 'text-base lg:text-xs 2xl:text-sm font-bold px-1 pt-3 pb-5 border-x border-b-4 w-1/3'} onClick={() => {setChallengesTab(2)}}>Invited</button>

                        <button className={challengesTab === 3 ? 'text-base lg:text-xs 2xl:text-sm text-[#27AE60] font-bold  px-1 pt-3 pb-5 border-x border-b-4 border-b-[#27AE60] w-1/3' : 'text-base lg:text-xs 2xl:text-sm font-bold px-1 pt-3 pb-5 border-x border-b-4 w-1/3'} onClick={() => {setChallengesTab(3)}}>Following</button>
                    </div>

                    <div className="text-center py-5">
                        <p className={challengesTab === 1 ? 'font-semibold text-[#727d92]' : 'hidden'}>No challenges found.</p>
                        <p className={challengesTab === 2 ? 'font-semibold text-[#727d92]' : 'hidden'}>No pending challenge invitations.</p>
                        <p className={challengesTab === 3 ? 'font-semibold text-[#727d92]' : 'hidden'}>Following 0 Challenges.</p>
                    </div>
              </div>

                <div className="w-full lg:absolute lg:inset-x-0 lg:bottom-0 mx-auto border-t border-[#D2D4DA] bg-[#F7F7F7] rounded-b-3xl">
                    <div className="flex justify-center py-5">
                        <button className="bg-[#27AE60] text-white w-[150px] p-2 rounded hover:shadow-lg hover:shadow-gray-500/40">{props.buttonText}</button>
                    </div>
                </div>
          </div>
      </>
    );
  }