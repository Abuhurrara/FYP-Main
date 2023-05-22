import React from 'react';
import "../css/stats.css";
import mealsDonated from "../images/meals-donated.png";
import peopleHelped from "../images/people-helped.png";
import restReg from "../images/rest-reg.png";
import countryMembers from "../images/country-members.png";

const Stats=()=>{
return(<>
<div className="stats-container">
<div className="stats-card">
    <img src={mealsDonated} alt="" />
    <h2>10000+</h2>
    <h5>Meals Donated</h5>
</div>
<div className="stats-card">
    <img src={restReg} alt="" />
    <h2>50+</h2>
    <h5>Restaurans Registered</h5>
</div>
<div className="stats-card">
    <img src={peopleHelped} alt="" />
    <h2>540000+</h2>
    <h5>People helped</h5>
</div>
<div className="stats-card">
    <img src={countryMembers} alt="" />
    <h2>100+</h2>
    <h5>Countries are members</h5>
</div>
</div>
</>);
};


export {Stats}