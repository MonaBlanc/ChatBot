import React from "react";
import { useState, useEffect } from "react";
import "./Recipe.css";
import axios from 'axios';


const Recipe = () => {
    const [meal, setMeal] = useState({});
    useEffect(() => {
        getMeals();
    }, []);
    async function getMeals() {
        await axios(`https://www.themealdb.com/api/json/v1/1/random.php`)
            .then(response => setMeal(response.data.meals[0]))
    }
    console.log(meal);
    // const createMeal = (item) => {
    const ingredients = [];
    // Get all ingredients from the object. Up to 20
    for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
            ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
        } else {
            // Stop if no more ingredients
            break;
        }
    }
    return (
        <>
            {
                <div className="row">
                    <div className="columns five">
                        <img src={meal.strMealThumb} alt="Meal Image" />
                        {meal.strCategory ? <p><strong>Category:</strong> {meal.strCategory}</p> : ''}
                        {meal.strArea ? <p><strong>Area:</strong> {meal.strArea}</p> : ''}
                    </div>
                    <div className="columns seven">
                        <h4>{meal.strMeal}</h4>
                        <h5>Ingredients:</h5>
                        <ul>
                            {ingredients.map(ingredient => ingredient).join('')}
                        </ul>
                        <p>{meal.strInstructions}</p>
                    </div>
                </div>
                
            }

        </>

    );
};

export default Recipe;