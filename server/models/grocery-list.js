const mongoose = require('mongoose');

const groceryList = new mongoose.Schema({
    username: {
      type: String,
      required: true
      },
    mealId: {
      type: Number,
      required: true
    },
    items: [
      {
        type: String,
        required: true
      }
    ]
  });
module.exports = GroceryList = mongoose.model('grocery-list', groceryList);