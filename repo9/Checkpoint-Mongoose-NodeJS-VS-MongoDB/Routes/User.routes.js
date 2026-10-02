// routes/userRoutes.js

import express from 'express';
import User from '../models/User.js'; // Import the User model from its relative path

const router = express.Router(); // Create an Express router instance

// --- User API Routes ---

// 1. GET: Return All Users
// Endpoint: GET /users/
router.get('/', async (req, res) => {
    try {
        const users = await User.find(); // Find all users in the database
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching all users:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
});

// 2. POST: Add a New User to the Database (Generic Add)
// Endpoint: POST /users/
// Request Body Example: { "name": "John Doe", "age": 30, "favoriteFoods": ["Pizza", "Pasta"] }
router.post('/', async (req, res) => {
    try {
        const newUser = new User(req.body); // Create a new User instance with data from the request body
        const savedUser = await newUser.save(); // Save the new user to the database
        res.status(201).json(savedUser); // Send the saved user with status 201 (Created)
    } catch (error) {
        console.error('Error adding user:', error.message);
        res.status(400).json({ message: error.message }); // 400 for bad request (e.g., validation error)
    }
});

// 3. PUT: Edit a User by ID (Generic Update)
// Endpoint: PUT /users/:id
// Request Body Example: { "age": 31, "favoriteFoods": ["Hamburger", "Sushi"] }
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params; // Get the user ID from the URL parameters
        const updatedUserData = req.body; // Get the update data from the request body

        // Find the user by ID and update their data
        // { new: true } returns the updated document, { runValidators: true } ensures validation on update
        const updatedUser = await User.findByIdAndUpdate(id, updatedUserData, { new: true, runValidators: true });

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        console.error('Error updating user by ID:', error.message);
        if (error.name === 'CastError' && error.kind === 'ObjectId') {
            return res.status(400).json({ message: 'Invalid User ID format' });
        }
        res.status(500).json({ message: 'Server error' });
    }
});

// 4. DELETE: Remove a User by ID (Generic Delete)
// Endpoint: DELETE /users/:id
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params; // Get the user ID from the URL parameters

        const deletedUser = await User.findByIdAndDelete(id); // Find the user by ID and delete them

        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully', deletedUser });
    } catch (error) {
        console.error('Error deleting user by ID:', error.message);
        if (error.name === 'CastError' && error.kind === 'ObjectId') {
            return res.status(400).json({ message: 'Invalid User ID format' });
        }
        res.status(500).json({ message: 'Server error' });
    }
});

// --- Mongoose Checkpoint Specific Routes (Moved Here) ---

// 5. Create and Save a Record of a Model (Alternative to generic POST /users)
// Endpoint: POST /users/create-one
// Request Body Example: { "name": "Alice", "age": 30, "favoriteFoods": ["Pizza", "Burgers"] }
router.post('/create-one', async (req, res) => {
    try {
        const newPerson = new User(req.body); // Create a new instance of the User model
        const savedPerson = await newPerson.save(); // Call document.save()
        res.status(201).json(savedPerson);
    } catch (error) {
        console.error('Error creating single person via save():', error.message);
        res.status(400).json({ message: error.message });
    }
});

// 6. Create Many Records with Model.create()
// Endpoint: POST /users/create-many
// Request Body Example: [
//   { "name": "Bob", "age": 25, "favoriteFoods": ["Sushi", "Ramen"] },
//   { "name": "Mary", "age": 35, "favoriteFoods": ["Salad", "Fruits"] },
//   { "name": "Frank", "age": 40, "favoriteFoods": ["Steak"] }
// ]
router.post('/create-many', async (req, res) => {
    try {
        const arrayOfPeople = req.body; // Expecting an array of person objects in the request body
        if (!Array.isArray(arrayOfPeople) || arrayOfPeople.length === 0) {
            return res.status(400).json({ message: 'Request body must be a non-empty array of user objects.' });
        }
        const createdPeople = await User.create(arrayOfPeople); // Use Model.create() to insert multiple documents
        res.status(201).json(createdPeople);
    } catch (error) {
        console.error('Error creating many people via create():', error.message);
        res.status(400).json({ message: error.message });
    }
});

