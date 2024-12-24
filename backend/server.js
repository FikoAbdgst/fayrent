// server.js
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({
    origin: ['https://fayrent.vercel.app', 'http://localhost:3000'], // tambahkan localhost
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use(express.json());

// const urlDB = `mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

// Database connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});
db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Store status endpoints
app.get('/api/store-status', (req, res) => {
    db.query('SELECT * FROM store_status LIMIT 1', (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(results[0] || { isOpen: true, openTime: '09:00', closeTime: '21:00' });
    });
});

app.put('/api/store-status', (req, res) => {
    const { isOpen, openTime, closeTime } = req.body;
    db.query(
        'UPDATE store_status SET isOpen = ?, openTime = ?, closeTime = ? WHERE id = 1',
        [isOpen, openTime, closeTime],
        (err) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.json({ message: 'Store status updated successfully' });
        }
    );
});

// Consoles endpoints
app.get('/api/consoles', (req, res) => {
    db.query('SELECT * FROM consoles', (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(results);
    });
});

app.put('/api/consoles/:id', (req, res) => {
    const { id } = req.params;
    const { tersedia } = req.body;
    db.query(
        'UPDATE consoles SET tersedia = ? WHERE id = ?',
        [tersedia, id],
        (err) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.json({ message: 'Console status updated successfully' });
        }
    );
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});