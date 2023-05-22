import React from "react";
import "../css/hero.css";
import { Link } from "react-router-dom";
const Hero=()=>{
return(<>
    <div className="hero-section">
        <h3>Give hope for homeless</h3>
        <h1>Helping each other</h1>
<h1>can make world better</h1>
<h4>We Seek out world changers and difference makers around the</h4>
<h4>globe,and equip them to fulfill their unique purpose.</h4>
<span className="hero-buttons"><Link to="donate-now"><button className="donate-now">Donate Now</button></Link>
<button className="know-us">Know about us</button>
</span>
    </div>
</>)
}

export {Hero};