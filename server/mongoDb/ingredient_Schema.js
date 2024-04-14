import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Define the schema for Ingredient
const ingredientSchema = new Schema({
    ingredientId: {
        type: Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(), // Use a function to generate ObjectId
        unique: true // Ensure uniqueness
    },
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    unit: {
        type: String,
        required: true
    },
    unitPrice: {
        type: Number,
        required: true
    },
    expiryDate: {
        type: Date,
        required: true
    }
});

// Create the Ingredient model
const Ingredient = mongoose.model('Ingredient', ingredientSchema);

export default Ingredient;
