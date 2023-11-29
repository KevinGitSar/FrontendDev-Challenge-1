"use client";
import { useEffect, useState } from "react";

export default function AdjustmentButton(props) {
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
      if(props.reset){
        setClicked(false);
      }
    }, [props.reset]);
    return (
      <>
          <div className={clicked ? 'bg-[#109326] w-11/12 mx-auto py-10 mb-5 rounded-xl hover:border-2 hover:border-[#109326] hover:cursor-pointer' : 'bg-[#e5e7eb] w-11/12 mx-auto py-10 mb-5 rounded-xl hover:border-2 hover:border-[#109326] hover:cursor-pointer'} onClick={()=>setClicked(!clicked)}>
                <div className="flex flex-col justify-center">
                    <svg fill={clicked ? '#FFFFFF' : 'currentColor'} xmlns="http://www.w3.org/2000/svg" viewBox={props.viewBox} className="mx-auto w-[25px] h-[25px]"><path xmlns="http://www.w3.org/2000/svg" d={props.svg}></path></svg>
                    <p className={clicked ? 'text-center ml-3 text-white mt-5' : 'text-center ml-3 mt-5'}>{props.title}</p>
                </div>
          </div>
      </>
    );
  }