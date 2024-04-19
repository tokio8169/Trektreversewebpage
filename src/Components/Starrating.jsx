import React, { useState } from "react";

// import {Fastar} from "react-icon/Fa";





function Starrating(){

    const [rating , setRating]=useState(0);

    const [hover , setHover]=useState(0);

    


    return(
        <div>

            <div className="rating">
             

            <div className="reviews">
            <h2>Reviews Of Trektraverse Services </h2>
                </div>

            <div className="starrate">
                  
                <p className="name">Excellent
              
                {[...Array(5)].map((star ,index) =>{
                    index +=1;
                    return(
                        <button type="button" 
                        key={index}
                        className={index <= (hover || rating) ? "on" : "off"}
                        onClick={() => setHover(index)}
                        onSubmit={()=> setHover(rating)} 
                         
                         
                         ><span className="star" > &#9733;</span> </button>

                        
                    )
                })}

</p>
<p className="para">Rated 4.5 / 5 based on 2,319 reviews on </p> 
</div>



<div className="ratepoint">
<p className="para">Showing our 5 star reviews</p>

<div className="reviews">
<div className="reviewpoint">

{[...Array(5)].map((star ,index) =>{
                    index +=1;
                    return(
                        <button type="button" 
                        key={index}
                        className={index <= (hover || rating) ? "on" : "off"}
                        onClick={() => setHover(index)}
                        onSubmit={()=> setHover(rating)} 
                         
                         
                         ><span className="star" > &#9733;</span> </button>

                        
                    )
                })}


<p className="person-name">Avinash</p>
<p className="para-head">I been looking at this tour for…</p>
<p>sometime. Yesterday, I took the leap and booked. We are so excited to be seeing The Rockies. It was really easy to book</p>


</div>



<div className="reviewpoint">

{[...Array(5)].map((star ,index) =>{
                    index +=1;
                    return(
                        <button type="button" 
                        key={index}
                        className={index <= (hover || rating) ? "on" : "off"}
                        onClick={() => setHover(index)}
                        onSubmit={()=> setHover(rating)} 
                         
                         
                         ><span className="star" > &#9733;</span> </button>

                        
                    )
                })}


<p className="person-name">Rohan</p>
<p className="para-head">It was easy to find tours in Amazon and…</p>
<p>It was easy to find tours in Amazon and select the tour I was looking for. It took a few minutes to book the tour. Great service.</p>


</div>


<div className="reviewpoint">

{[...Array(5)].map((star ,index) =>{
                    index +=1;
                    return(
                        <button type="button" 
                        key={index}
                        className={index <= (hover || rating) ? "on" : "off"}
                        onClick={() => setHover(index)}
                        onSubmit={()=> setHover(rating)} 
                         
                         
                         ><span className="star" > &#9733;</span> </button>

                        
                    )
                })}


<p className="person-name">Yash</p>
<p className="para-head">GOOD CUSTOMER SERVICE</p>
<p>GOOD CUSTOMER SERVICE , QUICK RESPONSE, ANSWERED QUERIES</p>

</div>


<div className="reviewpoint">

{[...Array(5)].map((star ,index) =>{
                    index +=1;
                    return(
                        <button type="button" 
                        key={index}
                        className={index <= (hover || rating) ? "on" : "off"}
                        onClick={() => setHover(index)}
                        onSubmit={()=> setHover(rating)} 
                         
                         
                         ><span className="star" > &#9733;</span> </button>

                        
                    )
                })}


<p className="person-name">Denver</p>
<p className="para-head">Booking our tour for Kashi …</p>
<p>Booking our tour trip to Kashi was extremely easy. There were a variety of tours and I had some very specific places I wanted to see and The  Ghat Tour was the best one to choose.</p>


</div>



<div className="reviewpoint">

{[...Array(5)].map((star ,index) =>{
                    index +=1;
                    return(
                        <button type="button" 
                        key={index}
                        className={index <= (hover || rating) ? "on" : "off"}
                        onClick={() => setHover(index)}
                        onSubmit={()=> setHover(rating)} 
                         
                         
                         ><span className="star" > &#9733;</span> </button>

                        
                    )
                })}


<p className="person-name">Berline</p>
<p className="para-head">Best in the business</p>
<p>Best in the business! 6 bookings and counting and never disappointed. Actual tour operators have let me down, but Tour Radar always stepped in to resolve any situation properly.</p>

</div>


<div className="reviewpoint">

{[...Array(5)].map((star ,index) =>{
                    index +=1;
                    return(
                        <button type="button" 
                        key={index}
                        className={index <= (hover || rating) ? "on" : "off"}
                        onClick={() => setHover(index)}
                        onSubmit={()=> setHover(rating)} 
                         
                         
                         ><span className="star" > &#9733;</span> </button>

                        
                    )
                })}


<p className="person-name">Rohni</p>

<p className="para-head">Very easy booking process</p>
<p>Very easy booking process, with quick responses to queries raised about tour itineraries.</p>
</div>



<div className="reviewpoint">

{[...Array(5)].map((star ,index) =>{
                    index +=1;
                    return(
                        <button type="button" 
                        key={index}
                        className={index <= (hover || rating) ? "on" : "off"}
                        onClick={() => setHover(index)}
                        onSubmit={()=> setHover(rating)} 
                         
                         
                         ><span className="star" > &#9733;</span> </button>

                        
                    )
                })}


<p className="person-name">Kavya</p>
<p className="para-head">Easy Search Tool</p>
<p>Very easy to book. Do a search, then apply filter, length and months. That will lower it down to an easier sort of tours to study.</p>

</div>


<div className="reviewpoint">

{[...Array(5)].map((star ,index) =>{
                    index +=1;
                    return(
                        <button type="button" 
                        key={index}
                        className={index <= (hover || rating) ? "on" : "off"}
                        onClick={() => setHover(index)}
                        onSubmit={()=> setHover(rating)} 
                         
                         
                         ><span className="star" > &#9733;</span> </button>

                        
                    )
                })}


<p className="person-name">Ramesh</p>
<p className="para-head">Regular and helpful communication</p>
<p>Extraordinarily well designed and organized. An intuitive experience. It could be a template for others.</p>

</div>


<div className="services">
   
  
    <div className="service-part">
    <h3>Peace of Mind</h3>
<p>With 24/7 customer service, flexible booking conditions and extensive insurance options,
     we are there for you when plans change. </p>

</div>

<div className="serviveimg">
<img className="service24" src="24-hours-support.png" alt="" srcset="" /> 
    
</div>

<div className="service-part">
<h3>Sustainable Travel</h3>
<p>See the world with Trektraverse. Discover how you can offset your adventure's carbon emissions
     and support the sustainable initiatives practiced by our operators worldwide.</p>
</div>

<div className="serviveimg">
<img className="service24" src="earth-day.png" alt="" srcset="" /> 
    
</div>


</div>


</div>


</div>
                
        


            </div>

            {/* <div className="starrate">

                
                
                {[...Array(5)].map((star ,index) =>{
                    index +=1;
                    return(
                        <button type="button" 
                        key={index}
                        className={index <= (hover || rating) ? "on" : "off"}
                        onClick={() => setHover(index)}
                        onSubmit={()=> setHover(rating)} 
                         
                         
                         >  <span className="star" > &#9733;</span> </button>

                        
                    )
                })}


                
            </div>  */}
{/* 
            <div className="ratingpart">

                <div className="reviews">
                    <h2>Reviews Of Trektraverse </h2>
                </div>

            </div> */}


        </div>
    )
};

export default Starrating;