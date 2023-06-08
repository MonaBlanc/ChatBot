const axios = require('axios')
const Meal = require('../models/meal');
const GroceryList = require('../models/grocery-list');

// Controller for random meal
exports.randomMeal = async (req, res) => {
    try {
      const { data: { meals: [mealData] } } = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
  
      const existingMeal = await Meal.findOne({ idMeal: mealData.idMeal });
      if (existingMeal) {
        console.log('Meal already exists:', existingMeal.strMeal);
        res.json(existingMeal);
      } else {
        const meal = new Meal({
          ...mealData,
        });
        const savedMeal = await meal.save();
        console.log('New meal saved:', savedMeal.strMeal);
        res.json(savedMeal);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ err: `Error while loading random meal: ${error.message}` });
    }
  };

// Controller for form meal
exports.formMeal = async (req, res) => {
  const diet = req.query.diet;
  const dishtype = req.query.dishtype;
  const mainIngredient = req.query.mainIngredient;
  try {
    // Build the query object based on the parameters
    const query = {};
    if (mainIngredient)
      query.strCategory = mainIngredient;
    else if (diet) {
      query.strCategory = diet;
    }
    else if (dishtype) {
      query.strCategory = dishtype;
    }
    // Fetch the meals from the database
    
    const data = await Meal.find(query).limit(10);

  if(data.length !== 0){
    console.log("Meal found in the db!");
    const randomNumber = Math.floor(Math.random() * data.length);
    res.json({meal: data[randomNumber]});
  }
  else{
    console.log("No meal found in the db!");
      try {
        let result;
        if (mainIngredient) {
          result = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${mainIngredient}`);
        }
        else if (diet) {
          result = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${diet}`);
        }
        else if (dishtype) {
          result = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${dishtype}`);
        }
        const randomNumber = Math.floor(Math.random() * 5);
        console.log(result);
        const { data: { meals: [mealData] } } = (mainIngredient !== "Goat") ? await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${result.data.meals[randomNumber].idMeal}`) : await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${result.data.meals[0].idMeal}`);
        const meal = new Meal({
          ...mealData,
          });
        const savedMeal = await meal.save();
        console.log('New meal saved:', savedMeal.strMeal);
        res.json(savedMeal);
        } catch (error) {
          console.error(error);
          res.status(500).json({ err: `Error while loading random meal: ${error.message}` });
        }
  }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.setUserGroceryList = async (req, res) => {
  try {
    const listItems = req.body.list;
    const username = req.body.username;

    const existingList = await GroceryList.findOneAndDelete({username})
    console.log(existingList);
    if(existingList)
      console.log("Old list deleted successfully!");
    else
      console.log("No list found.");

    // Create a new grocery list document
    const groceryList = await GroceryList.create({
      username,
      items: listItems
    });

    res.status(201).json(groceryList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while saving the grocery list.' });
  }
};

exports.getUserGroceryList = async (req, res) => {
  try {
    const username = req.query.username;
    // Find the grocery list based on the username
    const groceryList = await GroceryList.findOne({ username });

    if (!groceryList) {
      return res.status(404).json({ error: 'Grocery list not found.' });
    }

    res.status(200).json(groceryList.items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while retrieving the grocery list.' });
  }
};

