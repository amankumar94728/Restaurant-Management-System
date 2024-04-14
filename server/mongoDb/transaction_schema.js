import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Define the schema for Transaction
const transactionSchema = new Schema({
    transactionId: {
        type: Schema.Types.ObjectId,
        required: true,
        unique: true
    },
    orderId: {
        type: Schema.Types.ObjectId,
        ref: 'Order',
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true
    },
    transactionTime: {
        type: Date,
        default: Date.now
    }
});

// Create the Transaction model
const Transaction = mongoose.model('Transaction', transactionSchema);

export {Transaction};
