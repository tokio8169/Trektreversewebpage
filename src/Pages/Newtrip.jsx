import React, { useState } from "react";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";




function NewTrip(){

    const [person , setPerson]=useState(0);

    const tripnavi=useNavigate();

    function gotripplace(){
        tripnavi("/tripsearch");
    }

    function decrement(){
        setPerson(person -1 );
    }

    function increment(){
        setPerson(person +1);
    }

    //  navigate mumbai
    const mumbainavi=useNavigate();

    function gotomumbai(){
     mumbainavi("/mumbai");
    }


    return(
        <div>

            <div className="newtrip-form">
                <h2>Plan your trip</h2>

                <div className="destination">
                <p>Where do you want to go?</p>

                <select className="input-text" name="" id="">--Select State--
                <option value="">--Select State--</option>
                <option onClick={gotomumbai}  value="">Mumbai</option>
                <option value="">Goa</option>
                <option value="">Andra Pradesh</option>
                <option value="">Assam</option>
                <option value="">Arunachal Pradesh</option>
                <option value="">Bihar</option>
                <option value="">Chattisgarh</option>
                <option value="">Gujrat</option>
                <option value="">Himachal Pradesh</option>
                <option value="">Jharkhand</option>
                <option value="">Karnatka</option>
                <option value="">Kerla</option>
                <option value="">Madhya Pradesh</option>
                <option value="">Manipur</option>
                <option value="">Uttar Pradesh</option>
                <option value=""> Rajasthan</option>
                <option value="">Punjab</option>
                <option value="">Uttrakhand</option>
                <option value="">West Bengal</option>

                </select>
            
                <input className="input-date" type="date" placeholder="Select  Date" />


                </div>

                <div className="add-people">
                    <p className="person-detail">How many people are going ?</p>
                     
                </div>

                <div className="person-part">
                <p className="person-input"> {person} Person </p> 
                 <button className="decrbtn" onClick={decrement}>-</button> 
                 <button className="incrbtn" onClick={increment}>+</button>
                </div>

                <div className="visit">First time visiting ? 
                    <p> Yes<input className="radio1" type="radio" placeholder="yes"/>
                       No<input className="radio2" type="radio" placeholder="no" />
                       </p>
                </div>

                <div className="border-line"></div>

                <div className="optional">
                    <p>How much do you plan to spend on this trip?(Optional)</p><br/>
                    <p>Consider Stay + Activities + Food. Do not include flights.</p>
                     
                     <select name="" id="">Select your budget
                     <option value="">Select your budget</option>
                     <option value="">None</option>
                     <option value="">Less than 5000 INR</option>
                     <option value="">Between 5000 INR and 10000 INR</option>
                     <option value="">Between 15000 INR and 30000 INR</option>
                     <option value="">Between 35000 INR and 50000 INR</option>
                   

                     </select>
                </div>

                <div className="occasion">
                    <p>Are you traveling for a special occasion? (Optional)</p>
                    <select name="" id="">Select your occasion
                    <option value="">Select your occasion</option>
                    <option value="">None</option>
                    <option value="">Event</option>
                    <option value="">Business</option>
                    <option value="">Party</option>
                    
                    </select>

                </div>



                <div className="create-trip">
                    <button  onClick={gotripplace} className="trip-btn">Search Plan</button>
                    <p>By clicking Create New Trip, you agree to our <a href="#">Terms and Conditions </a>and <a href="#"> Privacy Policy.</a></p>
                </div>



            </div>

            <Footer/>

        </div>
    )
};

export default NewTrip;
