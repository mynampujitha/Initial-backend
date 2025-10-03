const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to my backend service 🚀');
});

// Health check route
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Graceful shutdown
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated');
  });
});
