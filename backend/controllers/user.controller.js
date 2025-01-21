import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

// Login user
export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ success: false, message: "Please provide email and password" });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(404).json({ success: false, message: "Invalid credentials" });
        }

        res.status(200).json({ success: true, data: user });
    } catch (error) {
        console.error("Error in Login User:", error.message);
        res.status(500).json({ success: false, message: "Server Error", error: error.message });
    }
};

// Create a new user (register)
export const createUser = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ success: false, message: "Please provide all fields" });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword });

        await newUser.save();
        res.status(201).json({ success: true, data: newUser });
    } catch (error) {
        console.error("Error in Create User:", error.message);
        res.status(500).json({ success: false, message: "Server Error", error: error.message });
    }
};

// Get all users
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select("-password"); // Exclude password field
        res.status(200).json({ success: true, data: users });
    } catch (error) {
        console.error("Error in Get All Users:", error.message);
        res.status(500).json({ success: false, message: "Server Error", error: error.message });
    }
};

// Get single user by ID
export const getUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findById(id).select("-password"); // Exclude password field
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        res.status(200).json({ success: true, data: user });
    } catch (error) {
        console.error("Error in Get User By ID:", error.message);
        res.status(500).json({ success: false, message: "Server Error", error: error.message });
    }
};

// Update user
export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { username, email, password } = req.body;

    try {
        const updatedFields = { username, email };
        if (password) {
            const hashedPassword = await bcrypt.hash(password, 10);
            updatedFields.password = hashedPassword;
        }

        const updatedUser = await User.findByIdAndUpdate(id, updatedFields, { new: true }).select("-password");
        if (!updatedUser) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        res.status(200).json({ success: true, data: updatedUser });
    } catch (error) {
        console.error("Error in Update User:", error.message);
        res.status(500).json({ success: false, message: "Server Error", error: error.message });
    }
};

// Delete user
export const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        res.status(200).json({ success: true, message: "User deleted successfully" });
    } catch (error) {
        console.error("Error in Delete User:", error.message);
        res.status(500).json({ success: false, message: "Server Error", error: error.message });
    }
};
