    // models/User.js

    import mongoose from 'mongoose'; // Import mongoose using ES6 syntax

    // Define the schema for a User (or Person, as per checkpoint instructions)
    const userSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true // 'name' is a mandatory field, as specified
        },
        age: {
            type: Number,
            min: 0 // Optional: simple validator, age cannot be negative
        },
        favoriteFoods: [String] // 'favoriteFoods' is an array of strings
    });

    // Create the User model from the schema
    // 'User' will be the name of the collection in MongoDB (Mongoose will pluralize it to 'users')
    const User = mongoose.model('User', userSchema);

    // Export the User model using ES6 default export, so it can be imported in server.js
    export default User;
    