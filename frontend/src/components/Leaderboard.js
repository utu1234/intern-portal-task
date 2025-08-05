import React from 'react';

const Leaderboard = ({ leaders }) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Leaderboard</h1>
      <ol style={styles.list}>
        {leaders.map((leader, index) => (
          <li key={index} style={styles.listItem}>
            <span style={styles.name}>{leader.name}</span>
            <span style={styles.donation}>₹{leader.donations.toLocaleString()}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

const styles = {
  container: {
    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    minHeight: '80vh',
    maxWidth: '600px',
    margin: '30px auto',
    padding: '30px',
    borderRadius: '20px',
    color: 'white',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    boxShadow: '0 12px 25px rgba(245, 87, 108, 0.6)',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '25px',
    textAlign: 'center',
    fontWeight: '700',
  },
  list: {
    paddingLeft: '20px',
    fontSize: '1.3rem',
  },
  listItem: {
    marginBottom: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: '10px 20px',
    borderRadius: '10px',
    fontWeight: '600',
  },
  name: {
    letterSpacing: '0.04em',
  },
  donation: {
    fontWeight: '700',
  },
};

export default Leaderboard;
