import { useDispatch } from "react-redux";
import Footer from "../molecules/Footer";
import Header from "../molecules/Header";
import { useCallback, useEffect, useState } from "react";
import { getGroceryListAction } from "../../../container/actions";
import { Link, useNavigate } from "react-router-dom";
import "./user.css"


export default function User() {
    const navigate = useNavigate();
    // const user = useSelector(state => state.isLoggedIn);
    const route = useCallback(() => {
        const token = localStorage.getItem('x-access-token');
        return token ? true : false;
    }, []);
    
    useEffect(() => {
        if (!route()) {
            navigate('/login');
        }
    }, [route, navigate]);
    const [list, setList] = useState([])
    const [meal, setMeal] = useState([])
    const [isListAvailable, setIsListAvailable] = useState(true);
    const dispatch = useDispatch();
    useEffect(() => {
        const username = localStorage.getItem('username');
        const res = dispatch(getGroceryListAction(username));
        res
            .then(data => {
                console.log(data)
                setList(data.list);
                setMeal(data.mealInfo);
            }).catch(error => {
                console.log(error);
                setIsListAvailable(false)
            }); // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const checkedIngredients = list;
    const changeList = (e) => {
        let index;
        if (!e.target.checked){
            console.log(e.target.id);
            index = checkedIngredients.indexOf(e.target.id);
            if (index !== -1)
                checkedIngredients.splice(index, 1)
        }
        else{
            index = checkedIngredients.indexOf(e.target.id);
            if (index === -1)
                checkedIngredients.push(e.target.id)
        }
    }
    
    
    return (
        <div id="bg relative min-h-screen">
            <Header />
            <main id="site-main" className="mt-16 h-full m-auto flex justify-center">
            {
            isListAvailable ? 
                <div className="meal-info">
                    <div className="w-2/3">
                        <img className="thumb" alt="meal-thumb" src={meal.strMealThumb} />
                        <div className="recipe-title">
                            <h3 className="text-lightOrange text-xl">{meal.strMeal}</h3>
                        </div>
                        <div className="">
                            {meal.strCategory ? <p><strong className="text-lightOrange">Category:</strong> {meal.strCategory}</p> : ''}
                            {meal.strArea ? <p><strong className="text-lightOrange">Area:</strong> {meal.strArea}</p> : ''}
                            {meal.strTags ? <p><strong className="text-lightOrange">Tags:</strong> {meal.strTags.split(',').join(', ')}</p> : ''}
                        </div>
                        <div className="">
                            <p><span className="text-lightOrange">Cooking guide: </span>{meal.strInstructions}</p>
                        </div>
                    </div>
                    <div className="grocery-list row columns five md:ml-8">
                        <h5>Grocery List:</h5>
                        {list.map(ingredient => 
                            <div key={ingredient} className="checkList">
                                <input id={ingredient} type="checkbox" defaultChecked onChange={(e) => changeList(e, ingredient)}/>                                    
                                <label className="toBuy-label" htmlFor={ingredient}>
                                {ingredient}
                                </label>
                            </div>
                        )}
                    </div>
                </div>
                :
                <h3 className="bg-lightOrange text-white p-8 rounded-md text-center w-1/4 mx-auto">
                    <span>You don't have a grocery list yet! Go talk with </span>
                    <span className="underline text-yellow-200">
                        <Link to="/chefbot">
                        Chefbot
                        </Link>
                    </span> 
                    <span> to know what yummy recipe you'll eat next! </span>
                </h3>
            }
            </main>
            <div className="">
                <Footer />
            </div>
        </div>
    );
};