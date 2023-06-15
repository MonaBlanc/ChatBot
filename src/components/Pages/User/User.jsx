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
    const [isListAvailable, setIsListAvailable] = useState(true);
    const dispatch = useDispatch();
    useEffect(() => {
        const username = localStorage.getItem('username');
        const res = dispatch(getGroceryListAction(username));
        res
            .then(list => {
                console.log(list.data)
                setList(list.data);
            }).catch(error => {
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
            <main id="site-main" className="mt-16 h-full m-auto">
            {
            isListAvailable ? 
                <div className="grocery-list row columns five" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '50%', margin: 'auto' }}>
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
            <div className="absolute bottom-0 w-full h-9vh">
                <Footer />
            </div>
        </div>
    );
};