import axios from 'axios';

const baseURL = "http://localhost:4000/api";

// register request
const getRandomMeal = (newUser) => {
    // GET request on http://localhost:8080/api/random
    // return axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`)
    return axios.get(`${baseURL}/random`)
        .then(response => {
            return Promise.resolve(response);
        })
        .catch(error => {
            return Promise.reject(error.response);
        });
}

const getFormMeal = (category, mainIngredient) => {
    console.log(category, mainIngredient);
    // GET request on http://localhost:4000/api/register
    // let filter = "";
    // // Get Filtered Meal
    // if (diet === "all") {
    //     filter += "";
    // }
    // else {
    //     filter += diet;
    // }
    // if (dishtype === "all") {
    //     filter += "";
    // }
    // else {
    //     filter += dishtype;
    // }
    // if (main === "all") {
    //     filter += "";
    // }
    // else {
    //     filter += main;
    // }
    // // console.log(filter);
    // // console.log(`https://www.themealdb.com/api/json/v1/1/random.php/filter.php?c=${filter}`);
    // // return axios.get(`https://www.themealdb.com/api/json/v1/1/random.php/filter.php?c=${filter}`)
    return axios.get(`${baseURL}/formMeal`, {params: {category, mainIngredient}})    
    .then(response => {
            return Promise.resolve(response);
        })
        .catch(error => {
            return Promise.reject(error.response);
        });
}

const getRecipe = (id) => {
    // GET request on http://localhost:4000/api/register
    return axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(response => {
            if (response) {
                return Promise.resolve(response);
            }
        })
        .catch(error => {
            return Promise.reject(error.response);
        });
}
export {
    getRandomMeal, getRecipe, getFormMeal
}