import React from "react";
import { useState, useEffect } from "react";
import "./RandomList.css";
import { useDispatch } from 'react-redux';
import { randomMealAction } from '../../container/actions';

const RandomList = () => {
    const dispatch = useDispatch();
    const [meal, setMeal] = useState({});
    useEffect(() => {
        const random = dispatch(randomMealAction());
        random
            .then(data => {
                setMeal(data.meals[0]);
            }).catch(error => {
                alert(error.data.err);
            });
    }, [])
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
                <div className="infos row">
                    <div className="columns five">
                        <img src={meal.strMealThumb} alt="Meal Image" />
                        {meal.strCategory ? <p><strong>Category:</strong> {meal.strCategory}</p> : ''}
                        {meal.strArea ? <p><strong>Area:</strong> {meal.strArea}</p> : ''}
                        {meal.strTags ? <p><strong>Tags:</strong> {meal.strTags.split(',').join(', ')}</p> : ''}
                        <h5>Ingredients:</h5>
                        <ul>
                            {ingredients.map(ingredient => <li>{ingredient}</li>)}
                        </ul>
                    </div>
                    <div className="columns seven">
                        <h4>{meal.strMeal}</h4>
                        <p>{meal.strInstructions}</p>
                    </div>
                </div>
            }
        </>
    );
};

export default RandomList;