import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const billSchema = new Schema({
    orderId: {
        type: Schema.Types.ObjectId,
        ref: 'Order', // Reference to the Order model
        required: true,
    },
    customerId: {
        type: Schema.Types.ObjectId,
        ref: 'Customer', // Reference to the Customer model
        required: true,
    },
    totalAmount: {
        type: Number,
        required: true,
    },
    paymentMethod: {
        type: String,
        required: true,
    },
    billDate: {
        type: Date,
        default: Date.now,
    },
    items: [
        {
            // Define the structure of items in the bill
            menuItemId: {
                type: Schema.Types.ObjectId,
                ref: 'MenuItem', // Reference to the MenuItem model if needed
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
            // Add more fields as needed for item details
        },
    ],
    discounts: {
        type: Number,
        default: 0, // Default discount value
    },
});

const Bill = mongoose.model('Bill', billSchema);

export default Bill;
