import Carousel from "react-multi-carousel";
import { connect } from "react-redux";
import "react-multi-carousel/lib/styles.css";
import { addAccessoriesToBasket } from "../redux/Actions";
import React from "react";

import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
function Upgrade(props) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
  };
  return (
    <div className="carousel">
      <div className="header-carousel">
        <h2>UPGRADE YOUR GEAR</h2>
        <Link to="/product/%20/accessories">
          <button>View All</button>
        </Link>
      </div>
      <Carousel responsive={responsive}>
        {props.accessories.map((obj, index) => (
          <div
            className="cart "
            key={index}
            style={{ width: "330px", height: "450px" }}
          >
            <div style={{ width: "100%" }}>
              <img src={obj.img_url} alt="" style={{ width: "100%" }} />
            </div>
            <h2>{obj.name}</h2>
            <p>{obj.price}</p>
            <button onClick={() => props.addAccessoriesToBasket(index)}>
              Add to basket
            </button>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    accessories: state.accessories,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addAccessoriesToBasket: (index) => {
      dispatch(addAccessoriesToBasket(index));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Upgrade);
