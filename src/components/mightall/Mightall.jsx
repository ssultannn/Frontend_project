import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { connect } from "react-redux";
import { addBestToBasket } from "../redux/Actions";

function Mightall(props) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
  };
  return (
    <div className="carousel">
      <div className="header-carousel  pp text-center">
        <h1 className="text-center">You Might Also Like</h1>
      </div>
      <Carousel responsive={responsive}>
        {props.all.map((obj, index) => (
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
            <button onClick={() => props.addBestToBasket(index)}>
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
    all: state.all,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addBestToBasket: (index) => {
      dispatch(addBestToBasket(index));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Mightall);
