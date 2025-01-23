import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import eventRoutes from './routes/event.route.js';
import userRoutes from "./routes/auth.route.js";

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/events', eventRoutes);
app.use("/api/users", userRoutes);

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