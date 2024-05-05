import { connect } from "react-redux";
import { addConsolesToBasket } from "../redux/Actions";
import { Link } from "react-router-dom";

function Consoles(props) {
  return (
    <div className="products">
      <h1>Consoles</h1>
      <div className="cart-flex">
        {props.consoles.map((obj, index) => (
          <div className="cart" key={index}>
            <Link to={`/consoles/${index}`}>
              <div>
                <img src={obj.img_url} alt="" />
              </div>
            </Link>
            <h2>{obj.name}</h2>
            <p>${obj.price}</p>
            <button onClick={() => props.addConsolesToBasket(index)}>
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
    consoles: state.consoles,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addConsolesToBasket: (index) => {
      dispatch(addConsolesToBasket(index));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Consoles);
