"use client"; // This is a client component
import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';
import Footer from "../components/footer";
import axios from "../../../routes/api/axios";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,14}$/;
const REGISTER_URL = '/register/create';



export default function Register() {

    const userReference = useRef();
    const errorReference = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    
    const [errorMsg, setErrorMsg] = useState(false);
    const [success, setSuccess] = useState(false);

    //Set focus on user input
    useEffect(() => {
      userReference.current.focus();
    }, []);

    //Validate Username
    useEffect(() => {
      const result = USER_REGEX.test(user);
      setValidName(result);
    }, [user]);

    //Validate Password and Confirm Password
    useEffect(() => {
      const result = PWD_REGEX.test(pwd);
      setValidPwd(result);
      const match = pwd === matchPwd;
      setValidMatch(match);
    }, [pwd, matchPwd]);

    //Set Error Message
    useEffect(() => {
      setErrorMsg('');
    }, [user, pwd, matchPwd]);

    useLayoutEffect(() => {
      document.body.style.backgroundColor = "#add489"
    });

    const handleRegisterSubmit = async (e) => {
      e.preventDefault();
      const verifyUsername = USER_REGEX.test(user);
      const verifyPassword = PWD_REGEX.test(pwd);
      if(!verifyUsername || !verifyPassword) {
        setErrorMsg('Invalid Entry');
        return;
      }
      console.log(user,pwd);
      setSuccess(true);
      // try {
      //   const response = await axios.post(
      //     REGISTER_URL,
      //     JSON.stringify({ firstName, lastName, email, user, pwd, userType, language}),
      //     {
      //       headers: {'Content-Type': 'application/json'},
      //       withCredentials: true
      //     });
      //     setSuccess(true);
      //     // clear input fields
      // } catch (error) {
      //   if(!error?.response){
      //     setErrorMsg('No Server Response');
      //   } else if(error.response?.status === 409){
      //     setErrorMsg('Username Taken');
      //   } else{
      //     setErrorMsg('Registration Failed');
      //   }
      //   errorReference.current.focus();
      // }
    }
    return (
    <>
      {success ? (
      <div>
        <h1>SUCCESS!</h1>
      </div>) : (
      <div>
        {/* Carousel Section ---- Create Component */}
        <div className='flex flex-col justify-center bg-white w-11/12 h-[300px] mx-auto my-5'>
          <img src='prepr-logo.png' className='mx-auto'/>
        </div>

        
        {/* Log in Form Section */}
        <form className='flex flex-col bg-[#FFFFFF] w-11/12 mx-auto' onSubmit={handleRegisterSubmit}>

          {/* Logo */}
          <div className='flex justify-center p-5'>
            <img src='prepr-logo.png' className='h-[60px]' />
          </div>

          {/* First Name */}
          <div className='flex flex-col w-10/12 mx-auto'>
            <label htmlFor='firstName'>First Name</label>
            <input type='text' id='firstName' ref={userReference} onChange={(e) => setUser(e.target.value)} onFocus={() => setUserFocus(true)} onBlur={() => setUserFocus(false)} />
          </div>

          {/* Last Name */}
          <div className='flex flex-col w-10/12 mx-auto'>
            <label>Last Name</label>
            <input type='text' />
          </div>

          {/* Add Email Here ---- Makes more sense */}
          <div className='flex flex-col w-10/12 mx-auto'>
            <label>Email</label>
            <input type='text' />
          </div>

          {/* Username */}
          <div className='flex flex-col w-10/12 mx-auto'>
            <label htmlFor='username'>Username</label>
            <input type='text' id='username' ref={userReference} onChange={(e) => setUser(e.target.value)} onFocus={() => setUserFocus(true)} onBlur={() => setUserFocus(false)} required aria-invalid={validName ? 'false' : 'true'}/>
            <p className={userFocus && user && !validName ? 'text-xs' : 'hidden'}>
              4 to 24 characters.<br/>
              Must begin with a letter.<br/>
              Letters, numbers, underscores, and hyphens are allowed.
            </p>
          </div>

          {/* Password ---- Add Password strength? */}
          <div className='flex flex-col w-10/12 mx-auto'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' onChange={(e) => setPwd(e.target.value)} required aria-invalid={validPwd ? 'false' : 'true'} onFocus={() => setPwdFocus(true)} onBlur={() => setPwdFocus(false)}/>
            <p className={pwdFocus && !validPwd ? 'text-xs' : 'hidden'}>
              8 to 14 characters.<br/>
              Must include an uppercase.<br/>
              Must include a lowercase.<br/>
              Must include a number and special character.
            </p>
          </div>

          {/* Confirm Password */}
          <div className='flex flex-col w-10/12 mx-auto'>
            <label htmlFor='confirmPwd'>Confirm Password</label>
            <input type='password' id='confirmPwd' onChange={(e) => setMatchPwd(e.target.value)} required aria-invalid={validMatch ? 'false' : 'true'} onFocus={() => setMatchFocus(true)} onBlur={() => setMatchFocus(false)} />
            <p className={matchFocus && !validMatch ? 'text-xs' : 'hidden'}>
              Must match the password field.
            </p>
          </div>

          {/* User Type dropdown */}
          <div className='w-10/12 mx-auto mt-5'>
            <select name="userType" id="userType" className='w-full' required>
              <option defaultValue="" value={true} className='hidden'>User Type</option>
              <option defaultValue="learner">Learner</option>
              <option defaultValue="applicant">Job Seeker / Applicant</option>
              <option defaultValue="employee">Employee</option>
              <option defaultValue="founder">Founder</option>
              <option defaultValue="educator">Educator</option>
              <option defaultValue="mentor">Mentor</option>
            </select>
          </div>

          {/* Select Language dropdown */}
          <div className='w-10/12 mx-auto mt-5'>
            <select name="language" id="language" className='w-full' required>
              <option defaultValue="" value={true} className='hidden'>Select Language</option>
              <option defaultValue="English">English</option>
              <option defaultValue="French">French</option>
            </select>
          </div>

          {/* Register Button */}
          <div className='flex justify-center w-10/12 h-[40px] mx-auto mt-5'>
            <button type='submit' className='bg-[#FFA841] w-full text-white'>Register</button>
          </div>

          <div className='flex justify-center w-10/12 mx-auto'>
            <p>or</p>
          </div>
          {/* Single Sign-On ---- Create Component */}

          {/* Already have an account text/link */}
          <div className='flex justify-center w-10/12 mx-auto mt-5'>
            <p>Already have an account? <a href='#0'>Log in!</a></p>
          </div>

          {/* Organization regist text/link */}
          <div className='flex justify-center w-10/12 mx-auto mb-5'>
            <p>Are you an Organization? <a href='#0'>Register here!</a></p>
          </div>
        </form>
      
      </div>
      
      )}
      {/* Footer */}
      <Footer />
      
    </>
  )
}


