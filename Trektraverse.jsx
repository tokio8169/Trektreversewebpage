import React from "react";

// import { BrowserRouter as  Router, Routes , Route , Link } from "react-router-dom";
// import { BrowserRouter} from "react-router-dom";
import Mainapp from "../src/Mainapp"
import { BrowserRouter as  Router, Routes , Route , Link  , BrowserRouter} from "react-router-dom";
import About from "./Pages/About";
import Logintrip from "./Pages/Logintrip";
import NewTrip from "./Pages/Newtrip";
import LoginTrips from "./Pages/Logintrips";



function Trektraverse(){



    return(
        <div>

            <BrowserRouter>


                   
            <div className="main-header">
                
             <img  src="trektraverse.png" alt="" />
            
                <nav className="nav">
                    <ul>
                        <li></li>
                        <li><a  href="#"><Link  className="nav1" to="/">Home</Link></a></li>
                        <li><a  href="#"><Link className="nav2" to="/about">About</Link></a></li>
                        <li><a className="nav2" href="#">Explore</a></li> 
                        <li><a className="nav3" href="#">Deals</a></li>
                        <li><a className="nav4" href="#">Contact</a></li>
                        <li><a className="nav4" href="#"><Link to="/newtrip"></Link></a></li>
                         <li><a  href="#"><Link className="nav5" to="/login">sign up</Link></a></li>
                         <li><a  href="#"><Link className="nav6" to="/logins">sign in</Link></a></li>
                         
                    </ul>
                  
                
                </nav>
                
            </div>
           
            <div className="sliding-part"> 
               <div className="line">
                <h2> 50% OFF On First Travel Package And Get Some More Exciting  Offers</h2>
                
               </div>
            
            </div>





            <Routes>
                <Route path="/" element Component={Mainapp}/> 
                <Route path="/about" element Component={About} />
                <Route path="/login" element Component={Logintrip} />
                <Route  path="/newtrip" element Component={NewTrip} />
                <Route path="/logins" element Component={LoginTrips} />

            </Routes>
            </BrowserRouter>

        
        </div>
    )
}
export default Trektraverse;