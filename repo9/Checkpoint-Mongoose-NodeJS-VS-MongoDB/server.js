import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: './config/.env' }); // Load environment variables from config/.env
import userRoutes from './routes/userRoutes.js'; // Import the user routes

// Express App Initialization 
const app = express();
const PORT = process.env.PORT || 5000;

//  Middleware Setup
app.use(express.json()); // Middleware to parse JSON bodies from incoming requests

// Database Connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,      // Use the new URL parser (recommended)
            useUnifiedTopology: true    // Use the new server discovery and monitoring engine
        });
        console.log('MongoDB connected successfully!');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1); // Exit with a failure code if DB connection fails
    }
};

connectDB(); // Establish database connection when the server starts

// --- API Route Mounting ---
// Mount the userRoutes under the /users base path.
// All routes defined in userRoutes.js will now be prefixed with /users.
// For example, a GET / in userRoutes.js becomes GET /users/ here.
app.use('/users', userRoutes);


// --- Start Server ---
// Make the Express app listen for incoming requests on the specified port
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`\nAPI Endpoints available under /users:`);
    console.log(`  - GET /users/`);
    console.log(`  - POST /users/`);
    console.log(`  - PUT /users/:id`);
    console.log(`  - DELETE /users/:id`);
    console.log(`  - POST /users/create-one`);
    console.log(`  - POST /users/create-many`);
    console.log(`  - GET /users/find-by-name/:name`);
    console.log(`  - GET /users/find-one-food/:food`);
    console.log(`  - GET /users/find-by-id/:id`);
    console.log(`  - PUT /users/classic-update/:id`);
    console.log(`  - PUT /users/find-one-and-update/:name`);
    console.log(`  - DELETE /users/find-by-id-and-remove/:id`);
    console.log(`  - DELETE /users/delete-many-by-name/:name`);
    console.log(`  - GET /users/search-burritos`);
});
