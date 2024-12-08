const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs'); // File system module to write to JSON

const app = express();
const port = 3000;
const cors = require('cors');

// Enable CORS for all routes
app.use(cors());

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

// POST route to handle form submission
app.post('/register', (req, res) => {
    const userData = req.body;

    // Append data to JSON file
    fs.appendFile('data.json', JSON.stringify(userData) + '\n', (err) => {
        if (err) {
            console.error('Error saving data:', err);
            return res.status(500).send('Error saving data');
        }
        res.status(200).send('Data saved successfully');
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
