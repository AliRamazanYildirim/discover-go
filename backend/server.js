import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Event from './models/events.js';

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Server is running');
});

app.post('/api/events', async (req, res) => {
    const event = req.body; // user will send this data
    const { title, description, date, location } = event;

    if (!title || !description || !date || !location || !location.lat || !location.lng) {
        return res.status(400).json({ success: false, message: "Please provide all fields" });
    }

    const newEvent = new Event(event);

    try {
        await newEvent.save();
        res.status(201).json({ success: true, data: newEvent });
    } catch (error) {
        console.error("Error in Create event:", error.message);
        res.status(500).json({ success: false, message: "Server Error", error: error.message });
    }
});

// Centralized Error Handling Middleware
app.use((err, res) => {
    console.error(err.stack);
    res.status(500).send({ message: "Internal Server Error", error: err.message });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  // MongoDB Connection
  connectDB();
  console.log(`Server running on http://localhost:${PORT}`);
});