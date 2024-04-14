import { Schema, model } from "mongoose";

// Define the schema for shop registration
const shopSchema = new Schema({
    shopName: {
        type: String,
        required: true
    },
    ownerName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true 
    },
    phoneNumber: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zipCode: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    gstNumber: {
        type: String,
        required: true
    },
    shopLogoUrl: {
        type: String,
        default: "default_logo_url.jpg" 
    },
    registrationName:{
        type:String,
        required:true,
        unique:true
    },
    registrationDate: {
        type: Date,
        default: Date.now
    }
});

// Create a model using the schema
const Shop = model("Shop", shopSchema);

export default Shop;
