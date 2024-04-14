import express from 'express';
import bodyParser from 'body-parser';
import { Transaction } from '../mongoDb/transaction_schema.js';

const router = express.Router();

// Middleware to parse JSON data in the request body
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Route to handle form submission for transactions
router.post('/transactions', async (req, res) => {
  try {
    console.log(req.body);
    const { transactionId, orderId, userId, amount, paymentMethod } = req.body;

    // Create a new transaction instance
    const newTransaction = new Transaction({
      transactionId,
      orderId,
      userId,
      amount,
      paymentMethod,
      transactionTime: new Date(), // Use current time for transactionTime
    });

    // Save the new transaction to the database
    await newTransaction.save();

    res.status(200).json({ message: 'Transaction saved successfully' });
  } catch (error) {
    console.error('Error saving transaction:', error);
    res.status(500).json({ error: 'Error saving transaction' });
  }
});

export default router;
