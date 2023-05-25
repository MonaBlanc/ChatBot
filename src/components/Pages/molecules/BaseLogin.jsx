import { useLocation, useNavigate } from 'react-router-dom';

export default function BaseLogin() {

    const location = useLocation();
    const navigate = useNavigate();

    let defaultClass = "nav-link link-btn btn-primary default-bg";
    let active = " active"

    const register = () => navigate("/register")
    const login = () => navigate("/login")


    return (
        <div className="col-sm-5 bg-img">
            <div className="info">
            <img src={require('../../../assets/img/FoodIcon.png')} className="foodIcon" alt="FoodIcon"/>
                <div className="btn-section">
                    <button onClick={login} className={location.pathname === "/login" ? defaultClass + active : defaultClass}>Login</button>
                    <button onClick={register} className={location.pathname === "/register" ? defaultClass + active : defaultClass}>Sign up</button>
                </div>
            </div>
        </div>
    )
}
