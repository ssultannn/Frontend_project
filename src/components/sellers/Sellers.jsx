import { connect } from "react-redux";
import { addBestToBasket } from "../redux/Actions";
import { Link } from "react-router-dom";

function Sellers(props) {
  return (
    <div className="products">
      <h1>Best Sellers</h1>
      <div className="cart-flex">
        {props.sellers.map((obj, index) => (
          <div className="cart" key={index}>
            <Link to={`/sellers/${index}`}>
              <div>
                <img src={obj.img_url} alt="" />
              </div>
            </Link>
            <h2>{obj.name}</h2>
            <p>${obj.price}</p>
            <button onClick={() => props.addBestToBasket(index)}>
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
    sellers: state.sellers,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addBestToBasket: (index) => {
      dispatch(addBestToBasket(index));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Sellers);
