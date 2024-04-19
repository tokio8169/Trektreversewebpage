
import React from "react";

import { useState } from "react";

import { useNavigate } from "react-router-dom";


function Headerpart(){


    const days=new Date().getDate();
    const [currentdays , setcurrentDays]=useState(days);


    const hours=new Date().getHours();
    const [currenthours , setcurrentHours]=useState(hours);


    const mins=new Date().getMinutes();
    const [currentmins , setcurrentMins]=useState(mins);


    const secs=new Date().getSeconds();
    const [currentsecs , setcurrentSecs]=useState(secs);


    function UpdateDate(){

       const days=new Date().toLocaleDateString();
       setcurrentDays(days);

       const hours=new Date().getHours();
       setcurrentHours(hours);


       const mins=new Date().getMinutes();
       setcurrentMins(mins);
  
  
       const secs=new Date().getSeconds();
       setcurrentSecs(secs);

       
    };

    setInterval(UpdateDate ,1000);

// Navigation part

  
   const newtripnav=useNavigate();


    function gonewtrip(){
        newtripnav("/newtrip");
    }
   


    return(
        <div>

{/* <div className="timer">
           
            </div> */}
        <div className="img-content">
{/*             
<img  className="img" src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/> */}

<video className="img" controls autoPlay loop muted src="nature.mp4"></video>



{/* <h1 className="head-name">Deals of The Week</h1> */}
{/* <p className="para-name"> From TrekTraverse with Love ❤️ Up to 50% off on your most beloved adventures!</p>     */}


<div className="reminder">
    <p> Do Your Plan Before Deals Ends :</p>
</div>
                

<div className="countdowns">

 
        
                    <div className="countvalue">
                        <span>{days}</span>
                        <p className="big-text">Days</p>
                    </div>

                     <div className="countvalue">
                      
                        <span>{hours}</span>
                        <p className="big-text">Hours</p>
                    </div>
  
                    <div className="countvalue">
                      
                        <span>{mins}</span>
                        <p className="big-text">mins</p>
                    </div>

                    <div className="countvalue">
                       
                        <span>{secs}</span>
                        <p className="big-text">secs</p>
                    </div> 
                </div>


</div>



{/* <div className="reminder">
<p>Deals ends In</p>

<span>{currentday}</span>
<span>{currenthrs}</span>
<span>{currentmins}</span>
<span>{currentsecs}</span>

</div>  */}

{/* <div className="input-search">
    
    <input className="destination" type="text" name="" id=""  placeholder="Search Your Destination"/>
     
    <input className="date" type="text" name="Date"   id="" placeholder="Select Departure Date"/> 

    <button  onClick={gonewtrip}  type="submit"> Search</button>
</div> */}

<div className="trip-planner">

<h1>Trektreverse Trip Planner</h1>
<h2>Your Next Journey, Optimized</h2>
<p>Build, personalize, and optimize your itineraries with our free AI trip planner.
     Designed for vacations, workations, and everyday adventures.</p>

<button  onClick={gonewtrip}>Trip Plan</button>
</div>

<div className="disscount">
<p> From TrekTraverse with Love ❤️ Up to 50% off on your most beloved adventures!</p>    

</div>

</div>


    )
};

export default Headerpart;
