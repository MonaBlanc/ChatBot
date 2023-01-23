import React, { useState } from 'react';
import "./MealForm.css";
import "../../assets/css/Chefbot.css";

const MealForm = () => {
    console.log("Form component is rendered")
    const [FormData, setFormData] = useState({ diet: "", dish: "", mainIngredient: "" });
    const handleChange = event => {
        console.log(event.target.name + ": " + event.target.value);
    };

    const handleSelect = (event) => {
        console.log(FormData);
        console.log(event.target.name + ": " + event.target.value)
        if (event.target.name == "diet")
            setFormData(FormData.diet = event.target.value)
        else if (event.target.name == "dish")
            setFormData(FormData.dish = event.target.value)
        else if (event.target.name == "mainIngredient")
            setFormData(FormData.mainIngredient = event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault();
        // PerhtmlForm some action with the htmlForm data
    };

    return (
        <div>
            <form>
                <h2>Diet</h2>
                <div className="group">
                    <ul id="filter1" className="filter-switch inline-flex items-center relative h-10 p-1 space-x-1 bg-gray-200 rounded-md font-semibold text-blue-600 my-4">
                        <li className="filter-switch-item flex relative h-8 bg-gray-300x">
                            <input type="radio" id="all" name="diet" value="All" onClick={e => handleSelect(e)} className="sr-only" defaultChecked />
                            <label htmlFor="all" className="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow">
                                All
                            </label>
                            <div aria-hidden="true" className="filter-active"></div>
                        </li>
                        <li className="filter-switch-item flex relative h-8 bg-gray-300x">
                            <input type="radio" id="vegan" name="diet" value="Vegan" onClick={handleSelect} className="sr-only" />
                            <label htmlFor="vegan" className="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow">
                                Vegan
                            </label>
                        </li>
                        <li className="filter-switch-item flex relative h-8 bg-gray-300x">
                            <input type="radio" id="veggie" name="diet" value="Vegetarian" onClick={handleSelect} className="sr-only" />
                            <label htmlFor="veggie" className="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow">
                                Vegetarian
                            </label>
                        </li>
                    </ul>
                </div>
                <h2>Type of dish</h2>
                <div className="group">
                    <ul id="filter2" className="filter-switch inline-flex items-center relative h-10 p-1 space-x-1 bg-gray-200 rounded-md font-semibold text-blue-600 my-4">
                        <li className="filter-switch-item flex relative h-8 bg-gray-300x">
                            <input type="radio" name="dish" id="all" value="All" className="sr-only" onClick={e => handleSelect(e)} defaultChecked />
                            <label htmlFor="all" className="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow">
                                All
                            </label>
                            <div aria-hidden="true" className="filter-active"></div>
                        </li>
                        <li className="filter-switch-item flex relative h-8 bg-gray-300x">
                            <input type="radio" name="dish" id="starter" value="Starter" onClick={e => handleSelect(e)} className="sr-only" />
                            <label htmlFor="starter" className="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow">
                                Starter
                            </label>
                        </li>
                        <li className="filter-switch-item flex relative h-8 bg-gray-300x">
                            <input type="radio" name="dish" id="breakfast" value="Breakfast" onClick={e => handleSelect(e)} className="sr-only" />
                            <label htmlFor="breakfast" className="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow">
                                Breakfast
                            </label>
                        </li>
                        <li className="filter-switch-item flex relative h-8 bg-gray-300x">
                            <input type="radio" name="dish" id="meal" value="Meal" onClick={e => handleSelect(e)} className="sr-only" />
                            <label htmlFor="meal" className="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow">
                                Meal
                            </label>
                        </li>
                        <li className="filter-switch-item flex relative h-8 bg-gray-300x">
                            <input type="radio" name="dish" id="dessert" value="Dessert" onClick={e => handleSelect(e)} className="sr-only" />
                            <label htmlFor="dessert" className="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow">
                                Dessert
                            </label>
                        </li>
                    </ul>
                </div>
                <h2>Main Ingredient</h2>
                <div className="group">
                    <ul id="filter3" className="filter-switch inline-flex items-center relative h-10 p-1 space-x-1 bg-gray-200 rounded-md font-semibold text-blue-600 my-4">
                        <li className="filter-switch-item flex relative h-8 bg-gray-300x">
                            <input type="radio" name="mainIngredient" id="all" value="All" className="sr-only" onClick={e => handleSelect(e)} defaultChecked />
                            <label htmlFor="all" className="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow">
                                All
                            </label>
                            <div aria-hidden="true" className="filter-active"></div>
                        </li>
                        <li className="filter-switch-item flex relative h-8 bg-gray-300x">
                            <input type="radio" name="mainIngredient" id="beef" value="Beef" onClick={e => handleSelect(e)} className="sr-only" />
                            <label htmlFor="beef" className="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow">
                                Beef
                            </label>
                        </li>
                        <li className="filter-switch-item flex relative h-8 bg-gray-300x">
                            <input type="chicken" name="mainIngredient" id="chicken" value="Chicken" onClick={e => handleSelect(e)} className="sr-only" />
                            <label htmlFor="chicken" className="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow">
                                Chicken
                            </label>
                        </li>
                        <li className="filter-switch-item flex relative h-8 bg-gray-300x">
                            <input type="radio" name="mainIngredient" id="chicken" value="Chicken" onClick={e => handleSelect(e)} className="sr-only" />
                            <label htmlFor="chicken" className="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow">
                                Pork
                            </label>
                        </li>
                        <li className="filter-switch-item flex relative h-8 bg-gray-300x">
                            <input type="radio" name="mainIngredient" id="pasta" value="Pasta" onClick={e => handleSelect(e)} className="sr-only" />
                            <label htmlFor="pasta" className="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow">
                                Pasta
                            </label>
                        </li>
                    </ul>
                </div>
                <button type="submit" onClick={handleSubmit} className="opening-option-button">Submit</button>
            </form>
        </div>
    );
};

export default MealForm;