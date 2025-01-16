import express from "express";
import mongoose from "mongoose";
import Event from "../models/event.model.js";

const router = express.Router();

// Routes
router.get('/', async (req, res) => {
    try {
        const events = await Event.find({});
        res.status(200).json({ success: true, data: events });
    } catch (error) {
        console.error("Error in Fetching events:", error.message);
        res.status(500).json({ success: false, message: "Server Error", error: error.message });
    }
});

router.post('/', async (req, res) => {
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

router.put('/:id', async (req, res) => { 
    const { id } = req.params;
    const event = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ success: false, message: "Please provide all fields" });
    }

    try {
        const updatedEvent = await Event.findByIdAndUpdate(id, event, { new: true });
        if (!updatedEvent) {
            return res.status(404).json({ success: false, message: "Event not found" });
        }

        res.status(200).json({ success: true, data: updatedEvent });
    } catch (error) {
        console.error("Error in Update event:", error.message);
        res.status(500).json({ success: false, message: "Server Error", error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    console.log('id', id);

    try {
        const event = await Event.findByIdAndDelete(id);
        if (!event) {
            return res.status(404).json({ success: false, message: "Event not found" });
        }

        res.status(200).json({ success: true, message: "Event deleted" });
    } catch (error) {
        console.error("Error in Delete event:", error.message);
        res.status(500).json({ success: false, message: "Server Error", error: error.message });
    }
});

export default router;