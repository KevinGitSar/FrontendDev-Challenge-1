"use client"; // This is a client component
import React, { useLayoutEffect } from 'react'
import Footer from "../components/footer"

export default function Login() {
    useLayoutEffect(() => {
      document.body.style.backgroundColor = "#add489"
    });

    return (
    <div>
      {/* Carousel Section ---- Create Component */}
      <div className='flex flex-col justify-center bg-white w-11/12 h-[300px] mx-auto my-5'>
        <img src='prepr-logo.png' className='mx-auto'/>
      </div>
      {/* <Carousel /> */}

      {/* Log in Form Section */}
      <form className='flex flex-col bg-[#FFFFFF] w-11/12 mx-auto'>

        {/* Logo */}
        <div className='flex justify-center p-5'>
          <img src='prepr-logo.png' className='h-[60px]' />
        </div>

        {/* Username */}
        <div className='flex flex-col w-10/12 mx-auto'>
          <label>Username or Email</label>
          <input type='text' />
        </div>

        {/* Password */}
        <div className='flex flex-col w-10/12 mx-auto'>
          <label>Password</label>
          <input type='password' />
        </div>
        
        <div className='w-11/12'>
          <a href='#0' className='float-right'>
            Forgot Password?
          </a>
        </div>

        {/* Log in Button */}
        <div className='flex justify-center w-10/12 h-[40px] mx-auto'>
          <button type='submit' className='bg-[#FFA841] w-full text-white'>Log in</button>
        </div>
        <div className='flex justify-center w-10/12 mx-auto'>
          <p>or</p>
        </div>
        {/* Single Sign-On ---- Create Component */}

        {/* Sign up text/link */}
        <div className='flex justify-center w-10/12 mx-auto mb-5'>
          <p>Don't have an account? <a href='#0'>Sign up!</a></p>
        </div>
      </form>

      <Footer />
    </div>
  )
}