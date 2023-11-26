"use client"; // This is a client component
import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';
import GoogleSignUp from '../components/googleSignUp';
import Footer from "../components/footer";
import axios from "../../../routes/api/axios";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,14}$/;
const REGISTER_URL = '/register/create';
// const REGISTER_GOOGLE_URL = '/googleRegister';



export default function Register() {
    
    const userReference = useRef();

    const [user, setUser] = useState('');

    const [firstNameFocus, setFirstNameFocus] = useState(false); // First name focus
    
    const [lastNameFocus, setLastNameFocus] = useState(false); // Last name focus
    const [emailFocus, setEmailFocus] = useState(false); // Email focus

    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false); // Username focus

    const [matchPwd, setMatchPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false); // Password focus

    const [pwd, setPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false); // Confirm password match focus

    const [errorMsg, setErrorMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const triggerSuccess = () => {
      return setSuccess(true);
    }

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [userType, setUserType] = useState('');
    const [language, setLanguage] = useState('');

    const setUserTypeHandler = ((e) =>{
      setUserType(e.target.value);
    });

    const setLanguageHandler = ((e) =>{
      setLanguage(e.target.value);
    });


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
      
      try {
        const response = await axios.post(
          REGISTER_URL,
          JSON.stringify({ 'firstName': firstName, 'lastName': lastName, 'email': email, 'username': user, 'password':pwd, 'userType': userType, 'language':language }),
          {
            headers: {'Content-Type': 'application/json'},
            withCredentials: true,
          });
          console.log(response?.data);
          console.log(response?.accessToken);
          console.log(JSON.stringify(response))
          setSuccess(true);
          setUser('');
          setPwd('');
          setMatchPwd('');
      } catch (error) {
        if(!error?.response){
          setErrorMsg('No Server Response');
          alert('No Server Response');
        } else if(error.response?.status === 409){
          setErrorMsg('Username Taken');
          alert('Username Taken');
        } else{
          console.log(error?.response);
          setErrorMsg('Registration Failed');
          alert('Registration Failed');
        }
      }
    }
    return (
    <>
      {success ? (
          <div className='bg-white w-11/12 h-[200px] mt-24 mx-auto my-5 sm:w-8/12 md:w-7/12 lg:w-1/2 xl:w-5/12 2xl:4/12'>
            <h1 className='text-center py-5 text-2xl font-bold'>Account Creation Successful!</h1>
            <p className='pl-5 my-5 font-bold'>Please go to the <a href='/login' className='text-[#ADD489] bg-[#1F1F1F] hover:bg-[#5C5C5C] p-2'>login page</a></p>
            
            <div className="fixed left-0 bottom-0 w-full">
              <Footer/>
            </div>
          </div>)
       : 
       (
      <div>
        <div className='md:flex'>
          {/* Carousel Section */}
          <div className='flex flex-col justify-center w-11/12 md:2/12 lg:4/12 2xl:w-4/12 h-[10%] mx-auto my-5'>
            <img src='splash1.png' className='mx-auto bg-[#ADD489] p-12'/>
          </div>

          <div className='bg-white md:w-10/12 lg:w-8/12 2xl:w-1/4 md:mt-10 md:mr-10'>
            
            {/* Register Form Section */}
            <form onSubmit={handleRegisterSubmit} className='flex flex-col w-full'>

              {/* Logo */}
              <div className='flex justify-center p-10'>
                <a href='/explore'><img src='prepr-logo.png' className='h-[60px]' /></a>
              </div>

              {/* First Name */}
              <div className='flex flex-col relative w-11/12 mx-auto pb-8'>
                <label htmlFor='firstName' className={firstNameFocus ? 'absolute -top-1 transition ease-in-out duration-500 -translate-y-4' : 'absolute -top-1 transition ease-in-out duration-500 translate-y-4'}>First Name</label>
                  <input type='text' id='firstName' onChange={(e) => setFirstName(e.target.value)} onFocus={() => setFirstNameFocus(true)} onBlur={(e) => e.target.value ? '' : setFirstNameFocus(false)} className='border-x-0 border-t-0 focus:ring-0'/>
              </div>

              {/* Last Name */}
              <div className='flex flex-col relative w-11/12 mx-auto pb-8'>
                <label htmlFor='lastName'className={lastNameFocus ? 'absolute -top-1 transition ease-in-out duration-500 -translate-y-4' : 'absolute -top-1 transition ease-in-out duration-500 translate-y-4'}>Last Name</label>
                <input type='text' id='lastName' onChange={(e) => setLastName(e.target.value)} onFocus={() => setLastNameFocus(true)} onBlur={(e) => e.target.value ? '' : setLastNameFocus(false)}  className='border-x-0 border-t-0 focus:ring-0'/>
              </div>

              {/* Add Email Here ---- Makes more sense */}
              <div className='flex flex-col relative w-11/12 mx-auto pb-8'>
                <label htmlFor='email' className={emailFocus ? 'absolute -top-1 transition ease-in-out duration-500 -translate-y-4' : 'absolute -top-1 transition ease-in-out duration-500 translate-y-4'}>Email</label>
                <input type='email' id='email' onChange={(e) => setEmail(e.target.value)} onFocus={() => setEmailFocus(true)} onBlur={(e) => e.target.value ? '' : setEmailFocus(false)}  className='border-x-0 border-t-0 focus:ring-0'/>
              </div>

              {/* Username */}
              <div className='flex flex-col relative w-11/12 mx-auto pb-8'>
                <label htmlFor='username' className={userFocus ? 'absolute -top-1 transition ease-in-out duration-500 -translate-y-4' : 'absolute -top-1 transition ease-in-out duration-500 translate-y-4'}>Username</label>
                <input type='text' id='username' ref={userReference} onChange={ (e) => setUser(e.target.value) } onFocus={() => setUserFocus(true)} onBlur={(e) => e.target.value ? '' : setUserFocus(false)} required aria-invalid={validName ? 'false' : 'true'} className='border-x-0 border-t-0 focus:ring-0'/>
                <p className={userFocus && user && !validName ? 'text-xs' : 'hidden'}>
                  4 to 24 characters.<br/>
                  Must begin with a letter.<br/>
                  Letters, numbers, underscores, and hyphens are allowed.
                </p>
              </div>

              {/* Password ---- Add Password strength? */}
              <div className='flex flex-col relative w-11/12 mx-auto pb-8'>
                <label htmlFor='password' className={pwdFocus ? 'absolute -top-1 transition ease-in-out duration-500 -translate-y-4' : 'absolute -top-1 transition ease-in-out duration-500 translate-y-4'}>Password</label>
                <input type='password' id='password' onChange={(e) => setPwd(e.target.value)} required aria-invalid={validPwd ? 'false' : 'true'} onFocus={() => setPwdFocus(true)} onBlur={(e) => e.target.value ? '' : setPwdFocus(false)} className='border-x-0 border-t-0 focus:ring-0'/>
                <p className={pwdFocus && !validPwd ? 'text-xs' : 'hidden'}>
                  8 to 14 characters.<br/>
                  Must include an uppercase.<br/>
                  Must include a lowercase.<br/>
                  Must include a number and special character.
                </p>
              </div>

              {/* Confirm Password */}
              <div className='flex flex-col relative w-11/12 mx-auto '>
                <label htmlFor='confirmPwd'className={matchFocus ? 'absolute -top-1 transition ease-in-out duration-500 -translate-y-4' : 'absolute -top-3 transition ease-in-out duration-500 translate-y-4'}>Confirm Password</label>
                <input type='password' id='confirmPwd' onChange={(e) => setMatchPwd(e.target.value)} required aria-invalid={validMatch ? 'false' : 'true'} onFocus={() => setMatchFocus(true)} onBlur={(e) => e.target.value ? '' : setMatchFocus(false)} className='border-x-0 border-t-0 focus:ring-0' />
                <p className={matchFocus && !validMatch ? 'text-xs' : 'hidden'}>
                  Must match the password field.
                </p>
              </div>

              {/* User Type dropdown */}
              <div className='w-11/12 mx-auto mt-5'>
                <select name="userType" id="userType" className='w-full' defaultValue='User Type' onChange={setUserTypeHandler} required>
                  <option value={null} className='hidden'>User Type</option>
                  <option value="learner">Learner</option>
                  <option value="applicant">Job Seeker / Applicant</option>
                  <option value="employee">Employee</option>
                  <option value="founder">Founder</option>
                  <option value="educator">Educator</option>
                  <option value="mentor">Mentor</option>
                </select>
              </div>

              {/* Select Language dropdown */}
              <div className='w-11/12 mx-auto mt-5'>
                <select name="language" id="language" className='w-full' defaultValue='Select Language' onChange={setLanguageHandler} required>
                  <option value={null} className='hidden'>Select Language</option>
                  <option value="English">English</option>
                  <option value="French">French</option>
                </select>
              </div>

              {/* Register Button */}
              <div className='flex justify-center w-11/12 h-[40px] mx-auto mt-5'>
                <button type='submit' className='bg-[#FFA841] w-full text-white rounded hover:transition hover:ease-in-out hover:duration-400 hover:shadow-xl shadow-gray-500'>Register</button>
              </div>

              <div className='flex justify-center w-11/12 mx-auto my-5'>
                <p>or</p>
              </div>
              
            </form>
            {/* Single Sign-On ---- Create Component */}
            <div className='w-11/12 mx-auto'>
              <GoogleSignUp triggerSuccess={triggerSuccess}/>
            </div>

            {/* Already have an account text/link */}
            <div className='flex justify-center w-11/12 mx-auto mt-5'>
              <p>Already have an account? <a href='/login'className='text-[#27ae60]'>Log in!</a></p>
            </div>

            {/* Organization regist text/link */}
            <div className='flex justify-center w-11/12 mx-auto mb-5 pb-5'>
              <p>Are you an Organization? <a href='#0' className='text-[#27ae60]'>Register here!</a></p>
            </div>
          </div>
        </div>
      {/* Footer */}
      <Footer/>
      </div>
      )}
    </>
  )
}


