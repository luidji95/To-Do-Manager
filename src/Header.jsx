function Header({ username, handleLogOut }) {
  return (
    <div className="header-container">
      <h1>To Do Manager Application</h1>
      <p>Welcome, {username}!</p>
      <button className="log-out-btn" onClick={handleLogOut}>
        Log out
      </button>
    </div>
  );
}

export default Header;
