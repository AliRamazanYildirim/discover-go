import mongoose from "mongoose";

// MongoDB Connection
export const connectDB = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected successfully ${con.connection.host}`);
    } catch (err) {
        console.error("MongoDB connection error: ", err);
        process.exit(1); // Exit with failure
    }
};


