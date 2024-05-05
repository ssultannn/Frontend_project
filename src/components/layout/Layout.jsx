import "./style.css";
import logo from "../../images/logo.webp";
import basket from "../../images/basket.png";
import { Component } from "react";
import { Link } from "react-router-dom";
import LoginSignup from "../loginsingup/LoginSignup";
import { connect } from "react-redux";
import { removeFromBasket, updateQuantity } from "../redux/Actions";
import remove from "../../images/remove.png";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  basketToRight = () => {
    const basket = document.getElementById("showbasket");
    basket.style.animation = "basketToRight 1s forwards";
  };

  basketToLeft = () => {
    const basket = document.getElementById("showbasket");
    basket.style.animation = "basketToLeft 1s forwards";
  };
  handleQuantityChange = (index, event) => {
    const newQuantity = parseInt(event.target.value);

    this.props.updateQuantity(index, newQuantity);
  };

  render() {
    const { totalPrice } = this.props;

    console.log(totalPrice);
    return (
      <>
        <div className="layout">
          <div className="logo">
            <img src={logo} alt="Arcade" />
          </div>
          <div className="flex-layout">
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/product">Products</Link>
              </li>
              <li>
                <Link to="product/%20/onsale">On sale</Link>
              </li>
              <li>
                <Link to="/contactus">Contact Us</Link>
              </li>
            </ul>
            <div className="login">
              <button data-toggle="modal" data-target="#exampleModal">
                Log in
              </button>
            </div>

            <div className="basket">
              <button onClick={this.showbasket}>
                <img src={basket} alt="Basket" onClick={this.basketToLeft} />
                <p id="baskets_elements">
                  {this.props.basket ? this.props.basket.length : 0}
                </p>
              </button>
            </div>
          </div>
          <LoginSignup />
        </div>
        <div className="showbasket" id="showbasket">
          <div className="basket-header">
            <img
              src="https://cdn-icons-png.flaticon.com/128/271/271228.png"
              alt=""
              id="basketremove"
              onClick={this.basketToRight}
              style={{ cursor: "pointer" }}
            />

            <h2> Cart</h2>
          </div>

          <div className="basket-products">
            {this.props.basket.map((obj, index) => (
              <div className="basket-product">
                <div className="d-flex">
                  <div className="d-flex m">
                    <div>
                      <img src={obj.img_url} alt="" />
                    </div>
                    <div>
                      <h5>{obj.name}</h5>
                      <p>${obj.price}</p>
                      <div className="number-input">
                        <input
                          type="number"
                          value={obj.quantity}
                          onChange={(e) => this.handleQuantityChange(index, e)}
                          placeholder="1"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="remove-img">
                    <img
                      src={remove}
                      onClick={() => this.props.removeFromBasket(index)}
                      alt=""
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
                <hr />
              </div>
            ))}
          </div>

          <div className="total">
            <div className="total-text">
              <h4>Subtotal</h4>
              <h5>${this.props.totalPrice.toFixed(2)}</h5>
            </div>
            <br />
            <br />
            <hr />
            <Link to="/cart">
              <button>View Cart</button>
            </Link>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    basket: state.basket,
    totalPrice: state.totalPrice,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeFromBasket: (index) => {
      dispatch(removeFromBasket(index));
    },
    updateQuantity: (index, quantity) => {
      dispatch(updateQuantity(index, quantity)); // Предположим, у вас есть действие для обновления количества товара
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
