"use client"; // This is a client component
import React, { useRef, useState, useEffect, useLayoutEffect, useContext } from "react";
import Footer from "../components/footer";
import AuthContext from "../../context/AuthProvider";
import axios from "../../../routes/api/axios";
import GoogleLogIn from "../components/googleLogIn";

const LOGIN_URL = '/auth';

export default function Login() {
    const { setAuth } = useContext(AuthContext);

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
        
        setUser('');
        setPwd('');
        setFirstName(response?.data?.foundUser?.firstName);
        setLastName(response?.data?.foundUser?.lastName);
        setEmail(response?.data?.foundUser?.email);
        setUsername(response?.data?.foundUser?.username);
        setUserType(response?.data?.foundUser?.userType);
        setLanguage(response?.data?.foundUser?.language);
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
        <script src="https://accounts.google.com/gsi/client" async defer></script>
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
        
        {/* Carousel Section ---- Create Component */}
        <div className='flex flex-col justify-center bg-white w-11/12 h-[300px] mx-auto my-5'>
          <img src='prepr-logo.png' className='mx-auto'/>
        </div>
        {/* <Carousel /> */}

        {/* Log in Form Section */}
        <form onSubmit={handleLogin} className='flex flex-col bg-[#FFFFFF] w-11/12 mx-auto'>

          {/* Logo */}
          <div className='flex justify-center p-5'>
            <img src='prepr-logo.png' className='h-[60px]' />
          </div>

          {/* Username */}
          <div className='flex flex-col w-10/12 mx-auto'>
            <label htmlFor='username'>Username or Email</label>
            <input type='text' id='username' ref={userReference} onChange={(e) => setUser(e.target.value)} value={user} required/>
          </div>

          {/* Password */}
          <div className='flex flex-col w-10/12 mx-auto'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' onChange={(e) => setPwd(e.target.value)} value={pwd} required/>
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
        </form>
          {/* Single Sign-On ---- Create Component */}
          <div className="w-10/12 mx-auto">
            <GoogleLogIn />
          </div>

          {/* Sign up text/link */}
          <div className='flex justify-center w-10/12 mx-auto mb-5'>
            <p>Don't have an account? <a href='/register'>Sign up!</a></p>
          </div>
        <Footer />
      </div>
      )};
    </>
  )
}