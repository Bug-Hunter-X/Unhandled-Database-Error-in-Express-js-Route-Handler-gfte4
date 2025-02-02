const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid userId
  db.getUser(userId, (err, user) => {
    if (err) {
      // This will cause a server error
      console.error(err);
      res.status(500).send('Internal server error');
    } else {
      res.json(user);
    }
  });
});