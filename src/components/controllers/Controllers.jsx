import { connect } from "react-redux";
import { addControllersToBasket } from "../redux/Actions";
import { Link } from "react-router-dom";

function Controllers(props) {
  return (
    <div className="products">
      <h1>Controllers</h1>
      <div className="cart-flex">
        {props.controllers.map((obj, index) => (
          <div className="cart" key={index}>
            <Link to={`/controllers/${index}`}>
              <div>
                <img src={obj.img_url} alt="" />
              </div>
            </Link>
            <h2>{obj.name}</h2>
            <p>${obj.price}</p>
            <button onClick={() => props.addControllersToBasket(index)}>
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
    controllers: state.controllers,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addControllersToBasket: (index) => {
      dispatch(addControllersToBasket(index));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Controllers);
