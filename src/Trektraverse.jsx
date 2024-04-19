import React from "react";

// import { BrowserRouter as  Router, Routes , Route , Link } from "react-router-dom";
// import { BrowserRouter} from "react-router-dom";
import Mainapp from "../src/Mainapp"
import { BrowserRouter as  Router, Routes , Route , Link  , BrowserRouter} from "react-router-dom";
import About from "./Pages/About";
import Logintrip from "./Pages/Logintrip";
import NewTrip from "./Pages/Newtrip";
import LoginTrips from "./Pages/Logintrips";
import TripPlace from "./Pages/Tripplace";
import Mumbai from "./Dropdownpart/Mumbai";
import MapLocation from "./Pages/Location";
import Booking from "./Pages/Booking";
import { useEffect, useState } from "react";

import  Axios from "axios";

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';









function Trektraverse(){


    const [data, setData]=useState("");

    const getData=async ()=>{
        const response=await Axios.get("http://localhost:8000");
        setData(response.data);
    };


    useEffect(()=>{

        getData();
    }, []);



    const notify =()=>{
        toast.info("Ensure that you have logged in");
    }


//    const notify =()=> toast.info('🦄 Wow so easy!', {
//         position: "top-center",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
       
//         });


    return(
        <div>

            <BrowserRouter>


                   
            <div className="main-header">
                
             <img  src="trektraverse.png" alt="" />
            
                 <h1>{data}</h1>
                <nav className="nav">
                    <ul>
                         
                        <li><a  href="#"><Link  className="nav1" to="/">Home</Link></a></li>
                        <li><a  href="#"><Link className="nav2" to="/about">About</Link></a></li>
                        <li><a className="nav2" href="#">Explore</a></li> 
                        <li><a className="nav3" href="#">Deals</a></li>
                        <li><a className="nav4" href="#">Contact</a></li>
                        <li><a className="nav4" href="#"><Link to="/newtrip"></Link></a></li>
                         <li><a  href="#"><Link className="nav5" to="/login" >sign up</Link></a></li>
                         <li> <a  href="#"><Link className="nav6" to="/logins" onClick={notify} >Sign in</Link></a></li>
                         <li><a  href="#"><Link to="/tripsearch"></Link></a></li>
                         <li><a  href="#"><Link to="/mumbai"></Link></a></li>
                         
                         <ToastContainer
                         position="top-center"
                         theme="light"
                         />
                         
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
                <Route path="/newtrip" element Component={NewTrip} />
                <Route path="/logins" element Component={LoginTrips} />
                <Route path="/tripsearch" element Component={TripPlace} />
                <Route path="/mumbai" element Component={Mumbai} />
                <Route path="/gotolocation" element Component={MapLocation} />
                <Route path="/booking" element Component={Booking} />

            </Routes>
            </BrowserRouter>

        
        </div>
    )
}
export default Trektraverse;