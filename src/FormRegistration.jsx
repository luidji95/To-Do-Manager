import React, { useState } from "react";

function FormRegistration({ handleLogin }) {
  const [isLogin, setIsLogin] = useState(true);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  return (
    <>
      <h1 className="h1">To-Do-Manager Application</h1>
      <div className="form-container">
        <div className="form-wrapper">
          <div className="form-header">
            <button
              className={`toggle-btn ${isLogin ? "active" : ""}`}
              onClick={() => setIsLogin(true)}
            >
              Log In
            </button>
            <button
              className={`toggle-btn ${!isLogin ? "active" : ""}`}
              onClick={() => setIsLogin(false)}
            >
              Registration
            </button>
          </div>
          <div className="form-content">
            {isLogin ? (
              <form className="form-section active">
                <h2>Log In</h2>
                <div className="form-group">
                  <label htmlFor="loginEmail">Email</label>
                  <input
                    type="email"
                    id="loginEmail"
                    name="loginEmail"
                    placeholder="Unesite email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="loginPassword">Password</label>
                  <input
                    type="password"
                    id="loginPassword"
                    name="loginPassword"
                    placeholder="Unesite lozinku"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn"
                  onClick={() => {
                    handleLogin(loginEmail, loginPassword);
                  }}
                >
                  Log In
                </button>
              </form>
            ) : (
              <form className="form-section active">
                <h2>Registration</h2>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Unesite korisničko ime"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Unesite email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Unesite lozinku"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Potvrdite lozinku"
                    required
                  />
                </div>
                <button type="submit" className="btn">
                  Create Account
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default FormRegistration;
