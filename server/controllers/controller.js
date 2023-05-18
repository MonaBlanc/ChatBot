const axios = require('axios')
const Meal = require('../models/meal');
const mongoose = require('mongoose')

// Controller for random meal
exports.randomMeal = async (req, res) => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`)
    .then(async (payload) => {
        const mealData = payload.data.meals[0]
        const existingMeal = await Meal.findOne({ idMeal: mealData.idMeal });
        if (existingMeal) {
            console.log('Meal already exists: ', existingMeal.strMeal);
            res.json(mealData); 
        } 
        else {
            const meal = new Meal({
                ...mealData
            });
            const mealSaved = await meal.save();
            console.log('New meal saved: ', mealSaved);
            res.json(mealData); 
        }
    })
    .catch((error) => {
        console.log(error)
        res.status(500).json({err: `Error while loading random meal : ${error.message}`});
    })
}

// Controller for form meal
exports.formMeal = async (req, res) => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/random.php/filter.php?c=${req.query.filter}`)
    .then((payload) => {
        const meal = payload.data.meals[0]
        res.send(payload.data.meals[0])
    })
    .catch((error)=> 
    res.status(500)
    .json({err: `Error while loading specific meal : ${error.message}`}))
}


