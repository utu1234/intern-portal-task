import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Leaderboard from './components/Leaderboard';

function App() {
  const [userName, setUserName] = useState(null);
  const [internData, setInternData] = useState(null);
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [viewLeaderboard, setViewLeaderboard] = useState(false);

  // When user logs in, fetch data
  useEffect(() => {
    if (!userName) return;

    setLoading(true);

    // Fetch intern data
    fetch('http://localhost:5000/api/intern')
      .then(res => res.json())
      .then(data => {
        // Replace dummy name with logged in name for demo purpose
        setInternData({ ...data, name: userName });
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching intern data:', err);
        setLoading(false);
      });

    // Fetch leaderboard
    fetch('http://localhost:5000/api/leaderboard')
      .then(res => res.json())
      .then(data => {
        setLeaders(data);
      })
      .catch(err => console.error('Error fetching leaderboard:', err));

  }, [userName]);

  if (!userName) {
    return <Login onLogin={setUserName} />;
  }

  if (loading || !internData) {
    return (
      <div style={{ textAlign: 'center', marginTop: '40px', fontSize: '1.5rem' }}>
        Loading data...
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", padding: '20px' }}>
      <nav style={navStyle}>
        <button
          style={buttonStyle(!viewLeaderboard)}
          onClick={() => setViewLeaderboard(false)}
        >
          Dashboard
        </button>
        <button
          style={buttonStyle(viewLeaderboard)}
          onClick={() => setViewLeaderboard(true)}
        >
          Leaderboard
        </button>
        <button
          style={logoutButtonStyle}
          onClick={() => setUserName(null)}
        >
          Logout
        </button>
      </nav>

      <main>
        {viewLeaderboard ? (
          <Leaderboard leaders={leaders} />
        ) : (
          <Dashboard internData={internData} />
        )}
      </main>
    </div>
  );
}

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '15px',
  marginBottom: '30px',
};

const buttonStyle = (active) => ({
  padding: '12px 25px',
  borderRadius: '8px',
  border: 'none',
  cursor: 'pointer',
  fontWeight: '600',
  backgroundColor: active ? '#764ba2' : '#e0d4f8',
  color: active ? 'white' : '#5a2e8a',
  transition: 'background-color 0.3s',
});

const logoutButtonStyle = {
  padding: '12px 25px',
  borderRadius: '8px',
  border: 'none',
  cursor: 'pointer',
  fontWeight: '600',
  backgroundColor: '#f5576c',
  color: 'white',
  marginLeft: 'auto',
};

export default App;
