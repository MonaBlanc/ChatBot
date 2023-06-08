import {
  faCheckCircle,
  faEnvelope,
  faIdBadge,
  faLock,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Error from "./Error";

export default function RegisterForm(props) {
  let {
    handleSubmit,
    setUsername,
    setEmail,
    setPassword,
    setPasswordCheck,
    errorMessage,
    setError,
  } = props.registerState;
  const [passwordShown, setPasswordShown] = useState(false);

  // Password toggle handler
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };
  return (
    <div data-testid="RegisterForm" className="col-sm-7 bg-color align-self-center form-section">
      <div className="title">
        <h3>Sign up</h3>
      </div>
      <div className="register-inner-form">
        <form method="POST" onSubmit={handleSubmit}>
          <div className="form-group form-box">
            <input
              type="text"
              id="username"
              onChange={(e) => setUsername(e.target.value)}
              className="input-text"
              placeholder="Nom utilisateur"
            />
            <FontAwesomeIcon className="icon" icon={faIdBadge} style={{color: "#ffbf66",}} />
          </div>
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
            />          </div>
          <div className="form-group form-box">
            <FontAwesomeIcon
              className="icon"
              icon={faLock}
              style={{ color: "#ffbf66" }}
            />

            <input
              type={passwordShown ? "text" : "password"}
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              className="input-text"
              placeholder="Password"
            />
            <button
              type="button"
              className="show-pass "
              onClick={togglePassword}
            >
              <FontAwesomeIcon
                className="icon2"
                icon={passwordShown ? faTimesCircle : faCheckCircle}
                style={{ color: "#ffbf66" }}
              />{" "}
            </button>
            <i className="icon lock"></i>
          </div>
          <div className="form-group form-box">
            <input
              type={passwordShown ? "text" : "password"}
              id="passwordCheck"
              onChange={(e) => setPasswordCheck(e.target.value)}
              className="input-text"
              placeholder="Verify password"
            />
            <button
              type="button"
              className="show-pass "
              onClick={togglePassword}
            >
              <FontAwesomeIcon
                className="icon"
                icon={faLock}
                style={{ color: "#ffbf66" }}
              />
            </button>
            <FontAwesomeIcon
              className="icon2"
              icon={passwordShown ? faTimesCircle : faCheckCircle}
              style={{ color: "#ffbf66" }}
            />{" "}
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
            <button className="btn primary-btn">Registrer</button>
          </div>
        </form>
      </div>
    </div>
  );
}
