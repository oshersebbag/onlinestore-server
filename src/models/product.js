const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    categoryId: {
        type: ObjectId,
        required: true
    }
  });
  
  const Product = mongoose.model('product', userSchema);
  module.exports = Product;