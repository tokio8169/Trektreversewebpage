import React , {useState}from "react";


function Adventurecard(){

    const [isMousehover , setIsmousehover]=useState(false);



    function Mouseovers(){
        setIsmousehover(true);
        console.log("MouseOver");

        

    }


    function Onmouseouts(){
        setIsmousehover(false);
        console.log("MouseOuts");

    }

    return(
        <div>
           
            <div className="Adventure" >
            <h2>Adventure Styles</h2>
                <div className="cardss">
                    <div className="cardtype" >
                        {/* <p className="offs1">UP TO 56% OFF</p> */}
                        <img className="imgs" src="https://cdn.tourradar.com/s3/content-pages/2195/720x406/eoR1iP.png" alt="Adventure" />
                       <p className="para1">Private</p>
                    </div>


                    <div className="cardtype" >
                        {/* <p className="offs2">UP TO 46% OFF</p> */}
                        <img className="imgs" src="https://cdn.tourradar.com/s3/content-pages/2195/720x406/3o5a8u.png" alt="Adventure" />
                        <p className="para2">Culture</p>
                    </div>

                    <div className="cardtype" >
                        {/* <p className="offs3">UP TO 40% OFF</p> */}
                        <img className="imgs" src="https://cdn.tourradar.com/s3/content-pages/2195/720x406/iOiJBq.png" alt="Adventure" />
                       <p className="para3">Explore</p>
                    </div>


                    <div className="cardtype" >
                        {/* <p className="offs4">UP TO 46% OFF</p> */}
                        <img className="imgs" src="https://cdn.tourradar.com/s3/content-pages/2195/720x406/Yu4vo4.png" alt="Adventure" />
                       <p className="para4">River Cruise</p>
                    </div>

                    <div className="cardtype" >
                        {/* <p className="offs5">UP TO 40% OFF</p> */}
                        <img className="imgs" src="https://cdn.tourradar.com/s3/content-pages/2195/720x406/052PrH.png" alt="Adventure" />
                        <p className="para5">Safari</p>
                    </div>

                    <div className="cardtype" >
                        {/* <p className="offs6">UP TO 40% OFF</p> */}
                        <img className="imgs" src="https://cdn.tourradar.com/s3/content-pages/2195/720x406/BnwuJb.png" alt="Adventure" />
                        <p className="para6">Hiking & Trekking</p>
                    </div>


                </div>


            </div>


            <div className="helpsection">
                <div className="needs">
                    <h1 className="head">Need help booking your adventure?</h1>
                    <p className="para">Our team of experienced Travel Experts have ventured to hundreds of countries around the globe and have decades of first-hand travel experiences to share. 
                        Contact us now to have all of your tour-related questions answered!</p>

                    <button className="contact" type="submit" 
                     onMouseOver={Mouseovers} 
                     onMouseOut={Onmouseouts}
                     style={{backgroundColor: isMousehover ? "black" : "blue"}}
                     >Contact us</button> 

                
                </div>

                <div className="groupimgs">
                <img className="groupimg" src="https://cdn.tourradar.com/s3/team/original/116_X7vUqJpc.jpg" alt="" />   
                </div>

              

            </div>


        </div>
    )
}

export default Adventurecard;