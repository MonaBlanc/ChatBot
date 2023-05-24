const mongoose = require('mongoose');


const category = new mongoose.Schema({
    strCategory: {
      type: String,
      required: true,
      unique: true
    },
    strCategoryThumb: {
        type: String,
        required: true,
        unique: true
      },
    strCategoryDescription: {
        type: String,
        required: true,
        unique: true
    },
  });

  module.exports = Category = mongoose.model('category', category);