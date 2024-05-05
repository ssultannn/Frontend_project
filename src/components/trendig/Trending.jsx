import { connect } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import "react-multi-carousel/lib/styles.css";
import { addGamesToBasket } from "../redux/Actions";
import { Link } from "react-router-dom";

function Trending(props) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
  };
  return (
    <div className="carousel">
      <div className="header-carousel">
        <h2>TRENDING GAMES</h2>
        <Link to="/product/%20/games">
          <button>View All</button>
        </Link>
      </div>
      <Carousel responsive={responsive}>
        {props.games.map((obj, index) => (
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
            <button onClick={() => props.addGamesToBasket(index)}>
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
    games: state.games,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addGamesToBasket: (index) => {
      dispatch(addGamesToBasket(index));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Trending);
