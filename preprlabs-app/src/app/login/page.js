"use client"; // This is a client component
import React, { useRef, useState, useEffect, useLayoutEffect, useContext } from "react";
import Footer from "../components/footer";
import AuthContext from "../../context/AuthProvider";
import axios from "../../../routes/api/axios";
import GoogleLogIn from "../components/googleLogIn";

const LOGIN_URL = '/auth';

export default function Login() {
    const { setAuth } = useContext(AuthContext);

    const [userFocus, setUserFocus] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const userReference = useRef();
    const [errorMsg, setErrorMsg] = useState('');
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [success, setSuccess] = useState(false);

    //Set details after login
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [userType, setUserType] = useState('');
    const [language, setLanguage] = useState('');
    
    //Set focus on user input
    useEffect(() => {
      userReference.current.focus();
    }, []);

    useLayoutEffect(() => {
      document.body.style.backgroundColor = "#add489"
    });

    //Set Error Message
    useEffect(() => {
      setErrorMsg('');
    }, [user, pwd]);

    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post(
          LOGIN_URL,
          JSON.stringify({username: user, password: pwd}),
          {
            headers: { 'Content-Type' : 'application/json'},
            withCredentials: true
          }
        );
        if(response.data.foundUser){
          setFirstName(response?.data?.foundUser?.firstName);
          setLastName(response?.data?.foundUser?.lastName);
          setEmail(response?.data?.foundUser?.email);
          setUsername(response?.data?.foundUser?.username);
          setUserType(response?.data?.foundUser?.userType);
          setLanguage(response?.data?.foundUser?.language);
        }

        if(response.data.foundEmail){
          setFirstName(response?.data?.foundEmail?.firstName);
          setLastName(response?.data?.foundEmail?.lastName);
          setEmail(response?.data?.foundEmail?.email);
          setUsername(response?.data?.foundEmail?.username);
          setUserType(response?.data?.foundEmail?.userType);
          setLanguage(response?.data?.foundEmail?.language);
        }
        setUser('');
        setPwd('');
        setSuccess(true);
        const accessToken = response?.data?.accessToken;
        const roles = response?.data?.roles;
        setAuth({username: user, password: pwd, roles: roles, accessToken: accessToken});

      } catch (error) {
        if(!error?.response){
          setErrorMsg('No Server Response');
        } else if(error.response?.status === 409){
          setErrorMsg('Missing Username or Password');
        } else if(error.response?.status === 401){
          setErrorMsg('Unauthorized');
        }else{
          setErrorMsg('Login Failed');
        }
      }
      
    }
    

    return (
      <>
        {success ? (
          <div>
            <div className='bg-white w-11/12 mt-24 mx-auto my-5 sm:w-8/12 md:w-7/12 lg:w-1/2 xl:w-3/12 2xl:4/12'>
              <h1 className='text-center py-5 text-2xl font-bold'>Log in Successful!</h1>
              <p className='pl-10 my-5 font-bold'>User Details</p>
              <p className='pl-10 my-5'>First Name: {firstName}</p>
              <p className='pl-10 my-5'>Last Name: {lastName}</p>
              <p className='pl-10 my-5'>Email: {email}</p>
              <p className='pl-10 my-5'>Username: {username}</p>
              <p className='pl-10 my-5'>User Type: {userType}</p>
              <p className='pl-10 my-5'>Language: {language}</p>
              <p className='pl-10 my-5
              pb-10 font-bold'>Please go to the <a href='/explore' className='text-[#ADD489] bg-[#1F1F1F] hover:bg-[#5C5C5C] p-2'>explore page</a></p>
            </div>
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
            {/* Log in Form Section */}
            <form onSubmit={handleLogin} className='flex flex-col w-full'>

              {/* Logo */}
              <div className='flex justify-center p-10'>
                <a href='/explore'><img src='prepr-logo.png' className='h-[60px]' /></a>
              </div>

              {/* Username */}
              <div className='flex flex-col relative w-11/12 mx-auto pb-8'>
                <label htmlFor='username' className={userFocus ? 'absolute -top-1 transition ease-in-out duration-500 -translate-y-4' : 'absolute -top-1 transition ease-in-out duration-500 translate-y-4'}>Username or Email</label>
                <input type='text' id='username' className='border-x-0 border-t-0 focus:ring-0' ref={userReference} onChange={(e) => setUser(e.target.value)} value={user} onFocus={() => setUserFocus(true)} onBlur={(e) => e.target.value ? '' : setUserFocus(false)} required/>
              </div>

              {/* Password */}
              <div className='flex flex-col relative w-11/12 mx-auto pb-4'>
                <label htmlFor='password' className={pwdFocus ? 'absolute -top-1 transition ease-in-out duration-500 -translate-y-4' : 'absolute -top-1 transition ease-in-out duration-500 translate-y-4'}>Password</label>
                <input type='password' id='password' className='border-x-0 border-t-0 focus:ring-0' onChange={(e) => setPwd(e.target.value)} value={pwd} onFocus={() => setPwdFocus(true)} onBlur={(e) => e.target.value ? '' : setPwdFocus(false)} required/>
              </div>
              
              <div className='w-11/12 mb-5'>
                <a href='#0' className='float-right'>
                  Forgot Password?
                </a>
              </div>

              {/* Log in Button */}
              <div className='flex justify-center w-11/12 h-[40px] mx-auto'>
                <button type='submit' className='bg-[#FFA841] w-full text-white rounded hover:transition hover:ease-in-out hover:duration-400 hover:shadow-xl shadow-gray-500'>Log in</button>
              </div>

              <div className='flex justify-center w-11/12 mx-auto my-5'>
                <p>or</p>
              </div>
            </form>
            
            {/* Single Sign-On ---- Create Component */}
            <div className='w-11/12 mx-auto mb-5'>
              <GoogleLogIn />
            </div>

            {/* Sign up text/link */}
            <div className='flex justify-center w-11/12 mx-auto mb- pb-5'>
              <p>Don't have an account? <a href='/register' className='text-[#27ae60]'>Sign up!</a></p>
            </div>

            </div>
        </div>
        <div className="fixed left-0 bottom-0 w-full">
          <Footer />
        </div>
      </div>
      )}
    </>
  )
}