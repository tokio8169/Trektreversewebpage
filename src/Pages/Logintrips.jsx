import React from "react";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";

import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';


const clientsid="372523151956-qesonurgfl8ugubld1qiccbs1v01024r.apps.googleusercontent.com";



const head="Login here"
const para="welcome back"


function LoginTrips(){

    const loginnav=useNavigate();

    const Registernav=useNavigate();

    function gotoregister(){
        Registernav("/login");
       
    }


    function gotologin(){

        loginnav("/");
        Swal.fire("Successful Login" , " You are logged in successfully " , "success");
    }
    return(
        <div>
                <div>
             
<div className="logins-img">

<img src="https://images.unsplash.com/photo-1514831312442-79e3d26b1898?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU4fGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D" alt="" />

<div className="logins-form">

<div className="forms-part">
    <form action="">
   
       <h2>{head} </h2>
       <p>{para}</p>
     
       <input type="email" name="email" placeholder="Enter your email"/>
       <input type="password" name="password" placeholder="Password" />
       <p><a className="forget-pass" href="#" >Forget Password? </a> </p>
        
       <button onClick={gotologin}  className="btn"> Login</button>   
        
        <p className="register"> Not registered yet? <a className="register-link" onClick={gotoregister} href="">Register</a></p>
        </form>

</div> 

<div className="bordersline"></div>

<div className="loginwithgoogle">
    <p>Or Login with Email</p>
    {/* <p  className="google"> <a  href="https://www.google.com" > Login with Google</a> </p> */}


    <p  className="google"> 
    
    <GoogleOAuthProvider clientId={clientsid}>

    <GoogleLogin className="google"
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>

</GoogleOAuthProvider>
    
    
     </p>

</div>

<div className="other-options">
    <div>

    </div>
</div>


</div>

</div>


</div>

        </div>
    )
}
export default LoginTrips;