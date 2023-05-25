import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginAction } from '../../../container/actions';
import BaseLogin from '../molecules/BaseLogin';
import LoginForm from '../molecules/LoginForm';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setError] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // handler for form submit
    const handleSubmit = (event) => {
        event.preventDefault();
        const userCredentials = {
            email,
            password
        }
        const login = dispatch(loginAction(userCredentials));
        login
            .then(data => {
                navigate('/');
            })
            .catch(error => {
                setError(error.err);
            });
    }
    return (
        <div id="login">
            <div className="container">
                <div className="login-box">
                    <BaseLogin />
                    <LoginForm loginState={{ handleSubmit, setEmail, setPassword, errorMessage, setError }} />
                </div>
            </div>
        </div>
    )
}
