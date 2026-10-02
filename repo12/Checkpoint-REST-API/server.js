// server.js

// --- Module Imports ---
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: './config/.env' });
import User from './models/User.js';

// --- Express App Initialization ---
const app = express();
const PORT = process.env.PORT || 5000;

// --- Middleware Setup ---
app.use(express.json());

// --- Database Connection ---
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected successfully!');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1);
    }
};

connectDB();

// --- API Routes ---

// 1. GET: RETURN ALL USERS
app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
});

// 2. POST: ADD A NEW USER TO THE DATABASE
// Request Body Example: { "name": "John Doe", "age": 30, "favoriteFoods": ["Pizza", "Pasta"] }
app.post('/users', async (req, res) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        console.error('Error adding user:', error.message);
        res.status(400).json({ message: error.message });
    }
});

// 3. PUT: EDIT A USER BY ID
// Request Body Example: { "age": 31, "favoriteFoods": ["Hamburger", "Sushi"] }
app.put('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUserData = req.body;

        const updatedUser = await User.findByIdAndUpdate(id, updatedUserData, { new: true, runValidators: true });

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        console.error('Error updating user:', error.message);
        if (error.name === 'CastError' && error.kind === 'ObjectId') {
            return res.status(400).json({ message: 'Invalid User ID format' });
        }
        res.status(500).json({ message: 'Server error' });
    }
});

// 4. DELETE: REMOVE A USER BY ID
app.delete('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully', deletedUser });
    } catch (error) {
        console.error('Error deleting user:', error.message);
        if (error.name === 'CastError' && error.kind === 'ObjectId') {
            return res.status(400).json({ message: 'Invalid User ID format' });
        }
        res.status(500).json({ message: 'Server error' });
    }
});


// --- Start Server ---
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`API Endpoints available:`);
    console.log(`  - GET /users`);
    console.log(`  - POST /users`);
    console.log(`  - PUT /users/:id`);
    console.log(`  - DELETE /users/:id`);
});
