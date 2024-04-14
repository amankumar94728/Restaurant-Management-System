import mongoose from "mongoose";
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
    // customerId: {
    //     type: Schema.Types.ObjectId,
    //     default: () => new mongoose.Types.ObjectId(),
    //     ref: 'Customer', // Reference to the Customer model if needed
    //     required: true
    // },
    // tableId: {
    //     type: Schema.Types.ObjectId,
    //     default: () => new mongoose.Types.ObjectId(),
    //     ref: 'Table', // Reference to the Table model
    //     required: true
    // },
    reservationTime: {
        type: Date,
        required: true
    },
    partySize: {
        type: Number,
        required: true
    },
    specialRequests: {
        type: String
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'cancelled'],
        default: 'pending'
    }
});

const Reservation = mongoose.model('Reservation', reservationSchema);
export default Reservation;
