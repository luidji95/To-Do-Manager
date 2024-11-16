function Header({ username }) {
  return (
    <div className="header-container">
      <h1>To Do Manager Application</h1>
      {username && <p>Welcome, {username}!</p>}
      <button className="log-out-btn">Log out</button>
    </div>
  );
}

export default Header;
