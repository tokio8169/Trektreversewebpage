import React, { useState } from "react";
import Footer from "../Components/Footer";

function NewTrip(){

    const [person , setPerson]=useState(0);


    function decrement(){
        setPerson(person -1 );
    }

    function increment(){
        setPerson(person +1);
    }


    return(
        <div>

            <div className="newtrip-form">
                <h2>Plan your trip</h2>

                <div className="destination">
                <p>Where do you want to go?</p>
                <input className="input-text" type="text" placeholder="Select a city"  />
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
                    <button className="trip-btn">Search Plan</button>
                    <p>By clicking Create New Trip, you agree to our <a href="#">Terms and Conditions </a>and <a href="#"> Privacy Policy.</a></p>
                </div>







            </div>

            <Footer/>

        </div>
    )
};

export default NewTrip;
