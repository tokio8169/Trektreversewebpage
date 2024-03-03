import React from "react";
import { useNavigate } from "react-router-dom";


function Logintrip(){

     const Loginnav=useNavigate();

     
    const loginnav=useNavigate();

    function Tologin(){
        Loginnav("/logins");
    }

    function gotologin(){
        loginnav("/");
    }
    return(
        <div>

         
           
             
             <div className="login-img">

             <img src="https://images.unsplash.com/photo-1514831312442-79e3d26b1898?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU4fGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D" alt="" />
             
             <div className="login-form">
          
             <div className="form-part">
                
                    <h2>Register Here </h2>
                    <input type="text"  placeholder="Enter Name "/>
                    <input type="email"  placeholder="Enter Your Email"/>
                    <input type="text" placeholder="Password" />
                    <input type="password" placeholder=" Confirm Password" />
                    <button onClick={gotologin} className="btn"> Register</button>
                     
                    <p className="register"> Already a member <a className="login-link" onClick={Tologin} href="">Login</a></p>

            
             </div> 


<div className="borderslines"></div>

<div className="loginwithgoogles">
    <p>Or Login with Email</p>
    <p  className="google"> <a  href="https://www.google.com" > Login with Google</a> </p>

</div>
             </div>

            </div>
           

        </div>
    )
};
export default Logintrip; 