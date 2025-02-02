const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  db.getUser(userId, (err, user) => {
    if (err) {
      console.error('Database error:', err);
      res.status(500).json({ error: 'Failed to retrieve user' }); // Improved error handling
    } else if (!user) {
      res.status(404).json({ error: 'User not found' }); // Handle non-existent user
    } else {
      res.json(user);
    }
  });
});