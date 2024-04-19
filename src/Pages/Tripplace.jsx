import React from "react";

import { useNavigate } from "react-router-dom";

import MapLocation from "./Location";



function TripPlace(){


// const gomainpage=useNavigate();

// function gotohome(){
//     gomainpage("/");

// }



    return(
        <div>

            {/* <h1 style={place}> Sorry! This page is under development !  </h1> */}
          
            {/* <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Goa+(trip)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps systems</a></iframe>
             */}
             
             <MapLocation/>

            

        </div>
    )
};

export default TripPlace;
