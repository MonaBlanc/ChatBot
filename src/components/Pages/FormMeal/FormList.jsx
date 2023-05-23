import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { getFormMealAction } from '../../../container/actions';
import "../Chefbot/Chefbot.css";
import "./FormList.css";


const FormList = (props) => {
    const { state, setState } = props;
    const dispatch = useDispatch();
    const [meal, setMeal] = useState({});
    useEffect(() => {
        const response = dispatch(getFormMealAction(state.diet, state.dishtype));
        response.then(data => {
            setMeal(data.meals[0]);
            setState(state => ({ ...state, meal: data.meals[0] }))
            }).catch(error => {
                alert(error);
            }); // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.diet, state.dishtype])
    return (
        <>
            {
                <div className="infos row columns">
                    <div className="columns seven">
                        <h3 className="text-xl">{meal.strMeal}</h3>
                    </div>
                    <img src={meal.strMealThumb} alt="img-thumb" className="img-thumb-random" />
                    {meal.strCategory ? <p id="mealName"><strong>Category:</strong> {meal.strCategory}</p> : ''}
                    {meal.strArea ? <p id="mealArea"><strong>Area:</strong> {meal.strArea}</p> : ''}
                    {meal.strTags ? <p id="mealTag"><strong>Tags:</strong> {meal.strTags.split(',').join(', ')}</p> : ''}
                </div>
            }
        </>
    );
};
export default FormList;