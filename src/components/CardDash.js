import React from "react";
import "../css/cardDash.css";
import { Link } from "react-router-dom";
function CardDash() {
  return (
    <div className="card ms-md-5 my-4">
      <img
        className="card-img-top"
        src="https://picsum.photos/100/100"
        alt="Card cap"
      />
      <div className="card-body">
        <h5 className="card-title">Cafe De Qazi</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <Link to="/sign-up" className="sign-up-btn">
          Cancel
        </Link>
        <Link to="/login" className="login-btn">
          Accept
        </Link>
      </div>
    </div>
  );
}

export default CardDash;
