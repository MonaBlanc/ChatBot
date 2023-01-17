import React from "react";
import { useState, useEffect } from "react";
import "./RandomList.css";
import "../../assets/css/Chefbot.css";
import { useDispatch } from 'react-redux';
import { randomMealAction } from '../../container/actions';

const RandomList = (props) => {
    const { setState } = props;
    const dispatch = useDispatch();
    const [meal, setMeal] = useState({});
    useEffect(() => {
        const random = dispatch(randomMealAction());
        random
            .then(data => {
                setMeal(data.meals[0]);
                setState(state => ({ ...state, meal: data.meals[0] }))
            }).catch(error => {
                alert(error);
            });
    }, [])
    return (
        <>
            {
                <div className="infos row columns">
                    <div className="columns seven">
                        <h3 className="text-xl">{meal.strMeal}</h3>
                    </div>
                    <img src={meal.strMealThumb} class="img-thumb" />
                    {meal.strCategory ? <p id="mealName"><strong>Category:</strong> {meal.strCategory}</p> : ''}
                    {meal.strArea ? <p id="mealArea"><strong>Area:</strong> {meal.strArea}</p> : ''}
                    {meal.strTags ? <p id="mealTags"><strong>Tags:</strong> {meal.strTags.split(',').join(', ')}</p> : ''}
                </div>
            }
        </>
    );
};
export default RandomList;