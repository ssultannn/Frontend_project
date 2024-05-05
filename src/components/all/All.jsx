import { connect } from "react-redux";
import { addAllToBasket } from "../redux/Actions";
import { Link } from "react-router-dom";
function All(props) {
  return (
    <div className="products">
      <h1>All products</h1>
      <div className="cart-flex">
        {props.all.map((obj, index) => (
          <div className="cart" key={index}>
            <Link to={`/all/${index}`}>
              <div>
                <img src={obj.img_url} alt="" />
              </div>
            </Link>
            <h2>{obj.name}</h2>
            <p>${obj.price}</p>
            <button onClick={() => props.addAllToBasket(index)}>
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
    all: state.all,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addAllToBasket: (index) => {
      dispatch(addAllToBasket(index));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(All);
