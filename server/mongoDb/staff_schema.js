const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for Staff
const staffSchema = new Schema({
    staffId: {
        type: Schema.Types.ObjectId,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ['chef', 'waiter', 'manager', 'other']
    },
    contactNumber: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    joiningDate: {
        type: Date,
        required: true
    }
});

// Create the Staff model
const Staff = mongoose.model('Staff', staffSchema);

module.exports = Staff;