import express from 'express';
import bodyParser from 'body-parser';
import Ingredient from '../mongoDb/ingredient_Schema.js'; // Import the Ingredient model correctly

const router = express.Router();

// Middleware to parse JSON data in the request body
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Route to handle form submission for ingredients
router.post('/ingredient', async (req, res) => {
  try {
    const { name, quantity, unit, unitPrice, expiryDate } = req.body;

    // Validate input data as needed
    if (!name || !quantity || !unit || !unitPrice || !expiryDate) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Create a new ingredient instance
    const newIngredient = new Ingredient({
      name,
      quantity,
      unit,
      unitPrice,
      expiryDate,
    });

    // Save the new ingredient to the database
    await newIngredient.save();

    res.status(200).json({ message: 'Ingredient added successfully' });
  } catch (error) {
    console.error('Error adding ingredient:', error);
    res.status(500).json({ error: 'Error adding ingredient' });
  }
});

export default router;
