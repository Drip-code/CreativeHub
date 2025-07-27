// Load .env first
require('dotenv').config();

// Import the app
const app = require('./frontend/app');

// Start the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(🚀 CreativeHub backend is running on http://localhost:${PORT});
});