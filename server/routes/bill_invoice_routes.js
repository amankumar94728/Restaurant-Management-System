import express from 'express';
import Bill from '../models/bill.js';
import Order from '../models/order.js';
import Customer from '../models/customer.js';
import bodyParser from 'body-parser';

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Create a new bill
router.post('/bills', async (req, res) => {
    try {
        const { orderId, customerId, totalAmount, paymentMethod } = req.body;

        // Fetch order details
        const order = await Order.findById(orderId);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        // Fetch customer details
        const customer = await Customer.findById(customerId);
        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' });
        }

        // Calculate bill details
        const billData = {
            orderId,
            customerId,
            totalAmount,
            paymentMethod,
            billDate: new Date(),
            items: order.items, // You can customize this based on your schema
            discounts: customer.discount, // Apply customer-specific discounts
        };

        const bill = new Bill(billData);
        const newBill = await bill.save();
        res.status(201).json(newBill);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all bills
router.get('/bills', async (req, res) => {
    try {
        const bills = await Bill.find();
        res.json(bills);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a single bill
router.get('/bills/:id', async (req, res) => {
    try {
        const bill = await Bill.findById(req.params.id);
        if (!bill) {
            return res.status(404).json({ message: 'Bill not found' });
        }
        res.json(bill);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update a bill
router.patch('/bills/:id', async (req, res) => {
    try {
        const bill = await Bill.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(bill);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a bill
router.delete('/bills/:id', async (req, res) => {
    try {
        await Bill.findByIdAndDelete(req.params.id);
        res.json({ message: 'Bill deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;
