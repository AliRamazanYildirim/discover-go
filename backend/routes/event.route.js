import express from "express";
import {createEvent, deleteEvent, getEvents, updateEvent} from "../controllers/event.controller.js";

const router = express.Router();

// Routes
router.get('/', getEvents);
router.post('/', createEvent);
router.put('/:id', updateEvent);
router.delete('/:id', deleteEvent);

export default router;