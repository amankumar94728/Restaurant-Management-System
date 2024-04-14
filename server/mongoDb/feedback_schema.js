import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Define the schema for Feedback
const feedbackSchema = new Schema({
    // feedbackId: {
    //     type: Schema.Types.ObjectId,
    //     required: true,
    //     unique: true
    // },
    userId: {
        type: String,  //Schema.Types.ObjectId
        ref: 'User',
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    comment: {
        type: String
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

// Create the Feedback model
const Feedback = mongoose.model('Feedback', feedbackSchema);

 export default Feedback ;
