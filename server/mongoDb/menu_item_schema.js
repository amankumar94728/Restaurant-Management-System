import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Define the schema for Menu Item
const menuItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    enum: ['appetizer', 'main_course', 'dessert', 'beverage'],
    required: true,
  },
  availability: {
    type: Boolean,
    default: true,
  },
  image: {
    data: Buffer,
    contentType: String,
  },
  quantity: {
    type: Number,
    default: 0, // Assuming default quantity is 0
  },
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

export default MenuItem;
