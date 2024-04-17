import express from "express";
import FoodCart from "../mongoDb/cartSchema.js";
import { Types } from "mongoose";

const router = express.Router();

router.post('/add',async (req,res)=>{
    try {
        // Extract userId, itemId, quantity, and price from the request body
        const { userId, itemId, quantity, price } = req.body;
        let foodCart = await FoodCart.findOne({ userId });

        if (!foodCart) {
            foodCart = new FoodCart({
                userId,
                items: [],
                totalPrice: 0
            });
        }
        foodCart.items.push({ itemId, quantity, price });
        foodCart.totalPrice += quantity * price;
        await foodCart.save();
        res.status(200).json({ message: 'Item added to cart successfully' });
    } catch (error) {
        console.error('Error adding item to cart:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})
export default router;