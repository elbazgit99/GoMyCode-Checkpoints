// models/User.js

import mongoose from 'mongoose'; // Use ES6 import for mongoose

// Define the schema for a User
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    favoriteFoods: [String] 
});

// Create the User model from the schema
// 'User' will be the name of the collection in MongoDB (it will be pluralized to 'users')
const User = mongoose.model('User', userSchema);
export default User; 
