// // Import required modules
// import express from 'express';
// import mongoose from 'mongoose';
// import Shop from '../mongoDb/Shop_reg_Schema';
// import
// // Create Express app
// const app = express();

// // Connect to MongoDB (replace 'mongodb://localhost:27017/your_database_name' with your actual MongoDB connection URL)
// await mongoose.connect('mongodb://localhost:27017/projectDatabase', { useNewUrlParser: true, useUnifiedTopology: true });
// console.log('Connected to MongoDB');

// // Define a route to fetch data from MongoDB and send it to the frontend
// app.get('/api/v1/shops', async (req, res) => {
//     try {
//         // Fetch data from MongoDB (example using Mongoose)
//         const shops = await Shop.find(); // Assuming Shop is your Mongoose model for shops

//         // Send the fetched data as a response
//         res.json(shops);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         res.status(500).json({ error: 'Error fetching data' });
//     }
// });
import express from 'express';
import bodyParser from 'body-parser';
import Shop from '../mongoDb/Shop_reg_Schema.js';

const router = express.Router();

// Middleware to parse JSON data in the request body
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());



