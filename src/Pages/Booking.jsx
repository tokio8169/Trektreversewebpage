import React from "react";
import Footer from "../Components/Footer";
import Websign from "../Components/Websignuppart";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Booking(){

    const bookingdone=useNavigate();


    function Bookdone(){

      bookingdone("/"); 
      Swal.fire("Booking Confirmed" , "Your Booking has done" , "success");
    };


    return(
        <div>
            <div className="booking">

                <div className="book-part">
                    <div className="books">
                        <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww" alt="" />
                         
                    </div>
                    <div className="books">
                        <img src="https://images.unsplash.com/photo-1606046604972-77cc76aee944?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                         
                    </div>
                    <div className="books">
                        <img src="https://images.unsplash.com/photo-1535827841776-24afc1e255ac?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                         
                    </div>
                </div>

                <div className="booking-details">
                    <h2> Hotel Booking</h2>
                    <p> Experince someting new every moment</p>

                    <form action="">

                      <label className="inputs" htmlFor="">Name</label>
                      <input type="text" name="text" placeholder="Enter Name"  />

                      <label className="inputs" htmlFor="">Email*</label>
                      <input type="email" name="email" placeholder="Enter your email"/>
                      
                      <label className="book-label" htmlFor="">Room type</label>
                      <select name="" id=""> Room Type
                        <option value="">Please Select</option>
                        <option value="">Standard Room </option>
                        <option value="">Family Room</option>
                        <option value="">Private Room</option>
                        <option value="">Ac /Non-Ac Room </option>
                      </select>

                      <label className="guest" htmlFor="">Number of Guests*</label>
                      <input type="number"  placeholder="e.g., 5"/>

                      <label  className="arrivaltime" htmlFor="">Arrival Date & Time*</label>
                      <input type="date" />
                    
                      <p className="pickup">Free Pickup?* <input type="checkbox"  />Yes Please! - pick me up on arrival <input type="checkbox" />No Thanks - I'll make my own way there</p>

                       <button className="bookbtn" onClick={Bookdone}>Submit</button>
                


                    </form>
                </div>
            </div>
            
            <Websign/>
            <Footer/>
        </div>
    )
}

export default Booking;


