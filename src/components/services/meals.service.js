import axios from 'axios';

// const baseURL = "http://localhost:4000/api";

// register request
const getRandomMeal = (newUser) => {
    // GET request on http://localhost:4000/api/register
    return axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then(response => {
            if (response) {
                return Promise.resolve(response);
            }
        })
        .catch(error => {
            return Promise.reject(error.response);
        });
}

const getRecipe = (id) => {
    // GET request on http://localhost:4000/api/register
    return axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}}`)
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
    getRandomMeal, getRecipe,
}