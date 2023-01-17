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
                        <button type="submit" className="opening-option-button">Submit</button>
                    </form>
                </div>
    );
};

export default MealForm;