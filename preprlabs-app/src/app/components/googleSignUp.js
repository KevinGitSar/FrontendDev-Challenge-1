
"use client"; // This is a client componentrequire('dotenv').config();
import React, { useState, useEffect } from 'react';
import useFetch from '../../hooks/useFetch';

export default function GoogleSignUp() {
    const { handleGoogle, loading, error } = useFetch(
        "http://localhost:3500/googleRegister"
    );
      
    useEffect(()=>{
        if(window.google){
            google.accounts.id.initialize({
                client_id: '973079416865-lp4jidpfmo02gbnr7d998qu0c3f66vri.apps.googleusercontent.com',
                callback: handleGoogle,
            });

            google.accounts.id.renderButton(document.getElementById("signUpDiv"), {
                // type: "standard",
                theme: "filled_black",
                // size: "small",
                text: "signup_with",
                shape: "pill",
            });
        }
    },[handleGoogle]);

    return(
        <>
            <script src="https://accounts.google.com/gsi/client" async defer></script>
            {error && alert(error)}
            {loading ? <div>Loading....</div> : <div id="signUpDiv" className='w-1/2 mx-auto'></div>}
            
        </>
    );
}