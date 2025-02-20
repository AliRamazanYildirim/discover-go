import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    location: { 
        lat: { type: Number, required: true },
        lng: { type: Number, required: true }
    },
}, { timestamps: true });

const Event = mongoose.model('Event', EventSchema);

export default Event;