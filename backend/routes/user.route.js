import express from "express";
import {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
} from "../controllers/user.controller.js";

const router = express.Router();

// CRUD Routes for Users
router.post("/", createUser); // Create (Register)
router.get("/", getAllUsers); // Read (All Users)
router.get("/:id", getUserById); // Read (Single User)
router.put("/:id", updateUser); // Update
router.delete("/:id", deleteUser); // Delete

export default router;
