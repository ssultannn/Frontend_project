import { connect } from "react-redux";
import "./style.css";
import { addGamesToBasket } from "../redux/Actions";
import { Link } from "react-router-dom";

function Games(props) {
  return (
    <div className="products">
      <h1>Games</h1>
      <div className="cart-flex">
        {props.games.map((obj, index) => (
          <div className="cart" key={index}>
            <Link to={`/games/${index}`}>
              <div>
                <img src={obj.img_url} alt="" />
              </div>
            </Link>
            <h2>{obj.name}</h2>
            <p>${obj.price}</p>
            <button onClick={() => props.addGamesToBasket(index)}>
              Add to basket
            </button>
          </div>
        ))}
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Games);
