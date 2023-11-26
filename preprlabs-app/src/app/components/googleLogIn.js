require('dotenv').config();
import React, { useEffect } from 'react';
import useFetch from '../../hooks/useFetch';


export default function GoogleLogIn() {
    const { handleGoogle, loading, error } = useFetch(
        "http://localhost:3500/googleAuth"
    );

    useEffect(()=>{
        if(window.google){
            google.accounts.id.initialize({
                client_id: '973079416865-lp4jidpfmo02gbnr7d998qu0c3f66vri.apps.googleusercontent.com',
                callback: handleGoogle,
            });
         
            google.accounts.id.renderButton(document.getElementById("loginDiv"), {
                // type: "standard",
                theme: "filled_black",
                // size: "small",
                text: "continue_with",
                shape: "pill",
            });
        }
    },[handleGoogle]);

    return(
        <>
            {error && <p className='text-red'>{error}</p>}
            {loading ? <div>Loading....</div> : <div id="loginDiv"></div>}
        </>
    );
}