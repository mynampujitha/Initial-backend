const express = require('express');
const app = express();

// Use the PORT from environment variable (Render sets this automatically)
const PORT = process.env.PORT || 3000;

// Example routes
app.get('/', (req, res) => res.send('Hello World!'));
app.get('/health', (req, res) => res.status(200).send({ status: 'ok' }));

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// ✅ Handle SIGTERM for graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received: closing server...');
  server.close(() => {
    console.log('Server closed. Process terminated cleanly.');
    process.exit(0); // exit successfully
  });
});

// (Optional) Handle SIGINT (Ctrl+C locally)
process.on('SIGINT', () => {
  console.log('SIGINT received: closing server...');
  server.close(() => {
    console.log('Server closed. Process terminated cleanly.');
    process.exit(0);
  });
});
