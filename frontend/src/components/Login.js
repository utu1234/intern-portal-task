import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '') {
      alert('Please enter your name');
      return;
    }
    onLogin(name.trim());
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.title}>Intern Portal Login</h2>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    background:
      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  form: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '30px 40px',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
    width: '320px',
    textAlign: 'center',
  },
  title: {
    marginBottom: '24px',
    color: '#4b0082',
    fontWeight: '700',
  },
  input: {
    width: '100%',
    padding: '12px 15px',
    marginBottom: '20px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1.8px solid #764ba2',
    outline: 'none',
    transition: '0.3s',
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#764ba2',
    color: 'white',
    fontSize: '16px',
    fontWeight: '600',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default Login;
