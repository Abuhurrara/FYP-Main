import React from "react";
import { Link } from "react-router-dom";
import "../css/causes.css";
import { CausesCard } from "./CausesCard";
import { Brands } from "./Brands";


const Causes = () => {
    return (<>
        <div className="causes-hero-section">
            <h1>Our Causes</h1>
            <div className="sign-up-breadcrumbs">
                <Link to="/" className="home-breadcrumb">
                    Home
                </Link>
                <span className="slash"> / </span>
                <Link to="/causes" className="sign-up-breadcrumb">
                    Causes
                </Link>
            </div>
        </div>



        <div className="cards">
            <div className="latest-news">
                <h6>Latest Causes</h6>
            </div>
            <div className="articles">
                <h2>Find the popular cause
                    and donate them</h2>

            </div>
            <div className="three-causes-cards"> <CausesCard />
                <CausesCard />
                <CausesCard />
                </div>
                <div className="three-causes-cards"> <CausesCard />
                <CausesCard />
                <CausesCard />
                </div>
                
        </div>
        <Brands></Brands>
    </>)
}

export { Causes };