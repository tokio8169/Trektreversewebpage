import React from "react";
import Footer from "../Components/Footer";
import Starrating from "../Components/Starrating";
import Websign from "../Components/Websignuppart"
import { useNavigate } from "react-router-dom";


function About(){

    const homenavigate=useNavigate();

    function GotoHome(){
        homenavigate("/");
    }
    return(
        <div>
     <div className="about-part">

           <h1>TRAVEL BETTER WITH INDIA'S #1 TRAVEL AGENT NETWORK TREKTREVERSE</h1>       
<img  className="img" src="https://images.unsplash.com/photo-1708974474178-ad6d33b40709?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
  <button className="gohomebtn" onClick={GotoHome}>Go To Home</button>       



        
  <p className="abouth1"> <span>About Us</span></p>

<h2>Trektreverse Trip Planner Pvt. Ltd. </h2>

         <div className="about-us">

           <div className="alignpart1">
            <p className="history1">
              Trektreverse is India's biggest online transport ticketing stage that has changed transport travel in 
              the nation by conveying straight forwardness and comfort to a great many Indians who travel utilizing transport.
            </p>
            <img src="https://plus.unsplash.com/premium_photo-1661422030303-f272f90ed5c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fGFldTZyTC1qNmV3fHxlbnwwfHx8fHw%3D" alt="" />
            </div>

           <div className="alignpart2">
           <img src="https://plus.unsplash.com/premium_photo-1705091981450-7ba139c62a21?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8YWV1NnJMLWo2ZXd8fGVufDB8fHx8fA%3D%3D" alt="" />
            <p className="history2">
            Established in 2024,  Trektreverse is a piece of India's driving on the web travel organization XYZ Limited. By giving 
            the most stretched-out decision, predominant client benefit, least costs, and unmatched advantages, 
            Trektreverse has served more than 50 thousands clients.
            </p>

         </div>

         </div>

         <div className="aboutlist">
           
           <div className="textlist">
            <h3>Comapany philosophy:</h3>
            <p>Our mission is to be the leading and most trustworthy travel management company that sets the standard
                 for professionalism, reliability and transparency to its customers.</p>

           </div>

           <div className="textlist">
            <h3>Our Strengths:</h3>
            <ul>
                <li>We have varied experience with global networking travel management companies</li>
                 <li>Broad expertise in the local travel market</li>
                 <li>Client-first approach to business</li>
            </ul>

           </div>

           <div className="textlist">
            <h3>Turn around time experts:</h3>
            <p>Our excellent rapport of over two decades with the Airlines, Hotels,
                 Car Rentals, Visa Providers has given us the confidence to do the best in times of crisis or emergencies and won us the trust of our clients. Robust decision making
                 process owing to us being a single owner agency enables us to “Focus on exceeding service expectation”.</p>
                 
           </div>

         </div>


     </div>

{/* 
     <Starrating/> */}
     <Websign/>
     <Footer/>
        </div>
    )
};
export default About;
