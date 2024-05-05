import "./style.css";
import user_icon from "../../images/person.png";
import email_icon from "../../images/email.png";
import password_icon from "../../images/password.png";
import { useState } from "react";

function LoginSignup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [action, setAction] = useState("Login");
  const [accounts, setAccounts] = useState([]);
  const [message, setMessage] = useState("");

  const signUp = () => {
    if (name && email && password) {
      setAccounts([...accounts, { name, email, password }]);
      setAction("Login");
      setMessage({ text: "Registration successful!", type: "success" });
    } else {
      setMessage({ text: "Please fill all fields.", type: "error" });
    }
  };

  const login = () => {
    const foundAccount = accounts.find(
      (acc) => acc.email === email && acc.password === password
    );
    if (foundAccount) {
      setMessage({ text: "Login successful!", type: "success" });
      setName("");
      setEmail("");
      setPassword("");
      closeModal();
    } else {
      setMessage({ text: "Invalid email or password.", type: "error" });
    }
  };

  const closeModal = () => {};

  return (
    <div className="modal fade" id="exampleModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <h5 className="modal-title" id="exampleModalLabel">
              {action}
            </h5>
            <div className="underline"></div>
          </div>
          <div className="modal-body">
            {message.text && (
              <p className={`message text-center ${message.type}`}>
                {message.text}
              </p>
            )}
            <div className="inputs">
              {action === "Login" ? (
                <div></div>
              ) : (
                <div className="input">
                  <img src={user_icon} alt="User" />
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              )}

              <div className="input">
                <img src={email_icon} alt="Email" />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input">
                <img src={password_icon} alt="Password" />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            {action === "Sign Up" ? (
              <div></div>
            ) : (
              <div className="forgot-password">
                Lost password? <span>Click Here!</span>
              </div>
            )}
            <div className="submit-password">
              <button
                type="button"
                className={action === "Login" ? "submit gray" : "submit"}
                onClick={() => {
                  action === "Login" ? login() : signUp();
                }}
              >
                {action === "Login" ? "Login" : "Sign Up"}
              </button>
              <button
                type="button"
                className={action === "Sign Up" ? "submit gray" : "submit"}
                onClick={() => {
                  setAction(action === "Login" ? "Sign Up" : "Login");
                }}
              >
                {action === "Login" ? "Sign Up" : "Login"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
