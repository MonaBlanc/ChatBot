import { useDispatch } from "react-redux";
import Footer from "../molecules/Footer";
import Header from "../molecules/Header";
import { useCallback, useEffect, useState } from "react";
import { getGroceryListAction } from "../../../container/actions";
import { Link, useNavigate } from "react-router-dom";


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
    const dispatch = useDispatch();
    useEffect(() => {
        const username = localStorage.getItem('username');
        const res = dispatch(getGroceryListAction(username));
        res
            .then(list => {
                console.log(list.data)
                setList(list.data);
            }).catch(error => {
                alert(error);
            }); // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const checkedIngredients = list;
    const changeList = (e) => {
        console.log("Before: ", checkedIngredients);
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
        console.log("After: ", checkedIngredients)
    }
    
    
    return (
        <div id="bg">
            <Header />
            <main id="site-main" className="mt-16 h-full m-auto">
            {
            list ? 
                <div className="grocery-list row columns five m-auto">
                    <h5>Ingredients:</h5>
                    {list.map(ingredient => 
                        <div key={ingredient} className="checkList">
                            <input id={ingredient} type="checkbox" defaultChecked onChange={(e) => changeList(e, ingredient)}/>                                    
                            <label className="toBuy-label" htmlFor={ingredient}>
                            {ingredient}
                            </label>
                        </div>
                    )}
                </div>
                :
                <h3 className="bg-lightOrange text-white p-4 rounded-md text-center w-2/3 mx-auto">
                    <span>Your grocery list has been updated! Check your </span>
                    <span className="underline text-yellow-200">
                        <Link to="/user">
                            personal space
                        </Link>
                    </span> 
                    <span> to know what groceries you need!</span>
                </h3>
            }
            </main>
            <Footer />
        </div>
    );
};