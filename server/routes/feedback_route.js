import express from 'express';
import bodyParser from 'body-parser';
// import Feedback from '../mongoDb/feedback_schema.js'; // Import the Feedback model correctly
import  Feedback  from '../mongoDb/feedback_schema.js';

const router = express.Router();

// Middleware to parse JSON data in the request body
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Route to handle form submission for feedback
router.post('/shopfeedback', async (req, res) => {
  try {
    const { userId, rating, comment } = req.body;

    // Validate input data as needed
    if (!userId || !rating) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Create a new feedback instance
    const newFeedback = new Feedback({

      userId,
      rating,
      comment,
      timestamp: Date.now(), // Use current time for timestamp
    });

    // Save the new feedback to the database
    await newFeedback.save();

    res.status(200).json({ message: 'Feedback saved successfully' });
  } catch (error) {
    console.error('Error saving feedback:', error);
    res.status(500).json({ error: 'Error saving feedback' });
  }
});

export default router;
