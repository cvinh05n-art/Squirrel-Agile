const express = require('express');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Route test
app.get('/', (req, res) => {
    res.send('Squirrel Banking API running...');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});