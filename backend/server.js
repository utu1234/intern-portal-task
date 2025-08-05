const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Dummy intern data
const internData = {
  name: "Utkarsh Singh",
  referralCode: "utkarsh2025",
  donationsRaised: 1500
};

// Dummy leaderboard data (static JSON array)
const leaderboard = [
  { name: "Utkarsh Singh", referralCode: "utkarsh2025", donations: 1500 },
  { name: "Aarav Mehta", referralCode: "aarav2025", donations: 1200 },
  { name: "Diya Sharma", referralCode: "diya2025", donations: 1000 },
  { name: "Rahul Jain", referralCode: "rahul2025", donations: 950 },
  { name: "Ananya Verma", referralCode: "ananya2025", donations: 900 }
];

// Routes
app.get('/api/intern', (req, res) => {
  res.json(internData);
});

app.get('/api/leaderboard', (req, res) => {
  res.json(leaderboard);
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
