import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

function LayoutProducts() {
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });

  const handlePriceChange = (event) => {
    const { value } = event.target;
    setPriceRange({ min: 0, max: parseInt(value) });
  };

  return (
    <>
      <nav>
        <h1>Browse by</h1>
        <ul>
          <hr />
          <li>
            <Link to=" /all">All Products</Link>
          </li>
          <li>
            <Link to=" /accessories">Accessories</Link>
          </li>
          <li>
            <Link to=" /sellers">Best Sellers</Link>
          </li>
          <li>
            <Link to=" /consoles">Consoles</Link>
          </li>
          <li>
            <Link to=" /controllers">Controllers</Link>
          </li>
          <li>
            <Link to=" /games">Games</Link>
          </li>
          <li>
            <Link to=" /onsale">Onsale</Link>
          </li>
        </ul>
        <div>
          <h2>Filter by Price</h2>
          <hr />
          <label htmlFor="priceRange">Price :</label>

          <input
            type="range"
            id="priceRange"
            name="price"
            min="0"
            max="1000"
            value={priceRange.max}
            onChange={handlePriceChange}
            step="1"
          />
          <div>
            <span>Min: $0</span>
            <span>Max: ${priceRange.max}</span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default LayoutProducts;
