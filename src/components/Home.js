import React from "react";
import { Brands } from "./Brands";
import { Cards } from "./Cards";
import { Carousel } from "./Carousel";
import { Hero } from "./Hero";
import { Navbar } from "./Navbar";
import { Stats } from "./Stats";
import { ZPattern } from "./ZPattern";

const Home=()=>{
return(<>
<Hero/>
<Stats/>
<ZPattern/>
<Carousel/>
<Cards/>
<Brands/>
</>)
}

export {Home}