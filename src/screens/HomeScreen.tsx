import "../styles/Sidebar.css";
import "../styles/main.css";

export default function HomeScreen() {
  return (
    <div className="page-layout">
      {/* SIDEBAR */}
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
          <div className="avatar">A</div>
          <div>
            <div className="user-name">Ashish</div>
            <div className="goal">Public speaking</div>
          </div>
        </div>
      </div>
      {/* MAIN CONTENT */}
      <div className="main">
        <div className="top-bar">
          <div className="greeting">
            <h1 className="greeting-text">Good morning, Ashish!</h1>
            <p className="greeting-date">
              Sunday, 1 June 2026 · Ready to speak today?
            </p>
          </div>
          <div className="streak-pill">
            <p className="streak-pill-text">
              🔥 <span>12</span> day streak
            </p>
          </div>
        </div>
        {/* REPLACE WITH REAL STAT DATA */}
        <div className="stat-cards">
          <div className="stat-card">
            <p className="label">total speeches</p>
            <h2 className="big-number">38</h2>
            <p className="delta">&uarr;4 this week</p>
          </div>
          <div className="stat-card">
            <p className="label">total speeches</p>
            <h2 className="big-number">38</h2>
            <p className="delta">&uarr;4 this week</p>
          </div>
          <div className="stat-card">
            <p className="label">total speeches</p>
            <h2 className="big-number">38</h2>
            <p className="subtext">speeches recorded</p>
            <p className="delta">&uarr;4 this week</p>
          </div>
        </div>
      </div>
    </div>
  );
}
