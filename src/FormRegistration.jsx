import React, { useState } from "react";

function FormRegistration() {
  const [isLogin, setIsLogin] = useState(true);

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
              Logovanje
            </button>
            <button
              className={`toggle-btn ${!isLogin ? "active" : ""}`}
              onClick={() => setIsLogin(false)}
            >
              Registracija
            </button>
          </div>
          <div className="form-content">
            {isLogin ? (
              <form className="form-section active">
                <h2>Logovanje</h2>
                <div className="form-group">
                  <label htmlFor="loginEmail">Email</label>
                  <input
                    type="email"
                    id="loginEmail"
                    name="loginEmail"
                    placeholder="Unesite email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="loginPassword">Lozinka</label>
                  <input
                    type="password"
                    id="loginPassword"
                    name="loginPassword"
                    placeholder="Unesite lozinku"
                    required
                  />
                </div>
                <button type="submit" className="btn">
                  Uloguj se
                </button>
              </form>
            ) : (
              <form className="form-section active">
                <h2>Registracija</h2>
                <div className="form-group">
                  <label htmlFor="username">Korisničko ime</label>
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
                  <label htmlFor="password">Lozinka</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Unesite lozinku"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword">Potvrdi lozinku</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Potvrdite lozinku"
                    required
                  />
                </div>
                <button type="submit" className="btn">
                  Registruj se
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
