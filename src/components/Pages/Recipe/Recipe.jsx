import extractIngredients from "../GroceryList/extractIngredients";
import "./Recipe.css";

const Recipe = (props) => {
    const meal = props.meal;
    const ingredients = extractIngredients(meal);
    return (
        <>
            {
                <div className="infos-recipe row">
                    <img className="thumb" alt="meal-thumb" src={meal.strMealThumb} />
                    <div className="columns seven recipe-title">
                        <h3 className="text-xl">{meal.strMeal}</h3>
                    </div>
                    <div className="columns five">
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
