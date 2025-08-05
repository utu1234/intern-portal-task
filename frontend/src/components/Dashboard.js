import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [internData, setInternData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/intern') 
      .then(res => res.json())
      .then(data => {
        setInternData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching intern data:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={styles.loading}>Loading...</p>;
  if (!internData) return <p style={styles.error}>No data found</p>;

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Intern Dashboard</h2>

      <div style={styles.card}>
        <p style={styles.info}><strong>Name:</strong> {internData.name}</p>
        <p style={styles.info}><strong>Referral Code:</strong> {internData.referralCode}</p>
        <p style={styles.info}><strong>Total Donations Raised:</strong> ₹{internData.totalDonations}</p>
      </div>

      <div style={styles.rewardsBox}>
        <h3 style={styles.subheading}>🎁 Rewards / Unlockables</h3>
        <ul style={styles.rewardList}>
          <li>🏆 Certificate of Internship</li>
          <li>🎖️ Badge of Honor</li>
          <li>📜 Letter of Recommendation</li>
        </ul>
      </div>
    </div>
  );
};


const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(to right, #a18cd1, #fbc2eb)',
    padding: '40px 20px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#2d3436',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '30px',
    color: '#4b0082',
  },
  card: {
    backgroundColor: '#ffffffcc',
    padding: '25px',
    margin: '0 auto 30px auto',
    maxWidth: '500px',
    borderRadius: '15px',
    boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
    textAlign: 'left',
  },
  info: {
    fontSize: '1.2rem',
    marginBottom: '12px',
  },
  rewardsBox: {
    backgroundColor: '#fff',
    padding: '20px',
    maxWidth: '500px',
    margin: '0 auto',
    borderRadius: '15px',
    boxShadow: '0 6px 15px rgba(0,0,0,0.1)',
  },
  subheading: {
    fontSize: '1.5rem',
    color: '#6a0572',
    marginBottom: '15px',
  },
  rewardList: {
    listStyleType: 'none',
    paddingLeft: '0',
    fontSize: '1.1rem',
    lineHeight: '2',
  },
  loading: {
    textAlign: 'center',
    fontSize: '1.5rem',
    marginTop: '100px',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    fontSize: '1.2rem',
    marginTop: '100px',
  },
};

export default Dashboard;
