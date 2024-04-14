import express from 'express';
import Order from '../mongoDb/order_item.js';
const router = express.Router();

router.post('/orders', async (req, res) => {
    console.log(req.body);
    const {  customerId, items, specialInstructions, tableNumber } = req.body;
    // Basic validation
    if (!items || !tableNumber) {
        return res.status(400).json({ message: 'Customer ID, items, and table number are required.' });
    }
    const order = new Order({
        customerId,
        items,
        specialInstructions,
        tableNumber,
        status: 'pending', // Default status is pending
    });
    console.log("Created order object:", order);

    try {
        console.log("Saving order...");
        const newOrder = await order.save();
        console.log("Order saved successfully:", newOrder);
        res.status(201).json(newOrder);
    } catch (err) {
        console.error("Error saving order:", err);
        res.status(400).json({ message: err.message });
    }
});



// // Route to create a new order
// router.post('/orders', async (req, res) => {
//     const { customerId, items, specialInstructions, tableNumber } = req.body;

//     // Basic validation
//     if (!customerId || !items || !tableNumber) {
//         return res.status(400).json({ message: 'Customer ID, items, and table number are required.' });
//     }

//     const order = new Order({
//         customerId,
//         items,
//         specialInstructions,
//         tableNumber,
        
//         status: 'pending', // Default status is pending
//     });

//     try {
//         const newOrder = await order.save();
//         res.status(201).json(newOrder);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// });

// Route to update order status (e.g., preparing, ready for serving)
router.patch('/orders/:id', async (req, res) => {
    try {
        const { status } = req.body;
        if (!status) {
            return res.status(400).json({ message: 'Status is required for updating the order.' });
        }

        const order = await Order.findByIdAndUpdate(req.params.id, { status }, { new: true });
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        res.json(order);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Route to get all orders
router.get('/orders', async (req, res) => {
    try {
        //console.log(req.body);
        const orders = await Order.find();
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;
