const axios = require('axios')
// Controller for random meal
exports.randomMeal = async (req, res) => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`)
    .then((payload) => {
        const meal = payload.data.meals[0]
        res.send(payload.data.meals[0])
    })
    .catch((error)=> 
    res.status(500)
    .json({err: `Error while loading random meal : ${error.message}`}))
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


