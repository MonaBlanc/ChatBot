import axios from 'axios';

// const baseURL = "http://localhost:4000/api";
// const baseURL = "https://chefbot-g5cc0d0gp-draxx023.vercel.app/api"

const baseURL = process.env.REACT_APP_API_URL;

const getRandomMeal = async () => {
    try {
        const response = await axios.get(`${baseURL}/random`);
        return await Promise.resolve(response);
    } catch (error) {
        return await Promise.reject(error.response);
    }
}

const getFormMeal = async (diet, dishtype, mainIngredient) => {
    try {
        const response = await axios.get(`${baseURL}/formMeal`, { params: { diet, dishtype, mainIngredient } });
        return await Promise.resolve(response);
    } catch (error) {
        return await Promise.reject(error.response);
    }
}

const postGroceryList = async (username, mealId, list) => {
    const body = {username, mealId, list}
    try {
        const response = await axios.post(`${baseURL}/grocery-list`, body);
        return await Promise.resolve(response);
    } catch (error) {
        return await Promise.reject(error.response);
    }
}

const getGroceryList = async (username) => {
    try {
        const response = await axios.get(`${baseURL}/grocery-list`, { params: { username } });
        return await Promise.resolve(response);
    } catch (error) {
        return await Promise.reject(error.response);
    }
}

export {
    getRandomMeal, getFormMeal, postGroceryList, getGroceryList
}
