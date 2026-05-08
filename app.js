const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.json({
    message: 'Hello from Jenkins CI/CD!'
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'UP' });
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});

module.exports = app;
