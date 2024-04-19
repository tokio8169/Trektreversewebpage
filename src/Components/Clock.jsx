
// // import React from "react";
// // import { useState } from "react";



// // function Clock(){

// //     const days =new Date().toLocaleDateString()
// //     const [currentday  , setcurrentDays]=useState(days);

// //     const time =new Date().toLocaleTimeString();
// //     const [currentTime  , setcurrentTime]=useState(time);


// //     function updateTime(){

// //         const time=new Date().toLocaleTimeString();
// //         setcurrentTime(time);


// //         const days =new Date().toLocaleDateString()
// //        setcurrentDays(days);
// //     }

// // setInterval(updateTime , 1000);



// //     return(
// //         <div>
// //             <h1>{currentday} {currentTime}</h1>
// //         </div>
// //     )
// // }

// // export default Clock;




// //  Reminder clock

// import React from "react";

// import  { useEffect ,  useState } from "react";


// function Clock(){




//     const days=new Date().getDate();
//      const [currentdays , setcurrentDays]=useState(days);


//      const hours=new Date().getHours();
//      const [currenthours , setcurrentHours]=useState(hours);


//      const mins=new Date().getMinutes();
//      const [currentmins , setcurrentMins]=useState(mins);


//      const secs=new Date().getSeconds();
//      const [currentsecs , setcurrentSecs]=useState(secs);


//      function UpdateDate(){

//         const days=new Date().toLocaleDateString();
//         setcurrentDays(days);

//         const hours=new Date().getHours();
//         setcurrentHours(hours);


//         const mins=new Date().getMinutes();
//         setcurrentMins(mins);
   
   
//         const secs=new Date().getSeconds();
//         setcurrentSecs(secs);

        
//      };

//      setInterval(UpdateDate ,1000);
    


//     return(
//         <div>

// <div className="timer">
//                 <div className="countdowns">
//                     <div className="countvalue">
//                         <span>{days}</span>
//                         <p className="big-text">Days</p>
//                     </div>

//                      <div className="countvalue">
                      
//                         <span>{hours}</span>
//                         <p className="big-text">Hours</p>
//                     </div>
  
//                     <div className="countvalue">
                      
//                         <span>{mins}</span>
//                         <p className="big-text">mins</p>
//                     </div>

//                     <div className="countvalue">
                       
//                         <span>{secs}</span>
//                         <p className="big-text">secs</p>
//                     </div> 
//                 </div>
//             </div>

//         </div>
//     )
// }
// export default Clock;





// This is part of notepad program only use overthere

import React from "react";
import { useState } from "react";
function Clocktime(){

const days=new Date().getDate();
const [currentdays , SetcurrentDays]=useState(days)


const hours=new Date().getHours();
const [currenthours , setcurrentHours]=useState(hours)


const mins=new Date().getMinutes();
const[currentmins , setcurrentMins]=useState(mins);

const secs=new Date().getSeconds();
const [currentsecs , setcurrentSecs]=useState(secs);



function updateTime(){

    const days=new Date().getDate();
   SetcurrentDays(days);


const hours=new Date().getHours();
setcurrentHours(hours);


const mins=new Date().getMinutes();
setcurrentMins(mins);

const secs=new Date().getSeconds();
setcurrentSecs(secs);

    

}

setInterval(updateTime , 1000);


    return(
        <div>

            <div className="Timer">
                <div className="counttime">
                    <span>{days}</span>
                    <p className="big-text">days</p>
                </div>

                <div className="counttime">
                    <span>{hours}</span>
                    <p className="big-text">hours</p>
                </div>
                <div className="counttime">
                    <span>{mins}</span>
                    <p className="big-text">mins</p>
                </div>

                <div className="counttime">
                    <span>{secs}</span>
                    <p className="big-text">secs</p>
                </div>

            </div>


        </div>
    )
}
export default Clocktime;