import React from 'react';
import "./MealForm.css";
import "../Chefbot/Chefbot.css";

const MealForm = (props) => {
    const { state, setState } = props;

    const handleChange = event => {
        setState(state => ({ ...state, [event.target.name]: event.target.value }));
    };

    const handleSubmit = event => {
        props.actionProvider.getFormMeal(state.category, state.main);
        event.preventDefault();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <h2>Diet</h2>
                <div className="group">
                    <ul id="diet" className="filter-switch inline-flex items-center relative h-10 p-1 space-x-1 rounded-md font-semibold text-orange my-4">
                        <li className="filter-switch-item flex relative h-8 bg-gray-300x">
                            <input type="radio" name="diet" id="diet-all" className="sr-only" value={"all"} onChange={handleChange} defaultChecked />
                            <label htmlFor="diet-all" className="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow">
                                All
                            </label>
                            <div aria-hidden="true" className="filter-active"></div>
                        </li>
                        <li className="filter-switch-item flex relative h-8 bg-gray-300x">
                            <input type="radio" name="diet" id="diet-vegan" className="sr-only" value={"vegan"} onChange={handleChange} />
                            <label htmlFor="diet-vegan" className="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow">
                                Vegan
                            </label>
                        </li>
                        <li className="filter-switch-item flex relative h-8 bg-gray-300x">
                            <input type="radio" name="diet" id="diet-vegetarian" className="sr-only" value={"vegetarian"} onChange={handleChange} />
                            <label htmlFor="diet-vegetarian" className="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow">
                                Vegetarian
                            </label>
                        </li>
                    </ul>
                </div> */}
                <h2>Category</h2>
                <div className="group">
                    <ul id="category" className="filter-switch inline-flex items-center relative h-10 p-1 space-x-1 rounded-md font-semibold text-orange my-4">
                        <li className="filter-switch-item flex relative h-8 bg-gray-300x">
                            <input type="radio" name="category" id="category-all" className="sr-only" value={"null"} onChange={handleChange} defaultChecked />
                            <label htmlFor="category-all" className="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow">
                                All
                            </label>
                            <div aria-hidden="true" className="filter-active"></div>
                        </li>
                        <li className="filter-switch-item flex relative h-8 bg-gray-300x">
                            <input type="radio" name="category" id="category-starter" className="sr-only" value={"Starter"} onChange={handleChange} />
                            <label htmlFor="category-starter" className="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow">
                                Starter
                            </label>
                        </li>
                        <li className="filter-switch-item flex relative h-8 bg-gray-300x">
                            <input type="radio" name="category" id="category-breakfast" className="sr-only" value={"Breakfast"} onChange={handleChange} />
                            <label htmlFor="category-breakfast" className="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow">
                                Breakfast
                            </label>
                        </li>
                        <li className="filter-switch-item flex relative h-8 bg-gray-300x">
                            <input type="radio" name="category" id="category-meal" className="sr-only" value={"Meal"} onChange={handleChange} />
                            <label htmlFor="category-meal" className="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow">
                                Meal
                            </label>
                        </li>
                        <li className="filter-switch-item flex relative h-8 bg-gray-300x">
                            <input type="radio" name="category" id="category-dessert" className="sr-only" value={"Dessert"} onChange={handleChange} />
                            <label htmlFor="category-dessert" className="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow">
                                Dessert
                            </label>
                        </li>
                    </ul>
                </div>
                <h2>Main Ingredient</h2>
                <div className="group">
                    <ul id="main" className="filter-switch inline-flex items-center relative h-10 p-1 space-x-1 rounded-md font-semibold text-orange my-4">
                        <li className="filter-switch-item flex relative h-8 bg-gray-300x">
                            <input type="radio" name="main" id="main-all" className="sr-only" value={"null"} onChange={handleChange} defaultChecked />
                            <label htmlFor="main-all" className="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow">
                                All
                            </label>
                            <div aria-hidden="true" className="filter-active"></div>
                        </li>
                        <li className="filter-switch-item flex relative h-8 bg-gray-300x">
                            <input type="radio" name="main" id="main-beef" className="sr-only" value={"beef"} onChange={handleChange} />
                            <label htmlFor="main-beef" className="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow">
                                Beef
                            </label>
                        </li>
                        <li className="filter-switch-item flex relative h-8 bg-gray-300x">
                            <input type="radio" name="main" id="main-chicken" className="sr-only" value={"chicken"} onChange={handleChange} />
                            <label htmlFor="main-chicken" className="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow">
                                Chicken
                            </label>
                        </li>
                        <li className="filter-switch-item flex relative h-8 bg-gray-300x">
                            <input type="radio" name="main" id="main-pork" className="sr-only" value={"pork"} onChange={handleChange} />
                            <label htmlFor="main-pork" className="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow">
                                Pork
                            </label>
                        </li>
                        <li className="filter-switch-item flex relative h-8 bg-gray-300x">
                            <input type="radio" name="main" id="main-pasta" className="sr-only" value={"pasta"} onChange={handleChange} />
                            <label htmlFor="main-pasta" className="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow">
                                Pasta
                            </label>
                        </li>
                    </ul>
                </div>
                <button type="submit" className="opening-option-button">Submit</button>
            </form >
        </div >
    );
};

export default MealForm;