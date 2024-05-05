import React, { useState, useRef } from "react";
import "./style.css";
import games from "../../images/Games.webp";

function Newsletter() {
  const [email, setEmail] = useState("");
  const modalRef = useRef(null);
  const [isHuman, setIsHuman] = useState(false);
  const [thanks, setThanks] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && email.includes("@")) {
      modalRef.current.style.display = "block";
    }
  };

  const handleConfirmHuman = () => {
    setIsHuman(true);
    setTimeout(() => {
      modalRef.current.style.display = "none";
    }, 500);
    setThanks("Thanks for submitting!");
  };

  return (
    <div className="newsletter">
      <div className="letter">
        <h2>NEWSLETTER</h2>
        <p>
          Sign up to receive updates on new <br />
          products and special offers
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email*</label>
          <input
            id="email"
            required
            type="email"
            value={email}
            onChange={handleChange}
            className={email ? "valid" : ""}
          />
          <button type="submit">Submit</button>
          <p>{thanks}</p>
        </form>
      </div>
      <div className="newsletter-img">
        <img src={games} alt="" />
      </div>
      <div className="purple-container"></div>
      {/* Модальное окно */}
      <div className="modal" ref={modalRef} role="dialog">
        <div className="modal-dialog modal-dialog-centered " role="document">
          <div className="modal-content">
            <div className="modal-body text-center">
              <button
                type="button"
                className="close"
                onClick={() => (modalRef.current.style.display = "none")}
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <h1 className="text-dark mt-5 font-weight-bold">Verification</h1>
              <p className="text-dark mt-2 font-weight-bold">
                Please confirm you're human.
              </p>
              <label className="checkbox-container mb-5 mt-3 m-2 text-dark font-weight-bold">
                <input
                  className="m-1"
                  type="checkbox"
                  style={{ width: "16px", height: "16px" }}
                  onChange={handleConfirmHuman} // Добавить onChange обработчик
                  checked={isHuman}
                />
                <span className="checkmark"></span>
                Confirm I am not a robot
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
