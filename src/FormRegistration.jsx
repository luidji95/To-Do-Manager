import React, { useState } from "react";

function FormRegistration({ handleLogin, handleRegistration }) {
  const [isLogin, setIsLogin] = useState(true);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registrationEmail, setRegistrationEmail] = useState("");
  const [registrationPassword, setRegistrationPassword] = useState("");
  const [registrationUserName, setRegistrationUserName] = useState("");
  const [registrationConfirmPassword, setRegistrationConfirmPassword] =
    useState("");

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
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (registrationPassword !== registrationConfirmPassword) {
                    alert("Passwords do not match!");
                    return;
                  }
                  if (!registrationEmail.includes("@")) {
                    alert("Please enter a valid email!");
                    return;
                  }
                  if (registrationPassword.length < 6) {
                    alert("Password must be at least 6 characters long!");
                    return;
                  }
                  handleRegistration(
                    registrationUserName,
                    registrationEmail,
                    registrationPassword
                  );
                  alert("Registration successful! Please log in.");
                  setIsLogin(true); // Automatski prebacuje na login formu
                }}
                className="form-section active"
              >
                <h2>Registration</h2>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Unesite korisničko ime"
                    value={registrationUserName}
                    onChange={(e) => setRegistrationUserName(e.target.value)}
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
                    value={registrationEmail}
                    onChange={(e) => setRegistrationEmail(e.target.value)}
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
                    value={registrationPassword}
                    onChange={(e) => setRegistrationPassword(e.target.value)}
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
                    value={registrationConfirmPassword}
                    onChange={(e) =>
                      setRegistrationConfirmPassword(e.target.value)
                    }
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
