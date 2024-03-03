
import React from "react";

import Heading from "./Components/Heading";

import Headerpart from "./Components/Headerpart";

import Details from "./Components/Details";

import visitlist from "./Visitlist";

import Midpart from "./Components/Seactionpart";

import Trendingdestination from "./Components/Seactionpart";

import Footer from "./Components/Footer";

import Websign from "./Components/Websignuppart";

import Bottominfo from "./Components/Bottominfo";
import Adventurecard from "./Components/Adventure";

import Starrating from "./Components/Starrating";

import Clock from "./Components/Clock";
import About from "./Pages/About";

//Map part 


function Webmap(Detailmap){

    return (
<Details 

head={Detailmap.head}
parahead={Detailmap.parahead}
parasub={Detailmap.parasub}
imgsrc={Detailmap.imgsrc}

/>
    )

}


function MainApp(){

    return (
        <div>
            {/* <Clock/> */}
            {/* <About/> */}
            {/* <Heading/> */}
            <Headerpart/>

        

{/* Map part calling for more shoter way */}

{visitlist.map(Webmap)}

<Trendingdestination/>
<Bottominfo/>
<Adventurecard/>

<Starrating/>
<Websign/>


<Footer/>


{/* visitlist direct calling */}

{/* <Details 

parahead={visitlist[1].parahead}
parasub={visitlist[1].parasub}
imgsrc={visitlist[1].imgsrc}

/> */}

     {/* <Midpart 
           
            img={visitlist[3].img}
            name={visitlist[3].name}
            para={visitlist[3].para}
            price={visitlist[3].price}
            visit={visitlist[3].visit}

           /> */}


        </div>
    )
};

export default MainApp;

