import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Spend() {
  return (
    <div className="spend">
      <div>
        <h2>SPEND & SAVE</h2>
        <p>Save 20% when you spend more than $125</p>
        <Link to=" /sellers">
          <button>Shop Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Spend;
