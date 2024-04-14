import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Define the schema for Order Items
const orderItemSchema = new Schema({
    menuItemId: {
        type: String,
        // validate: {
        //     validator: function (v) {
        //         return mongoose.Types.ObjectId.isValid(v);
        //     },
        //     message: props => `${props.value} is not a valid ObjectId.`
        // },
        required: true
    },
    
    quantity: {
        type: Number,
        required: true
    },
    // You can add more details for customization if needed
});

// Define the schema for Order
const orderSchema = new Schema({
    customerId: {
        type: Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
        //required: true,
        // ref: 'Customer' // Reference to Customer model for customer details
    },
    items: [orderItemSchema], // Reference the Order Items schema
    // specialInstructions: {
    //     type: String
    // },
    tableNumber: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'preparing', 'ready for serving', 'served', 'completed'],
        default: 'pending'
    },
    orderTime: {
        type: Date,
        default: Date.now
    }
});

// Create the Order model
const Order = mongoose.model('Order', orderSchema);
export default Order;
