


// AI tourist part  here


import React from "react";
import  ReactDOM  from "react-dom";
// import MainApp from "./Mainapp";
import Trektraverse from "./Trektraverse";


ReactDOM.render(<div>

{/* <MainApp/> */}

<Trektraverse/>
</div> , document.getElementById("root"));



//Universaly imported file

// import React from "react";
// import ReactDOM from "react-dom";


// import React from "react";
// import ReactDOM from "react-dom";
// import Heading from "./Heading";


// ReactDOM.render(
// <div>
// <h1> Hello React</h1>
// <p> In React Js you have to add div to write multiple lines </p>
// </div>
// ,document.getElementById("root"));


//Task 1 : create the list 


// ReactDOM.render(<div>

// <h1> Favourite Programming</h1>
// <ul>
//   <li>Java</li>
//   <li>Python</li>
//   <li>Javascript</li>
// </ul>
// </div> , document.getElementById("root"));



// const name="Denver";

// // const num=12;

// const num=Math.floor(Math.random()*10);

// const fname="denver";
// const lname="moss";


// ReactDOM.render(
// <div> 
// <h1> React Course start from here</h1> 

// <h3>Welcome to the course {name}</h3>
// <h3>Welcome to th React course {fname +" " + lname} you will learn react js over here</h3>

// <p> Your lucky number is {num}</p>

// </div>, document.getElementById("root"));


//Task 2 copyright and create by 


// const name="Denver";

// // const year=2024;

// const date=new Date();
// const currentdate=date.getFullYear();
// console.log(currentdate);

// ReactDOM.render(<div className="main-page"> 

//   <h1 contentEditable="false">Welcome React js page</h1>
//   <p className="name"> Create by {name}</p>
//   <p className="year"> copyright year {currentdate}</p>


// </div> 

// , document.getElementById("root"));


// Inline styling part 

// const name="Denver";

// // const year=2024;

// const date=new Date();
// const currentdate=date.getFullYear();
// console.log(currentdate);



// ReactDOM.render(<div className="main-page"> 

//   <h1 contentEditable="false">Welcome React js page</h1>
  

// <div className="img">

//   <img  className="img1" src="https://images.unsplash.com/photo-1706017261847-a1a40f038d30?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
//   <img  className="img2" src="https://images.unsplash.com/photo-1706544132533-c2828a971fd0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
//   <img  className="img3" src="https://images.unsplash.com/photo-1682687981974-c5ef2111640c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
//   <img  className="img4" src="https://plus.unsplash.com/premium_photo-1701187887029-907bed510db6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
 
//   <img  className="img3" src="https://images.unsplash.com/photo-1682687981974-c5ef2111640c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
//   <img  className="img4" src="https://plus.unsplash.com/premium_photo-1701187887029-907bed510db6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
 
 
//    </div>

//   <div className="bottom">
//   <p className="name"> Create by {name}</p>
//   <p className="year"> @ copyright year {currentdate}</p>

//   </div>

// </div> 


// ,document.getElementById("root"));



// const name="Denver";

// const date=new Date();
// const currenttime=date.getFullYear();

// console.log(currenttime);


//inline style 

// const head={
//   backgroundColor:"#353535",
//   color:"white",
//   textAlign:"center",
//   padding:"20px",

// }


// const fname={ 
//   color:"darkred",
//   fontSize:"24px",
//   fontWeight:"700",
//   margin:"15px",
//   marginTop:"50px",
 
// }

// const list={
//   fontSize:"23px",
//   margin:"40px",
//   color:"blue",


// }
// list.color="red";      //color can be change from here

// const creator={
//   position: "absolute",
//   left: "30%",
//   bottom: "2%", 
//   color:"blue",
//   fontSize:"24px",
//   fontWeight:"700",

// }
// const copyrights={
//   position: "absolute",
//   left: "60%",
//   bottom: "2%", 
//   color:"blue",
//   fontSize:"24px",
//   fontWeight:"700",

// }


// ReactDOM.render(<div className="main-part">

// <h1 style={head}> Inline styling Practice</h1>

// <h4 style={fname}>Hello This is {name}</h4>
// <ul style={list}>
//   <li>Foods</li>
//   <li>Shops</li>
//   <li>Malls</li>

// </ul>

// <p style={creator}>Created by {name}</p>
// <p style={copyrights}> @copyright {currenttime} </p>

// </div> , document.getElementById("root"));




// Task 3 

// const time=new Date(2024 , 1, 1, 11);
// const time=new Date();
// const currenttime=time.getHours();


// console.log(currenttime);

// let greeting;

// const customstyle={
//   color:"",
//   fontSize:"26px",
//   margin:"15px",

// }

// if(currenttime < 12){
//   greeting="Good Morining";
//   customstyle.color="red";

// }else if(currenttime < 15){
//   greeting="Good Afternoon";
//   customstyle.color="blue";

// }else if(currenttime < 18){
//   greeting="Good Evening";
//   customstyle.color="yellow";

// }else{
//   greeting="Good Night";
//   customstyle.color="green";
// }

// ReactDOM.render(<div>

//   <h1 className="mainhead" >Welcome React js page</h1>


//   <h3 style={customstyle}>{greeting} </h3>

// </div> , document.getElementById("root"));




//React Component Part start from here ... IMP part //

// import React from "react";
// import ReactDOM from "react-dom";

// These are already imported in Mainapp part

// import Heading from "./Heading";
// import Footer from "./Footer";
// import Headerpart from "./Headerpart";
// import Seaction from "./Seactionpart";
// import Midpart  from "./Seactionpart";
// import visitlist from "./Visitlist";
// import Details from "./Details";
// import Trendingdestination from "./Seactionpart";
// import Websign from "./Websignuppart";
// import MainApp from "./Mainapp";
// import Starrating from "./Starrating";
// import Clock from "./Clock";

// Keepar app part 


// import Mainpart from "./Mainpart";
// import KeeperApp from "./KeeperApp/Kepper";
// import Mainapart from "./KeeperApp/Mainpart";

//Notepad new Keepar app

// import Notepad from "./Notepadformhook/Notepad";
// import MainPart from "./Notepadformhook/Mainpartnote";


// ReactDOM.render(<div> 


{/* 
<MainPart/> */}


{/* Keeper app part */}
{/* <Mainapart/> */}



{/* <Clock/> */}
{/* <Starrating/> */}
{/* <MainApp/> */}
{/* <Trendingdestination 

/> */}

{/* <Websign/> */}

{/* <Starrating/> */}




{/* you can declare here or create new mainapp import over there all */}
{/* <Heading/>
<Headerpart/>
<Midpart
img={visitlist[0].img}
name={visitlist[0].name}
para={visitlist[0].para}
price={visitlist[0].price}
visit={visitlist[0].visit}


/> */}


{/* <Footer/> */}

{/* <Seaction 

img="https://images.unsplash.com/photo-1706186839147-0d708602587b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEthc2hpJTIwdGVtcGxlfGVufDB8fDB8fHww"
name="Kashi Ghat , Varanshi"
para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, minima!"
price="Price: 65000rs"
link="Visit Here"
/> */}




// </div> , document.getElementById("root"));








// // AI tourist part  here


// import React from "react";
// import  ReactDOM  from "react-dom";
// // import MainApp from "./Mainapp";
// import Trektraverse from "./Trektraverse";


// ReactDOM.render(<div>

// {/* <MainApp/> */}

// <Trektraverse/>
// </div> , document.getElementById("root"));


