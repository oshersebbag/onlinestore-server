const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const productScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    short: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    categoryId: {
        type: ObjectId,
        required: true    },
    image: {
        type: String,
        required: true
        }
  });
  
  const Product = mongoose.model('product', productScheme);
  module.exports = Product;