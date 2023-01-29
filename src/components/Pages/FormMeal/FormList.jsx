import React from "react";
import { useState, useEffect } from "react";
import "./FormList.css";
import "../Chefbot/Chefbot.css";
import { useDispatch } from 'react-redux';
import { getFormMealAction } from '../../../container/actions';


const FormList = (props) => {
    const { state, setState } = props;
    const dispatch = useDispatch();
    const [meal, setMeal] = useState({});
    // console.log("FormList component is rendered");
    // console.log(props);
    useEffect(() => {
        const random = dispatch(getFormMealAction(state.diet, state.dishtype, state.main));
        random
            .then(data => {
                setMeal(data.meals[0]);
                setState(state => ({ ...state, meal: data.meals[0] }))
            }).catch(error => {
                alert(error);
            });
    }, [state.diet, state.dishtype, state.main])
    return (
        <>
            {
                <div className="infos row columns">
                    <div className="columns seven">
                        <h3 className="text-xl">{meal.strMeal}</h3>
                    </div>
                    <img src={meal.strMealThumb} alt="img-thumb" class="img-thumb-random" />
                    {meal.strCategory ? <p id="mealName"><strong>Category:</strong> {meal.strCategory}</p> : ''}
                    {meal.strArea ? <p id="mealArea"><strong>Area:</strong> {meal.strArea}</p> : ''}
                    {meal.strTags ? <p id="mealTag"><strong>Tags:</strong> {meal.strTags.split(',').join(', ')}</p> : ''}
                </div>
            }
        </>
    );
};
export default FormList;