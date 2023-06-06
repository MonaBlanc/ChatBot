import "./GroceryList.css";
import extractIngredients from "./extractIngredients";

const GroceryList = (props) => {
    const meal = props.meal;
    const ingredients = extractIngredients(meal);
    const notCheckedIngredients = ingredients;
    const changeList = (e, ingredient) => {
        // console.log("Before: ", notCheckedIngredients);
        let index;
        if (!e.target.checked){
            index = notCheckedIngredients.indexOf(ingredient);
            if (index != -1)
                notCheckedIngredients.splice(index, 1)
        }
        // console.log("After: ", notCheckedIngredients)
    }
    const handleSubmit = (ingredients) => {
        
    }
    
    return (
        <>
            {
                <div className="grocery-list row">
                    <h3>{meal.strMeal}</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="columns five">
                            <h5>Ingredients:</h5>
                            {ingredients.map(ingredient => 
                                <div key={ingredient} className="checkList">
                                    <input id={ingredient} type="checkbox" defaultChecked onChange={(e) => changeList(e, ingredient)}/>                                    
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
