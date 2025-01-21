import express from "express";
import {createEvent, deleteEvent, getEventById, getAllEvents, updateEvent} from "../controllers/event.controller.js";

const router = express.Router();

// Routes
router.get('/', getAllEvents);
router.get('/:id', getEventById);
router.post('/', createEvent);
router.put('/:id', updateEvent);
router.delete('/:id', deleteEvent);

export default router;