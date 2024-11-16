function Header({ username, logout }) {
  return (
    <div className="header-container">
      <h1>To Do Manager Application</h1>
      <p>Welcome, {username}!</p>
      <button className="log-out-btn" onClick={logout}>
        Log out
      </button>
    </div>
  );
}

export default Header;
