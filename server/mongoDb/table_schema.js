import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Define the schema for Table
const tableSchema = new Schema({
    tableNumber: {
        type: Number,
        required: true,
        unique: true,
    },
    capacity: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ['available', 'reserved', 'occupied'],
        default: 'available',
    },
});

const Table = mongoose.model('Table', tableSchema);

export default Table;