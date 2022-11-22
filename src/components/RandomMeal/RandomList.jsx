import React from "react";
import { useState, useEffect } from "react";
import "./RandomList.css";
import { useDispatch } from 'react-redux';
import { randomMealAction } from '../../container/actions';
import Recipe from "../Recipe/Recipe";
import { Connect } from "react-redux";

const RandomList = (props) => {
    const dispatch = useDispatch();
    const [meal, setMeal] = useState({});
    useEffect(() => {
        const random = dispatch(randomMealAction());
        random
            .then(data => {
                setMeal(data.meals[0]);
                props.func(data.meals[0]);
            }).catch(error => {
                alert(error.data.err);
            }); 
    }, [])
    const mealExport = (meal) => {
        return {
        meal: meal 
        };
    };
    return (
        <>
            {
                <div className="infos row">
                    <div className="columns seven">
                        <h3 className="text-xl text-orange">{meal.strMeal}</h3>
                    </div>
                    <div className="columns five">
                        <img src={meal.strMealThumb} alt="Meal Image" />
                        {meal.strCategory ? <p><strong>Category:</strong> {meal.strCategory}</p> : ''}
                        {meal.strArea ? <p><strong>Area:</strong> {meal.strArea}</p> : ''}
                        {meal.strTags ? <p><strong>Tags:</strong> {meal.strTags.split(',').join(', ')}</p> : ''}
                    </div>

                </div>
            }
        </>
    );
};
