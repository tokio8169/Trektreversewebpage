

import React , {useState} from "react";


var Issignup=true;
var Issignup=false;



function Issignudone(){


  const [name , setName]=useState("");



  function Handlechange(event){
  setName(event.target.value);  
  console.log(event.target.value);
  console.log(event.target.placeholder);
  console.log(event.target.text);


  }


 
    if(Issignup===true){
        return <h1 className="headpart-sign">We Will Catch You Shortly </h1>
        
        
    }else {

        return(
        <div className="webhead">
         
        <h1 className="head">Never Miss a Deal!</h1> 
        <p className="para">Sign up today and be the first to know about the latest travel deals.</p>
       
        <div className="websign">
          <h2>{name}</h2>
        <input onChange={Handlechange} className="input" type="text" name=""  value={name} id="" placeholder="Enter your email" />
        <button className="signbtn" type="submit" >Sign up now</button>
        <p className="privacy">By submitting this form, I agree to the Trektraverse T&Cs and Privacy policy.</p>
    </div>

    </div>
        )

    }
}
 export default Issignudone

// var Issignup=false;
// var Issignup=true;


// function Websign(){

    


//     function Isquery(){

//       if(  Issignup ===false){
//         return  <h1 className="headpart-sign"> We Will Catch you in Shortly , Thank you!! </h1> 
//       }else {
//         return(
      
//           <div className="webhead">
          
//         <h1 className="head">Never Miss a Deal!</h1> 
//         <p className="para">Sign up today and be the first to know about the latest travel deals.</p>
       
//         <div className="websign">
//         <input className="input" type="text" name="" id="" placeholder="Enter your email" />
//         <button className="signbtn" type="submit" onClick={Isquery}>Sign up now</button>
//         <p className="privacy">By submitting this form, I agree to the Trektraverse T&Cs and Privacy policy.</p>
//     </div>

//     </div>
//         )
//     }
        
        
//     }

   
//     return (
//         <div>    

//     {/* {Issignudone()} */}

//     {Isquery()}

  
      
//             </div>
//     )
// }
// export default Websign;