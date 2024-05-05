import { connect } from "react-redux";
import { addOnSaleToBasket } from "../redux/Actions";
import { Link } from "react-router-dom";
function Onsale(props) {
  return (
    <div className="products">
      <h1>On sale</h1>
      <div className="cart-flex">
        {props.onsale.map((obj, index) => (
          <div className="cart" key={index}>
            <Link to={`/onsale/${index}`}>
              <div>
                <img src={obj.img_url} alt="" />
              </div>
            </Link>
            <h2>{obj.name}</h2>
            <p>${obj.price}</p>
            <button onClick={() => props.addOnSaleToBasket(index)}>
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
    onsale: state.onsale,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addOnSaleToBasket: (index) => {
      dispatch(addOnSaleToBasket(index));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Onsale);
