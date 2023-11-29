"use client";
import { useEffect, useState } from "react";

export default function DropdownCard(props) {
    


    return (
      <>
          <div className="bg-[#e5e7eb] w-11/12 mx-auto py-10 mb-5 rounded-xl">
                <div className="flex justify-center">
                    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox={props.viewBox} className="w-[25px] h-[25px]"><path xmlns="http://www.w3.org/2000/svg" d={props.svg}></path></svg>
                    <p className="text-center ml-3">{props.title}</p>
                </div>

                <div className="w-11/12 mx-auto mt-5">
                    <select className="border-0 focus:ring-2 rounded-full w-full">
                        <option disabled>Select an option</option>
                        <option>Header</option>
                        <option>Home</option>
                        <option>Main Content</option>
                        <option>Footer</option>
                    </select>
                </div>

          </div>
      </>
    );
  }