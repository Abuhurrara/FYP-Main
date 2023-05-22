import React from "react";
import image1 from "../images/z-pattern-image.png";
import image2 from "../images/z-pattern-image2.png";

import "../css/z-pattern.css";
const ZPattern=()=>{
return (<>
    
        <span className="z-pattern-content-1">
            <img className="z-pattern-image" src={image1}/>
            <span className="z-pattern-text">
                <h5>About us</h5>
                <h1>Your Support is Really</h1>
                <h1>Powerful.​</h1>
                <h6 className="first-h6">The secret to happiness lies in helping others. Never</h6>
                <h6>underestimate the difference YOU can make in the</h6>
                <h6>lives of the poor, the abused and the helpless.</h6>
                
                <button className="read-more-button">Read more</button>
            </span>
        </span>

        <span className="z-pattern-content-2">
        <span className="z-pattern-text">
                <h5>Welcome to charity</h5>
                <h1>Let Us Come Together</h1>
                <h1>To Make A Difference​</h1>
                <h6 className="first-h6">The secret to happiness lies in helping others. Never</h6>
                <h6>underestimate the difference YOU can make in the</h6>
                <h6>lives of the poor, the abused and the helpless.</h6>
                <div className="mission-vision">
                <span className="our-mission">
                   <h5> Our Mission</h5>
                    <p>Food Waste Management - 
Reducing waste Food</p>
                </span>
                <span className="our-vision">
                <h5> Our Vision</h5>
                <p>Connecting needy hungry 
people with food donors
</p>
                </span>
                </div>
            </span>
            <img className="z-pattern-image" src={image2}/>
           
        </span>
    
</>)
}

export {ZPattern};