import "./Recipe.css";
import "../../assets/css/Chefbot.css";
import React from "react";
import extractIngredients from "./extractIngredients";

const Recipe = (props) => {
    const meal = props.meal;
    const ingredients = extractIngredients(meal);
    return (
        <>
            {
                <div className="infos row">
                    <div className="columns seven">
                        <h3 className="text-xl text-orange">{meal.strMeal}</h3>
                    </div>
                    <div className="columns five">
                        <img src={meal.strMealThumb} alt="Meal Image" />
                        <p id="cat"><strong>Category:</strong> {meal?.strCategory}</p>
                        <p id="area"><strong>Area:</strong> {meal?.strArea}</p>
                        <p id="tags"><strong>Tags:</strong> {meal?.strTags?.split(',').join(', ')}</p>
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
