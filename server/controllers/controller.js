const axios = require('axios')
const Meal = require('../models/meal');
const Category = require('../models/category')
const mongoose = require('mongoose')

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
    const params = req.query;
    const category = params.category;
    const mainIngredient = params.mainIngredient;
    try {
      // Build the query object based on the parameters
      const query = {};
  
      if (category) {
        query.strCategory = category;
      }
  
      if (mainIngredient) {
        query.$or = [
          { strIngredient1: mainIngredient },
          { strIngredient2: mainIngredient },
          { strIngredient3: mainIngredient },
          { strIngredient4: mainIngredient },
          { strIngredient5: mainIngredient },
          { strIngredient6: mainIngredient },
          { strIngredient7: mainIngredient },
          { strIngredient8: mainIngredient },
          { strIngredient9: mainIngredient },
          { strIngredient10: mainIngredient },
          { strIngredient11: mainIngredient },
          { strIngredient12: mainIngredient },
          { strIngredient13: mainIngredient },
          { strIngredient14: mainIngredient },
          { strIngredient15: mainIngredient },
          { strIngredient16: mainIngredient },
          { strIngredient17: mainIngredient },
          { strIngredient18: mainIngredient },
          { strIngredient19: mainIngredient },
          { strIngredient20: mainIngredient },
        ];
      }
  
      // Fetch the meals from the database
      const meals = await Meal.find(query).limit(10);

    if(meals.length !== 0){
        console.log(meals);
        res.json(meals);
    }
    else{
        try {
            const { data: { meals: [result] } } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
            const { data: { meals: [mealData] } } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${result.idMeal}`);
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
  

