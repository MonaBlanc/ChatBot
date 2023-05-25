import axios from 'axios';

const baseURL = "http://localhost:4000/api";

const getRandomMeal = async () => {
    try {
        const response = await axios.get(`${baseURL}/random`);
        return await Promise.resolve(response);
    } catch (error) {
        return await Promise.reject(error.response);
    }
}

const getFormMeal = async (diet, dishtype) => {
    console.log("Meal service:", diet, dishtype);
    try {
        const response = await axios.get(`${baseURL}/formMeal`, { params: { diet, dishtype } });
        return await Promise.resolve(response);
    } catch (error) {
        return await Promise.reject(error.response);
    }
}
export {
    getRandomMeal, getFormMeal
}
