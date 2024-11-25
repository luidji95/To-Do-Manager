import React, { useState } from "react";

function DeletingAccount({ onConfirm, onCancel }) {
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm(password);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Are you sure you want to delete your account?</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="modal-buttons">
            <button type="submit" className="btn confirm-btn">
              Confirm
            </button>
            <button type="button" className="btn cancel-btn" onClick={onCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DeletingAccount;
