const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for User
const ShopuserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['customer', 'staff', 'admin'],
        default: 'customer'
    },
    phoneNumber: {
        type: String
    },
    address: {
        type: String
    },
    orders: [{
        type: Schema.Types.ObjectId,
        ref: 'Order'
    }]
});

// Create the User model
const ShopUser = mongoose.model('User', ShopuserSchema);

export default ShopUser;
