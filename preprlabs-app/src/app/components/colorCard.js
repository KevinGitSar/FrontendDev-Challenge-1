"use client";
import { useEffect, useState } from "react";

export default function ColorCard(props) {
    

    return (
      <>
          <div className="bg-[#e5e7eb] w-11/12 mx-auto py-10 mb-5 rounded-xl">
                <div className="flex flex-col justify-center">
                    <p className="text-center ml-3">{props.title}</p>
                    <div className="flex justify-center my-2">

                        <button className="w-[25px] h-[25px] bg-[#0076B4] border border-black rounded-full m-1 hover:transition hover:ease-in-out hover:delay-100 hover:scale-125"></button>

                        <button className="w-[25px] h-[25px] bg-[#7A549C] border border-black rounded-full m-1 hover:transition hover:ease-in-out hover:delay-100 hover:scale-125"></button>

                        <button className="w-[25px] h-[25px] bg-[#C83733] border border-black rounded-full m-1 hover:transition hover:ease-in-out hover:delay-100 hover:scale-125"></button>

                        <button className="w-[25px] h-[25px] bg-[#D07021] border border-black rounded-full m-1 hover:transition hover:ease-in-out hover:delay-100 hover:scale-125"></button>

                        <button className="w-[25px] h-[25px] bg-[#26999F] border border-black rounded-full m-1 hover:transition hover:ease-in-out hover:delay-100 hover:scale-125"></button>

                        <button className="w-[25px] h-[25px] bg-white border border-black rounded-full m-1 hover:transition hover:ease-in-out hover:delay-100 hover:scale-125"></button>

                        <button className="w-[25px] h-[25px] bg-white border border-black rounded-full m-1 hover:transition hover:ease-in-out hover:delay-100 hover:scale-125"></button>

                        <button className="w-[25px] h-[25px] bg-black border border-black rounded-full m-1 hover:transition hover:ease-in-out hover:delay-100 hover:scale-125"></button>

                    </div>
                    <button className="hover:underline">Cancel</button>
                </div>

          </div>
      </>
    );
  }