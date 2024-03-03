
import React from "react";



function Details(props){

    return(
        <div>

            <div className="webinfo">
            <h1>{props.head}</h1>
                <div className="webcontent">
            
                <p className="para-head">{props.parahead}</p>
                <div className="websummary">
                    <p className="parasub">{props.parasub}</p>
                    <img className="imgsrc" src={props.imgsrc} alt="" />
                </div>

                </div>
               
            </div>
        </div>
    )
}

export default Details;

