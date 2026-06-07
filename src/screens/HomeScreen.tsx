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
          <button className="nav-item active">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#4F46E5"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                fill="#4F46E5"
                opacity="0.15"
              ></path>
              <polyline
                points="9 22 9 12 15 12 15 22"
                stroke="#4F46E5"
              ></polyline>
            </svg>
            Home
          </button>
          <button className="nav-item">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
            >
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"></path>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v3M8 22h8"></path>
            </svg>
            Practice
          </button>
          <button className="nav-item">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
            Progress
          </button>
          <button className="nav-item">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
            </svg>
            History
          </button>
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
        {/* TOP BAR */}
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
        {/* STATS ROW */}

        <div className="stat-cards">
          <div className="stat-card">
            <p className="label">total speeches</p>
            <h2 className="big-number">38</h2>
            <p className="subtext">speeches recorded</p>
            <span className="delta-text">&uarr;4 this week</span>
          </div>
          <div className="stat-card">
            <p className="label">Average Score</p>
            <h2 className="big-number">
              38<sup>/100</sup>
            </h2>
            <p className="subtext">across all sessions</p>
            <span className="delta-text">&uarr; 3 pts from last week</span>
          </div>
          <div className="stat-card">
            <p className="label">Practice Time</p>
            <h2 className="big-number">
              125<sup>m</sup>
            </h2>
            <p className="subtext">total minutes spoken</p>
            <span className="delta-text">&uarr;4 this week</span>
          </div>
        </div>

        {/* MID-ROW */}
        <div className="mid-row">
          <div className="card">
            <div className="prompt-badge">
              <div className="prompt-dot"> </div> Today's Challenge
            </div>
            <p className="prompt-text">
              "Describe a difficult decision you made and what you learned from
              it."
            </p>
            <div className="dur-row">
              <button className="dur-pill">30s</button>
              <button className="dur-pill active">60s</button>
              <button className="dur-pill">90s</button>
            </div>
            <button className="start-btn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"
                  fill="white"
                ></path>
                <path
                  d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v3M8 22h8"
                  stroke="white"
                  stroke-width="1.8"
                  stroke-linecap="round"
                ></path>
              </svg>
              Start speaking
            </button>
            <button className="shuffle-btn">
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="16 3 21 3 21 8"></polyline>
                <line x1="4" y1="20" x2="21" y2="3"></line>
                <polyline points="21 16 21 21 16 21"></polyline>
                <line x1="15" y1="15" x2="21" y2="21"></line>
              </svg>
              Change Prompt
            </button>
          </div>
          <div className="card chart-card">
            <p className="card-label">This week</p>
            <div className="chart-header">
              <p className="chart-big-num">
                18<span>m spoken</span>
              </p>
              <span>7-day view</span>
            </div>
            <div className="bars">
              <div className="bar-wrap">
                <div className="bar" style={{ height: `65%` }}></div>
                <span className="bar-day">M</span>
              </div>
              <div className="bar-wrap">
                <div className="bar " style={{ height: `30%` }}></div>
                <span className="bar-day">T</span>
              </div>
              <div className="bar-wrap">
                <div className="bar active" style={{ height: `80%` }}></div>
                <span className="bar-day">W</span>
              </div>
              <div className="bar-wrap">
                <div className="bar" style={{ height: `55%` }}></div>
                <span className="bar-day">T</span>
              </div>
              <div className="bar-wrap">
                <div className="bar" style={{ height: `100%` }}></div>
                <span className="bar-day">F</span>
              </div>
              <div className="bar-wrap">
                <div className="bar" style={{ height: `20%` }}></div>
                <span className="bar-day">S</span>
              </div>
              <div className="bar-wrap">
                <div className="bar" style={{ height: `30%` }}></div>
                <span className="bar-day">S</span>
              </div>
            </div>
            <div className="chart-divider"></div>
            <p className="score-trend">score trend</p>
            <div className="trend-row">
              <svg
                width="100%"
                height="32"
                viewBox="0 0 200 32"
                fill="none"
                style={{ flex: 1 }}
              >
                <polyline
                  points="0,28 30,22 60,25 90,14 120,16 150,7 180,10 200,5"
                  stroke="#4F46E5"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></polyline>
                <polyline
                  points="0,28 30,22 60,25 90,14 120,16 150,7 180,10 200,5 200,32 0,32"
                  fill="#4F46E5"
                  opacity="0.06"
                ></polyline>
              </svg>
              <span className="improving">&uarr; improving</span>
            </div>
          </div>
        </div>

        {/* ACHIEVEMENT SECTION */}
        <div className="achievement-section card">
          <div className="achievement-label  ">
            <p className="label">achievement</p>
            <span>2 of 6 unlocked</span>
          </div>
          <div className="achievement-cards">
            <div className="achievement-card card">
              <div className="achievement-icon">🎙️</div>
              <p className="achievement-name">First Speech</p>
              <p className="achievement-description">
                Record your very first session
              </p>
              <span className="delta-text">Unlocked</span>
            </div>
            <div className="achievement-card card">
              <div className="achievement-icon">🔥</div>
              <p className="achievement-name">7 Day Streak</p>
              <p className="achievement-description">Speak 7 days in a row</p>
              <span className="delta-text">Unlocked</span>
            </div>
            <div className="achievement-card card locked">
              <div className="achievement-icon">📅</div>
              <p className="achievement-name">30 Day Streak</p>
              <p className="achievement-description">
                Speak every day for a month
              </p>
              <span className="delta-text">18 days left</span>
            </div>
            <div className="achievement-card card locked">
              <div className="achievement-icon">💯</div>
              <p className="achievement-name">100 Speeches</p>
              <p className="achievement-description">Record 100 sessions</p>
              <span className="delta-text">total 62 to go</span>
            </div>
            <div className="achievement-card card locked">
              <div className="achievement-icon">⭐</div>
              <p className="achievement-name">Score 95+</p>
              <p className="achievement-description">Hit a score above 95</p>
              <span className="delta-text">Best: 91</span>
            </div>
            <div className="achievement-card card locked">
              <div className="achievement-icon">🏆</div>
              <p className="achievement-name">Perfect Week</p>
              <p className="achievement-description">Average 90+ for 7 days</p>
              <span className="delta-text">Locked</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
