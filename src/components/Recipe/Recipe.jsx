import "./Recipe.css";
import "../../assets/css/Chefbot.css";
import React from "react";

const Recipe = (props) => {
    const meal = props.meal;
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
                    <div className="columns seven">
                        <h3 className="text-xl text-orange">{meal.strMeal}</h3>
                    </div>
                    <div className="columns five">
                        <img src={meal.strMealThumb} alt="Meal Image" />
                        {meal.strCategory ? <p><strong>Category:</strong> {meal.strCategory}</p> : ''}
                        {meal.strArea ? <p><strong>Area:</strong> {meal.strArea}</p> : ''}
                        {meal.strTags ? <p><strong>Tags:</strong> {meal.strTags.split(',').join(', ')}</p> : ''}
                        <h5>Ingredients:</h5>
                        <ul>
                            {ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
                        </ul>
                    </div>
                    <div className="columns seven">
                        <p>{meal.strInstructions}</p>
                    </div>
                </div>
            }
        </>
    );
};

export default Recipe;
