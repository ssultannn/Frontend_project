import { connect } from "react-redux";
import { addAccessoriesToBasket } from "../redux/Actions";
import { Link } from "react-router-dom";

function Accessories(props) {
  return (
    <div className="products">
      <h1>Accessories</h1>
      <div className="cart-flex">
        {props.accessories.map((obj, index) => (
          <div className="cart" key={index}>
            <Link to={`/accessories/${index}`}>
              <div>
                <img src={obj.img_url} alt="" />
              </div>
            </Link>
            <h2>{obj.name}</h2>
            <p>${obj.price}</p>
            <button onClick={() => props.addAccessoriesToBasket(index)}>
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

export default connect(mapStateToProps, mapDispatchToProps)(Accessories);