// 7. Use Model.find() to Search Your Database
// Find all the people having a given name
// Endpoint: GET /users/find-by-name/:name
// Example: GET /users/find-by-name/Mary
router.get('/find-by-name/:name', async (req, res) => {
    try {
        const { name } = req.params; // Get the name from URL parameters
        const people = await User.find({ name: name }); // Find all users with the specified name
        res.status(200).json(people);
    } catch (error) {
        console.error('Error finding people by name:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
});

// 8. Use Model.findOne() to Return a Single Matching Document from Your Database
// Find just one person which has a certain food in their favorites
// Endpoint: GET /users/find-one-food/:food
// Example: GET /users/find-one-food/Pizza
router.get('/find-one-food/:food', async (req, res) => {
    try {
        const { food } = req.params; // Get the food from URL parameters
        const person = await User.findOne({ favoriteFoods: food }); // Find one user with the specified food in their favorites
        if (!person) {
            return res.status(404).json({ message: `No person found with favorite food: ${food}` });
        }
        res.status(200).json(person);
    } catch (error) {
        console.error('Error finding one person by favorite food:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
});

// 9. Use Model.findById() to Search Your Database By _id
// Find the person having a given _id
// Endpoint: GET /users/find-by-id/:id
// Example: GET /users/find-by-id/60d5ec49f8c6b7001c8c1234 (replace with a valid ID)
router.get('/find-by-id/:id', async (req, res) => {
    try {
        const { id } = req.params; // Get the _id from URL parameters
        const person = await User.findById(id); // Find one user by their _id
        if (!person) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(person);
    } catch (error) {
        console.error('Error finding person by ID:', error.message);
        if (error.name === 'CastError' && error.kind === 'ObjectId') {
            return res.status(400).json({ message: 'Invalid User ID format' });
        }
        res.status(500).json({ message: 'Server error' });
    }
});

// 10. Perform Classic Updates by Running Find, Edit, then Save
// Find a person by _id, add "hamburger" to favoriteFoods, then save
// Endpoint: PUT /users/classic-update/:id
router.put('/classic-update/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const person = await User.findById(id); // Find the person by ID

        if (!person) {
            return res.status(404).json({ message: 'User not found for classic update' });
        }

        const foodToAdd = "hamburger";
        if (!person.favoriteFoods.includes(foodToAdd)) {
            person.favoriteFoods.push(foodToAdd);
        }

        const updatedPerson = await person.save(); // Save the modified document
        res.status(200).json(updatedPerson);
    } catch (error) {
        console.error('Error performing classic update (find, edit, save):', error.message);
        if (error.name === 'CastError' && error.kind === 'ObjectId') {
            return res.status(400).json({ message: 'Invalid User ID format' });
        }
        res.status(500).json({ message: 'Server error' });
    }
});

// 11. Perform New Updates on a Document Using Model.findOneAndUpdate()
// Find a person by Name and set their age to 20
// Endpoint: PUT /users/find-one-and-update/:name
// Example: PUT /users/find-one-and-update/Frank (sets Frank's age to 20)
router.put('/find-one-and-update/:name', async (req, res) => {
    try {
        const { name } = req.params;
        const updatedAge = 20; // Specific age to set as per instruction

        const updatedPerson = await User.findOneAndUpdate(
            { name: name },      // Query: find person by this name
            { age: updatedAge }, // Update: set age to the new value
            { new: true }        // Options: return the updated document (default is unmodified)
        );

        if (!updatedPerson) {
            return res.status(404).json({ message: `No person found with name: ${name}` });
        }
        res.status(200).json(updatedPerson);
    } catch (error) {
        console.error('Error performing findOneAndUpdate():', error.message);
        res.status(500).json({ message: 'Server error' });
    }
});

// 12. Delete One Document Using Model.findByIdAndRemove (or findOneAndRemove)
// Delete one person by their _id
// Endpoint: DELETE /users/find-by-id-and-remove/:id
// Example: DELETE /users/find-by-id-and-remove/60d5ec49f8c6b7001c8c5678 (replace with a valid ID)
router.delete('/find-by-id-and-remove/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const removedPerson = await User.findByIdAndRemove(id); // Using findByIdAndRemove()

        if (!removedPerson) {
            return res.status(404).json({ message: 'User not found for removal' });
        }
        res.status(200).json({ message: 'User successfully removed', removedPerson });
    } catch (error) {
        console.error('Error removing person by ID (findByIdAndRemove):', error.message);
        if (error.name === 'CastError' && error.kind === 'ObjectId') {
            return res.status(400).json({ message: 'Invalid User ID format' });
        }
        res.status(500).json({ message: 'Server error' });
    }
});

// 13. MongoDB and Mongoose - Delete Many Documents with Model.deleteMany()
// Delete all the people whose name is "Mary"
// Endpoint: DELETE /users/delete-many-by-name/:name
// Example: DELETE /users/delete-many-by-name/Mary
// Note: Model.remove() is deprecated; use deleteMany() for multiple document deletion
router.delete('/delete-many-by-name/:name', async (req, res) => {
    try {
        const { name } = req.params;
        const result = await User.deleteMany({ name: name }); // deleteMany() returns an object with 'deletedCount'

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: `No users found with name: ${name} to delete.` });
        }
        res.status(200).json({ message: `${result.deletedCount} user(s) with name "${name}" successfully removed.`, deletedCount: result.deletedCount });
    } catch (error) {
        console.error('Error removing multiple users (deleteMany):', error.message);
        res.status(500).json({ message: 'Server error' });
    }
});

// 14. Chain Search Query Helpers to Narrow Search Results
// Find people who like "burritos", sort by name, limit to 2 documents, and hide their age.
// Endpoint: GET /users/search-burritos
router.get('/search-burritos', async (req, res) => {
    try {
        const people = await User.find({ favoriteFoods: "burritos" }) // Find people who like burritos
                                 .sort({ name: 1 })                  // Sort by name ascending (1 for asc, -1 for desc)
                                 .limit(2)                           // Limit the results to 2 documents
                                 .select('-age -__v')               // Hide the 'age' and '__v' fields (projection)
                                 .exec();                            // Execute the query

        res.status(200).json(people);
    } catch (error) {
        console.error('Error chaining search queries:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
});

export default router; // Export the router
