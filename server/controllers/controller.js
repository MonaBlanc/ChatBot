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
    const diet = req.query.diet;
    const dishtype = req.query.dishtype;
    try {
      // Build the query object based on the parameters
      let query = {};
  
      if (dishtype) {
        query.strCategory = dishtype;
      }
      query = { strCategory: 'Chicken' };
      // Fetch the meals from the database
      const meal = await Meal.find(query).limit(1);

    if(meal !== null){
        console.log(meal.strMeal);
        res.json(meal);
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
  

