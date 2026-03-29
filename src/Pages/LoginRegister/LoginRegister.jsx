import React, { useState } from "react";
import "./LoginRegister.css";

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="login-register-page">
    <div className={`form-container ${isLogin ? "login-mode" : "register-mode"}`}>
      <p className="title">{isLogin ? "Welcome back" : "Create an account"}</p>
      <form className="form fade">
        {!isLogin && (
          <input type="text" className="input" placeholder="Username" />
        )}
        <input type="email" className="input" placeholder="Email" />
        <input type="password" className="input" placeholder="Password" />
        {!isLogin && (
          <input
            type="password"
            className="input"
            placeholder="Confirm Password"
          />
        )}
        {isLogin && (
          <p className="page-link">
            <span className="page-link-label">Forgot Password?</span>
          </p>
        )}
        <button className="form-btn">{isLogin ? "Log in" : "Register"}</button>
      </form>

      <p className="sign-up-label">
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        <span className="sign-up-link" onClick={toggleForm}>
          {isLogin ? " Sign up" : " Log in"}
        </span>
      </p>

      {isLogin && (
        <div className="buttons-container fade">
          <div className="apple-login-button">
            <span>Log in with Apple</span>
          </div>
          <div className="google-login-button">
            <span>Log in with Google</span>
          </div>
        </div>
      )}
    </div>
    </div>

  );
};

export default LoginRegister;
