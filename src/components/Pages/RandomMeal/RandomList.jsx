import React from "react";
import { useState, useEffect } from "react";
import "./RandomList.css";
import { useDispatch } from 'react-redux';
import { randomMealAction } from '../../../container/actions';


const RandomList = (props) => {
    const dispatch = useDispatch();
    const { setState } = props;
    const [meal, setMeal] = useState({});
    useEffect(() => {
        const random = dispatch(randomMealAction());
        random
            .then(meal => {
                setMeal(meal);
                setState(state => ({ ...state, meal }))
            }).catch(error => {
                alert(error);
            }); // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
            {
                <div className="infos row columns">
                    <div className="columns seven">
                        <h3 className="text-xl">{meal.strMeal}</h3>
                    </div>
                    <img src={meal.strMealThumb} alt="meal-thumb" className="img-thumb-random" />
                    {meal.strCategory ? <p id="mealName"><strong>Category:</strong> {meal.strCategory}</p> : ''}
                    {meal.strArea ? <p id="mealArea"><strong>Area:</strong> {meal.strArea}</p> : ''}
                    {meal.strTags ? <p id="mealTags"><strong>Tags:</strong> {meal.strTags.split(',').join(', ')}</p> : ''}
                </div>
            }
        </>
    );
};
export default RandomList;