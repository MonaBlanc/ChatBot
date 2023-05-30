import "./GroceryList.css";
import extractIngredients from "./extractIngredients";

const GroceryList = (props) => {
    const meal = props.meal;
    const ingredients = extractIngredients(meal);
    
    return (
        <>
            {
                <div className="grocery-list row">
                    <h3>{meal.strMeal}</h3>
                    <form>
                        <div className="columns five">
                            <h5>Ingredients:</h5>
                            {ingredients.map(ingredient => 
                                <div class="checkList">
                                    <input id={ingredient} type="checkbox" defaultChecked/>                                    
                                    <label className="toBuy-label" htmlFor={ingredient}>
                                    {ingredient}
                                    </label>
                                </div>
                            )}
                        </div>
                        <button type="submit" className="opening-option-button">
                            Submit
                        </button>
                    </form>
                </div>
            }
        </>
    );
};

export default GroceryList;
