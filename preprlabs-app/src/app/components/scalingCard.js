"use client";
import { useEffect, useState } from "react";

export default function ScalingCard(props) {
    
    // Counter functionality
    const [count, setCount] = useState(0);
    const [countText, setCountText] = useState('Default');

    // Keep watch of reset state
    useEffect(()=>{
        if(props.reset){
            setCount(0);
            setCountText('Default')
        }
    },[props.reset]);


    // Increase button count
    const increaseCount = () => {
        if(count < 200){
            setCount(count + 1);

            if(props.scaling){
                props.increase();
            }
        }
        
    }

    // Decrease button count
    const decreaseCount = () => {
        if(count > 0){
            setCount(count - 1);
            if(props.scaling){
                props.decrease();
            }
        }
    }

    // Watch count change text based on count
    useEffect(() => {
        if(count == 0){
            setCountText('Default');
        } else{
            setCountText(count + '%');
        }
    },[count]);


    return (
      <>
          <div className="bg-[#e5e7eb] w-11/12 mx-auto py-10 mb-5 rounded-xl">
                <div className="flex justify-center">
                    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox={props.viewBox} className="w-[25px] h-[25px]"><path xmlns="http://www.w3.org/2000/svg" d={props.svg}></path></svg>
                    <p className="text-center ml-3">{props.title}</p>
                </div>

                <div className="flex flex-col justify-center bg-white w-3/4 mt-5 mx-auto h-[35px] rounded-full border">
                    <div className="flex justify-between">
                        
                        <button className="border rounded-full w-[35px] h-[35px] bg-[#109326] hover:transition hover:ease-in-out hover:delay-100 hover:scale-125 hover:border-black" onClick={decreaseCount}><svg xmlns="http://www.w3.org/2000/svg" className="mx-auto" width="15" height="15" fill="#FFFFFF" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg></button>
                        
                        <div className="flex flex-col justify-center">
                            <p className="font-semibold text-[#109326]">{countText}</p>
                        </div>
                        
                        <button className="border rounded-full w-[35px] h-[35px] bg-[#109326] hover:transition hover:ease-in-out hover:delay-100 hover:scale-125 hover:border-black" onClick={increaseCount}><svg xmlns="http://www.w3.org/2000/svg" className="mx-auto" width="15" height="15" fill="#FFFFFF" viewBox="0 0 24 24"><path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"/></svg></button>
                    </div>
                </div>
          </div>
      </>
    );
  }