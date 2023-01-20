import React, { useState } from 'react';
import "./MealForm.css";
import "../../assets/css/Chefbot.css";

const MealForm = () => {
    console.log("Form component is rendered")
    const [formData, setFormData] = useState({});
    const handleChange = event => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        // Perform some action with the form data
    };

    return (
                <div>
                    <form onSubmit={handleSubmit}>
                        <h2>Diet</h2>
                        <div className="group">
                            <ul id="filter1" class="filter-switch inline-flex items-center relative h-10 p-1 space-x-1 bg-gray-200 rounded-md font-semibold text-blue-600 my-4">
                                <li class="filter-switch-item flex relative h-8 bg-gray-300x">
                                <input type="radio" name="filter1" id="filter1-0" class="sr-only" checked/>
                                <label for="filter1-0" class="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow">
                                    All
                                </label>
                                <div aria-hidden="true" class="filter-active"></div>
                                </li>
                                <li class="filter-switch-item flex relative h-8 bg-gray-300x">
                                <input type="radio" name="filter1" id="filter1-1" class="sr-only"/>
                                <label for="filter1-1" class="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow">
                                    Vegan
                                </label>
                                </li>
                                <li class="filter-switch-item flex relative h-8 bg-gray-300x">
                                <input type="radio" name="filter1" id="filter1-2" class="sr-only"/>
                                <label for="filter1-2" class="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow">
                                    Vegetarian
                                </label>
                                </li>
                            </ul>
                        </div>
                        <h2>Type of dish</h2>
                        <div className="group">
                            <ul id="filter2" class="filter-switch inline-flex items-center relative h-10 p-1 space-x-1 bg-gray-200 rounded-md font-semibold text-blue-600 my-4">
                                <li class="filter-switch-item flex relative h-8 bg-gray-300x">
                                <input type="radio" name="filter2" id="filter2-0" class="sr-only" checked/>
                                <label for="filter2-0" class="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow">
                                    All
                                </label>
                                <div aria-hidden="true" class="filter-active"></div>
                                </li>
                                <li class="filter-switch-item flex relative h-8 bg-gray-300x">
                                <input type="radio" name="filter2" id="filter2-1" class="sr-only"/>
                                <label for="filter2-1" class="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow">
                                    Starter
                                </label>
                                </li>
                                <li class="filter-switch-item flex relative h-8 bg-gray-300x">
                                <input type="radio" name="filter2" id="filter2-2" class="sr-only"/>
                                <label for="filter2-2" class="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow">
                                    Breakfast
                                </label>
                                </li>
                                <li class="filter-switch-item flex relative h-8 bg-gray-300x">
                                <input type="radio" name="filter2" id="filter2-3" class="sr-only"/>
                                <label for="filter2-3" class="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow">
                                    Meal
                                </label>
                                </li>
                                <li class="filter-switch-item flex relative h-8 bg-gray-300x">
                                <input type="radio" name="filter2" id="filter2-4" class="sr-only"/>
                                <label for="filter2-4" class="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow">
                                    Dessert
                                </label>
                                </li>
                            </ul>
                        </div>
                        <h2>Main Ingredient</h2>
                        <div className="group">
                            <ul id="filter3" class="filter-switch inline-flex items-center relative h-10 p-1 space-x-1 bg-gray-200 rounded-md font-semibold text-blue-600 my-4">
                                <li class="filter-switch-item flex relative h-8 bg-gray-300x">
                                <input type="radio" name="filter3" id="filter3-0" class="sr-only" checked/>
                                <label for="filter3-0" class="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow">
                                    All
                                </label>
                                <div aria-hidden="true" class="filter-active"></div>
                                </li>
                                <li class="filter-switch-item flex relative h-8 bg-gray-300x">
                                <input type="radio" name="filter3" id="filter3-1" class="sr-only"/>
                                <label for="filter3-1" class="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow">
                                    Beef
                                </label>
                                </li>
                                <li class="filter-switch-item flex relative h-8 bg-gray-300x">
                                <input type="radio" name="filter3" id="filter3-2" class="sr-only"/>
                                <label for="filter3-2" class="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow">
                                    Chicken
                                </label>
                                </li>
                                <li class="filter-switch-item flex relative h-8 bg-gray-300x">
                                <input type="radio" name="filter3" id="filter3-3" class="sr-only"/>
                                <label for="filter3-3" class="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow">
                                    Pork
                                </label>
                                </li>
                                <li class="filter-switch-item flex relative h-8 bg-gray-300x">
                                <input type="radio" name="filter3" id="filter3-4" class="sr-only"/>
                                <label for="filter3-4" class="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow">
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