import React from 'react';
import "./MealForm.css";
import "../../assets/css/Chefbot.css";


const MealForm = (props) => {
    const { state, setState } = props;

    const handleChange = event => {
        const value = event.target.value;
        setState(state => ({ ...state, [event.target.name]: value }));
    };

    const handleSubmit = event => {
        // console.log('A diet was submitted: ' + state.diet);
        // console.log('A dishtype was submitted: ' + state.dishtype);
        // console.log('A main ingredient was submitted: ' + state.main);
        props.actionProvider.getFormMeal(state.diet, state.dishtype, state.main);
        event.preventDefault();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Diet</h2>
                <div className="group">
                    <ul id="diet" class="filter-switch inline-flex items-center relative h-10 p-1 space-x-1 bg-gray-200 rounded-md font-semibold text-blue-600 my-4">
                        <li class="filter-switch-item flex relative h-8 bg-gray-300x">
                            <input type="radio" name="diet" id="diet-all" class="sr-only" value={"all"} onChange={handleChange} defaultChecked />
                            <label for="diet-all" class="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow">
                                All
                            </label>
                            <div aria-hidden="true" class="filter-active"></div>
                        </li>
                        <li class="filter-switch-item flex relative h-8 bg-gray-300x">
                            <input type="radio" name="diet" id="diet-vegan" class="sr-only" value={"vegan"} onChange={handleChange} />
                            <label for="diet-vegan" class="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow">
                                Vegan
                            </label>
                        </li>
                        <li class="filter-switch-item flex relative h-8 bg-gray-300x">
                            <input type="radio" name="diet" id="diet-vegetarian" class="sr-only" value={"vegetarian"} onChange={handleChange} />
                            <label for="diet-vegetarian" class="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow">
                                Vegetarian
                            </label>
                        </li>
                    </ul>
                </div>
                <h2>Type of dish</h2>
                <div className="group">
                    <ul id="dishtype" class="filter-switch inline-flex items-center relative h-10 p-1 space-x-1 bg-gray-200 rounded-md font-semibold text-blue-600 my-4">
                        <li class="filter-switch-item flex relative h-8 bg-gray-300x">
                            <input type="radio" name="dishtype" id="dishtype-all" class="sr-only" value={"all"} onChange={handleChange} defaultChecked />
                            <label for="dishtype-all" class="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow">
                                All
                            </label>
                            <div aria-hidden="true" class="filter-active"></div>
                        </li>
                        <li class="filter-switch-item flex relative h-8 bg-gray-300x">
                            <input type="radio" name="dishtype" id="dishtype-starter" class="sr-only" value={"starter"} onChange={handleChange} />
                            <label for="dishtype-starter" class="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow">
                                Starter
                            </label>
                        </li>
                        <li class="filter-switch-item flex relative h-8 bg-gray-300x">
                            <input type="radio" name="dishtype" id="dishtype-breakfast" class="sr-only" value={"breakfast"} onChange={handleChange} />
                            <label for="dishtype-breakfast" class="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow">
                                Breakfast
                            </label>
                        </li>
                        <li class="filter-switch-item flex relative h-8 bg-gray-300x">
                            <input type="radio" name="dishtype" id="dishtype-meal" class="sr-only" value={"meal"} onChange={handleChange} />
                            <label for="dishtype-meal" class="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow">
                                Meal
                            </label>
                        </li>
                        <li class="filter-switch-item flex relative h-8 bg-gray-300x">
                            <input type="radio" name="dishtype" id="dishtype-dessert" class="sr-only" value={"dessert"} onChange={handleChange} />
                            <label for="dishtype-dessert" class="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow">
                                Dessert
                            </label>
                        </li>
                    </ul>
                </div>
                <h2>Main Ingredient</h2>
                <div className="group">
                    <ul id="main" class="filter-switch inline-flex items-center relative h-10 p-1 space-x-1 bg-gray-200 rounded-md font-semibold text-blue-600 my-4">
                        <li class="filter-switch-item flex relative h-8 bg-gray-300x">
                            <input type="radio" name="main" id="main-all" class="sr-only" value={"all"} onChange={handleChange} defaultChecked />
                            <label for="main-all" class="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow">
                                All
                            </label>
                            <div aria-hidden="true" class="filter-active"></div>
                        </li>
                        <li class="filter-switch-item flex relative h-8 bg-gray-300x">
                            <input type="radio" name="main" id="main-beef" class="sr-only" value={"beef"} onChange={handleChange} />
                            <label for="main-beef" class="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow">
                                Beef
                            </label>
                        </li>
                        <li class="filter-switch-item flex relative h-8 bg-gray-300x">
                            <input type="radio" name="main" id="main-chicken" class="sr-only" value={"chicken"} onChange={handleChange} />
                            <label for="main-chicken" class="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow">
                                Chicken
                            </label>
                        </li>
                        <li class="filter-switch-item flex relative h-8 bg-gray-300x">
                            <input type="radio" name="main" id="main-pork" class="sr-only" value={"pork"} onChange={handleChange} />
                            <label for="main-pork" class="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow">
                                Pork
                            </label>
                        </li>
                        <li class="filter-switch-item flex relative h-8 bg-gray-300x">
                            <input type="radio" name="main" id="main-pasta" class="sr-only" value={"pasta"} onChange={handleChange} />
                            <label for="main-pasta" class="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow">
                                Pasta
                            </label>
                        </li>
                    </ul>
                </div>
                <button type="submit" className="opening-option-button">Submit</button>
            </form>
        </div>
    );
};

export default MealForm;