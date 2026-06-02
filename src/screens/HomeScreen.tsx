import "../styles/Sidebar.css";

export default function HomeScreen() {
  return (
    <div className="sidebar">
      {/* LOGO */}
      <div className="logo">
        <span className="wordmark">rostrum</span>
        <span className="dot">.</span>
      </div>
      {/* NAV ITEMS */}
      <div className="nav-items">
        <button className="nav-item">Home</button>
        <button className="nav-item">Practice</button>
        <button className="nav-item">Progress</button>
        <button className="nav-item">History</button>
      </div>

      {/* USER ROW  */}
      <div className="user-row">
        <div className="avatar"></div>
        <div>
          <div className="name">Ashish Singh</div>
          <div className="goal">Public speaking</div>
        </div>
      </div>
    </div>
  );
}
