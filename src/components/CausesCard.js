import React from "react";
import "../css/card.css";
import "../css/causes-card.css";
import cardImage from "../images/card-image.png";
import { Link } from "react-router-dom";

const CausesCard = () => {
  return (
    <>
      <div className="card">
        <img src={cardImage} className="card-img-top" alt="..." />
        <div className="card-body">
        <h6 className="causes-card-title">Medical</h6>
          <h5 className="card-title">Charity, Expectations vs. Reality</h5>
          <p className="card-text">
          Lorem ipsum dolor sit amet, consetetur sadipscing
sed diam nonumy  tempor invidunt ut labore et
magna aliquyam erat, sed diam voluptua.....
          </p>
          <Link to="/donate-now" className="btn causes-card-btn">
            Donate Now
          </Link>
        </div>
      </div>
    </>
  );
};

export { CausesCard };
