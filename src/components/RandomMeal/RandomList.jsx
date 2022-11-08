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
    const item = [];
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
                        {meal.strTags ? <p><strong>Tags:</strong> {meal.strTags.split(',').join(', ')}</p> : ''}
                        <h5>Ingredients:</h5>
                        <ul>
                            {ingredients.map(ingredient => `<li>{ingredient}</li>`).join('')}
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
    //}




    /*<div className="content">
    <img src={item.strMealThumb} alt="" />
    <div className="inner-content">
        <h1>{item.strMeal}</h1> 
        <h2>{item.strArea} Food</h2>
        <h3>Category {item.strCategory}</h3>
    </div>
    <div className="recipe-details">
        <div className="ingredients">
            <h2>Ingredients</h2><br />
            <h4>{item.strIngredient1}:{item.strMeasure1}</h4>
            <h4>{item.strIngredient2}:{item.strMeasure2}</h4>
            <h4>{item.strIngredient3}:{item.strMeasure3}</h4>
            <h4>{item.strIngredient4}:{item.strMeasure4}</h4>
            <h4>{item.strIngredient5}:{item.strMeasure5}</h4>
            <h4>{item.strIngredient6}:{item.strMeasure6}</h4>
            <h4>{item.strIngredient7}:{item.strMeasure7}</h4>
            <h4>{item.strIngredient8}:{item.strMeasure8}</h4>
        </div>
        <div className="instructions">
            <h2>Instructions</h2><br />
            <h4>{item.strInstructions}</h4>
        </div>
    </div>
    <div className="video">
        <iframe width="100%" height="515" title="recipeVideo" src={`https://www.youtube.com/embed/${item.idMeal}`}></iframe>
    </div>
</div>;*/

    // return <div className="random-list-container">{createMeal()}</div>;
    /* <div className="content">
        
        <img src={item.strMealThumb} alt="" />
        <div className="inner-content">
            <h1>{item.strMeal}</h1>
            <h2>{item.strArea} Food</h2>
            <h3>Category {item.strCategory}</h3>
        </div>
    
        <div className="recipe-details">
            <div className="ingredients">
                <h2>Ingredients</h2><br />
                <h4>{item.strIngredient1}:{item.strMeasure1}</h4>
                <h4>{item.strIngredient2}:{item.strMeasure2}</h4>
                <h4>{item.strIngredient3}:{item.strMeasure3}</h4>
                <h4>{item.strIngredient4}:{item.strMeasure4}</h4>
                <h4>{item.strIngredient5}:{item.strMeasure5}</h4>
                <h4>{item.strIngredient6}:{item.strMeasure6}</h4>
                <h4>{item.strIngredient7}:{item.strMeasure7}</h4>
                <h4>{item.strIngredient8}:{item.strMeasure8}</h4>
            </div>
            <div className="instructions">
                <h2>Instructions</h2><br />
                <h4>{item.strInstructions}</h4>
            </div>
        </div>
        <div className="video">
            <iframe width="
            100%" height="515" title="recipeVideo"
                src={`https://www.youtube.com/embed/${id}`}>
            </iframe>
        </div>

    </div>*/

};

export default RandomList;