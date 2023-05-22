import React from 'react';
import brands from "../images/brands.png";
import "../css/brands.css";
const Brands=()=>{
return (<>
<div className='brands'>
    <img src={brands} className="brands-logo" />
    </div>
</>);
}

export {Brands};