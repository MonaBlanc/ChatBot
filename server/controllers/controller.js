const axios = require('axios')
const Meal = require('../models/meal');

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
    console.log(dishtype);
    try {
      // Build the query object based on the parameters
      const query = {};
      if (diet) {
        query.strCategory = diet;
      }
      else if (dishtype) {
        query.strCategory = dishtype;
      }
      // Fetch the meals from the database
      const data = await Meal.find(query).limit(10);

    if(data !== []){
        console.log(data.length);
        res.json({meals: data});
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
  

