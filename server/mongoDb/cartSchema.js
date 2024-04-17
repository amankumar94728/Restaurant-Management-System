import { Schema, model } from 'mongoose';
import User from './testSchema.js ';
import MenuItem from './menu_item_schema.js';

const cartItemSchema = new Schema({
    itemId: { type: Schema.Types.ObjectId, ref: MenuItem, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true }
});

const foodCartSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: User, required: true },
    items: [cartItemSchema],
    totalPrice: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }
});

const FoodCart = model('FoodCart', foodCartSchema);

export default FoodCart;
