import React from "react";
import { useNavigate } from "react-router-dom";

const time=new Date();

const currenttime=time.getFullYear();

console.log(currenttime);





function Footer(){

const homenavigate=useNavigate();


function gotohome(){
    homenavigate("/");
}


    return (
//         <div className="bottom">
       
// <p className="name">Created by {name}</p>

// <p className="year"> @ Copyright {currenttime} </p>
//         </div>


<div>
<div className="footerpart">
    <div className="foot">
        <img onClick={gotohome} className="bottom-logo" src="trektraverse.png" alt="trektraverse" />
       

     

        <ul>
            <li><a className="media1" href="https://www.facebook.com"><ion-icon name="logo-facebook"></ion-icon></a></li>
            <li><a className="media2" href="https://www.github.com"><ion-icon name="logo-github"></ion-icon></a></li>
            <li><a className="media3" href="https://www.twitter.com"><ion-icon name="logo-twitter"></ion-icon></a></li>
            <li><a className="media4" href="https://www.instagram.com"><ion-icon name="logo-instagram"></ion-icon></a></li>
        </ul>
       </div>

       <div className="footinfo">

        <ul className="info">
             <h2>Company</h2>
            <li>About Us</li>
            <li>Careers <a href="#">Apply Now!</a></li>

        </ul>

        <ul className="info">
             <h2>Partners</h2>
            <li>Distribution Partner Solutions</li>
            <li>Partner Log In</li>
            <li>Marketing Solutions</li>

        </ul>

        <ul className="info">
            <h2>Support</h2>
            <li>Contact Us</li>
            <li>Help Center</li>
            <li>India +91 2222 4455</li>
            <li>United States & Uk +1 833 895 6770</li>

        </ul>

        <ul className="info">
            <h2>Travel Advisors</h2>
            <li>Travel Advisors / Agents</li>
            <li>Advisor Log In</li>
            <li>Proper guidence</li>
       

        </ul>



        <ul className="info">
            <h2>Travelers</h2>
            <li>Days to Come Magazine</li>
            <li>Win an Adventure <a href="#">Enter Now!</a> </li>
            <li>After Your Booking</li>
            <li>Cancellation Policy</li>
       

        </ul>


        <ul className="info">
            <h2>Itineraries</h2>
            <li>Community Trips</li>
            <li>Find Destinations</li>
            <li>Proper guidence</li>
       

        </ul>


        <ul className="info">
          
          <li>Copyright © {currenttime} Trektraverse . All Rights Reversed</li>

        </ul>


        <ul className="policy">
          
          <li>Legal Notice</li>
          <li>Privacy Policy</li>
          <li>Cookies</li>
          <li>Terms & Conditions</li>

        </ul>


        



    
     



       </div>

</div>
</div>
    )
};

export default Footer;
