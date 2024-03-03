import React from "react";
import { useNavigate } from "react-router-dom";


function LoginTrips(){

    const loginnav=useNavigate();

    const Registernav=useNavigate();

    function gotoregister(){
        Registernav("/login");
    }


    function gotologin(){
        loginnav("/");
    }
    return(
        <div>
                <div>
             
<div className="logins-img">

<img src="https://images.unsplash.com/photo-1514831312442-79e3d26b1898?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU4fGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D" alt="" />

<div className="logins-form">

<div className="forms-part">
   
       <h2>Login Here </h2>
       <p>Welcome back!</p>
     
       <input type="email"  placeholder="Enter Your Email"/>
      
       <input type="password" placeholder="Password" />
       <p><a className="forget-pass" href="#" >Forget Password? </a> </p>
        
       <button onClick={gotologin} className="btn"> Login</button>   
        
        <p className="register"> Not registered yet? <a className="register-link" onClick={gotoregister} href="">Register</a></p>

</div> 

<div className="bordersline"></div>

<div className="loginwithgoogle">
    <p>Or Login with Email</p>
    <p  className="google"> <a  href="https://www.google.com" > Login with Google</a> </p>

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