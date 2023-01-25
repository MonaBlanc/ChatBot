import React from "react";
import { useState, useEffect } from "react";
import "./FormList.css";
import "../../assets/css/Chefbot.css";
import { useDispatch } from 'react-redux';
import { getFormMealAction } from '../../container/actions';


const FormList = (props) => {
    const { state, setState } = props;
    const dispatch = useDispatch();
    const [meal, setMeal] = useState({});
    console.log("FormList component is rendered");
    console.log(props);
    useEffect(() => {
        const random = dispatch(getFormMealAction(state.diet, state.dishtype, state.main));
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
                <div className="infos row">
                    <div className="columns seven">
                        <h3 className="text-xl text-orange">{meal.strMeal}</h3>
                    </div>
                    <div className="columns five">
                        <img src={meal.strMealThumb} />
                        {meal.strCategory ? <p><strong>Category:</strong> {meal.strCategory}</p> : ''}
                        {meal.strArea ? <p><strong>Area:</strong> {meal.strArea}</p> : ''}
                        {meal.strTags ? <p><strong>Tags:</strong> {meal.strTags.split(',').join(', ')}</p> : ''}
                    </div>
                </div>
            }
        </>
    );
};
export default FormList;