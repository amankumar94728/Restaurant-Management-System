import express from 'express';
import bodyParser from 'body-parser';
import User from '../mongoDb/testSchema.js';

const router = express.Router();

// Middleware to parse JSON data in the request body
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Route to handle user sign-in
router.post('/Sgn', async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    console.log(email,password);

    // Find the user in the database based on the provided email
    const user = await User.findOne({ email:email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Check if the provided password matches the user's password
    if (user.password !== password) {
      return res.status(401).json({ error: 'Incorrect password' });
    }
     
    // User authentication successful
    res.status(200).json({ message: 'User authenticated successfully' });
  } catch (error) {
    console.error('Error signing in:', error);
    res.status(500).json({ error: 'Error signing in' });
  }
});

export default router;
