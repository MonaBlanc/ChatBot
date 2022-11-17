import React from "react";
import { useState, useEffect } from "react";
import "./RandomList.css";
import axios from 'axios';

const RandomList = () => {
    const [meal, setMeal] = useState({});
    useEffect(() => {
        getMeals();
    }, []);
    async function getMeals() {
        await axios(`https://www.themealdb.com/api/json/v1/1/random.php`)
            .then(response => setMeal(response.data.meals[0]))
    }
    console.log(meal);
    return (
        <>
            {
                <div className="row">
                    <div className="columns five">
                        <img src={meal.strMealThumb} alt="Meal Image" />
                        {meal.strCategory ? `<p><strong>Category:</strong> {meal.strCategory}</p>` : ''}
                        {meal.strArea ? `<p><strong>Area:</strong> ${meal.strArea}</p>` : ''}
                        {meal.strTags ? `<p><strong>Tags:</strong> ${meal.strTags.split(',').join(', ')}</p>` : ''}
                    </div>
                    <div className="columns seven">
                        <h4>{meal.strMeal}</h4>
                    </div>
                </div>
            }

        </>

    );

};

export default RandomList;