import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import { removeFromBasket, updateQuantity } from "../redux/Actions";
import "./style.css";
import remove from "../../images/remove.png";

class Carts extends Component {
  constructor(props) {
    super(props);
  }

  handleQuantityChange = (index, event) => {
    const newQuantity = parseInt(event.target.value);
    this.props.updateQuantity(index, newQuantity);
  };

  render() {
    return (
      <div className="carts-buy">
        <div className="carts">
          {this.props.basket.map((obj, index) => (
            <div className="basket-cart" key={index}>
              <hr />
              <div className="left-part">
                <div>
                  <img src={obj.img_url} alt="" />
                </div>
                <div>
                  <h5>{obj.name}</h5>
                  <p>${obj.price}</p>
                </div>
              </div>

              <div className="right-part">
                <div className="number-input">
                  <input
                    type="number"
                    value={obj.quantity || 1}
                    onChange={(e) => this.handleQuantityChange(index, e)}
                  />
                </div>

                <div>
                  <p>${(obj.price * obj.quantity).toFixed(2)}</p>
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
            </div>
          ))}
        </div>
        <div className="buy">
          <h4>Order summary</h4>
          <hr />
          <div className="delivery-price">
            <div>
              <p>Subtotal</p>
              <p>Delivery </p>
              <p className="cc">Azerbaijan</p>
            </div>
            <div>
              <p>${this.props.totalPrice.toFixed(2)}</p>
              <p className="ff"> FREE</p>
            </div>
          </div>
          <hr />
          <div className="total-pp">
            <p>Total</p>
            <p>${this.props.totalPrice.toFixed(2)}</p>
          </div>
          <div className="btn-check">
            <button>Checkout</button>
          </div>
        </div>
      </div>
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
      dispatch(updateQuantity(index, quantity));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Carts);
