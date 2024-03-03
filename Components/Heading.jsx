
import React from "react";
// import {BrowserRouter as Router , Routes , Route , Link, BrowserRouter} from 'react-router-dom'


function Heading(){

    return(
        <div>

              
                   
            <div className="main-header">
                
             <img src="trektraverse.png" alt="" />
            
                <nav className="nav">
                    <ul>
                        <li></li>
                        <li><a className="nav1" href="#">Destination</a></li>
                        <li><a className="nav2" href="#">Adventures</a></li>
                        <li><a className="nav2" href="#">Explore</a></li> 
                        <li><a className="nav3" href="#">Deals</a></li>
                        <li><a className="nav4" href="#">Contact</a></li>

                        <select className="lang" name="" id="langauge">
                            
                            <option value="">English</option>
                            <option value="">Hindi</option>
                            <option value="">Marathi</option>
                          
                        </select>
                    </ul>
                  
                
                </nav>
                
            </div>
           
            <div className="sliding-part"> 
               <div className="line">
                <h2> 50% OFF On First Travel Package And Get Some More Exciting  Offers</h2>
                
               </div>
            
            </div>
           
        </div>
    )
};

export default Heading;