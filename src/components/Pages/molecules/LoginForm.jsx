import {
    faCheckCircle,
    faEnvelope,
    faLock,
    faTimesCircle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Error from "./Error";
import { useLocation } from 'react-router-dom';


export default function LoginForm(props) {
  let { handleSubmit, setEmail, setPassword, errorMessage, setError } =
    props.loginState;
  const [passwordShown, setPasswordShown] = useState(false);
  const location = useLocation();
  let defaultClass = "nav-link link-btn btn-primary text-gray-600 opacity-70 text-sm";
  let active = " active"

  // Password toggle handler
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };
  return (
    <div className="col-sm-7 bg-color align-self-center form-section">
      <div className="title">
        <h3>Login</h3>
      </div>
      <a href="/register" className={location.pathname === "/register" ? + active : defaultClass}>Are you a new member ? Sign up here.</a>
      <div className="login-inner-form">
        <form method="POST" onSubmit={handleSubmit}>
          <div className="form-group form-box">
            <input
              type="text"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              className="input-text"
              placeholder="Email"
            />
            <FontAwesomeIcon
              className="icon"
              icon={faEnvelope}
              style={{ color: "#ffbf66" }}
            />
          </div>
          <div className="form-group form-box">
            <FontAwesomeIcon className="icon" icon={faLock} style={{color: "#ffbf66",}} />
            <input
              type={passwordShown ? "text" : "password"}
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              className="input-text"
              placeholder="Password"
            />
            <button
              type="button"
              className="show-pass"
              onClick={togglePassword}
            >
              <FontAwesomeIcon
                className="icon2"
                icon={passwordShown ? faTimesCircle : faCheckCircle}
                style={{ color: "#ffbf66" }}
              />
            </button>
          </div>
          {errorMessage && (
            <Error
              errorMessage={errorMessage}
              clearError={() => {
                setError(undefined);
              }}
            ></Error>
          )}
          <div className="form-group">
            <button className="btn primary-btn">Connection</button>
          </div>
        </form>
      </div>
    </div>
  );
}
