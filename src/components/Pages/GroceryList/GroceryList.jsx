import { useDispatch } from "react-redux";
import "./GroceryList.css";
import extractIngredients from "./extractIngredients";
import { postGroceryListAction } from "../../../container/actions";
import { useState } from "react";
import { Link } from "react-router-dom";

const GroceryList = (props) => {
    const [isListSubmitted, setIsListSubmitted] = useState(false);
    const meal = props.meal;
    const ingredients = extractIngredients(meal);
    const checkedIngredients = ingredients;
    const changeList = (e) => {
        console.log("Before: ", checkedIngredients);
        let index;
        if (!e.target.checked){
            console.log(e.target.id);
            index = checkedIngredients.indexOf(e.target.id);
            if (index !== -1)
                checkedIngredients.splice(index, 1)
        }
        else{
            index = checkedIngredients.indexOf(e.target.id);
            if (index === -1)
                checkedIngredients.push(e.target.id)
        }
        console.log("After: ", checkedIngredients)
    }
    
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();
        const username = localStorage.getItem('username');
        dispatch(postGroceryListAction(username, meal.idMeal, checkedIngredients));
        setIsListSubmitted(true);

    }
    
    return (
        <>
            {
            isListSubmitted ? 
                <h3 className="bg-lightOrange text-white p-4 rounded-md text-center w-2/3 mx-auto">
                    <span>Your grocery list has been updated! Check your </span>
                    <span className="underline text-yellow-200">
                        <Link to="/user">
                            personal space
                        </Link>
                    </span> 
                    <span> to know what groceries you need!</span>
                </h3>
                :
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
