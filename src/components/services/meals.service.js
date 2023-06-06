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
    try {
        const response = await axios.get(`${baseURL}/formMeal`, { params: { diet, dishtype } });
        return await Promise.resolve(response);
    } catch (error) {
        return await Promise.reject(error.response);
    }
}

const postGroceryList = async (username, list) => {
    const body = {username, list}
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
