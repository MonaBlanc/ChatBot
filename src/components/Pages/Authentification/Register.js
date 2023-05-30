import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerAction } from '../../../container/actions';
import BaseLogin from '../molecules/BaseLogin';
import RegisterForm from '../molecules/RegisterForm';

export default function Register() {
    const navigate = useNavigate();
    const route = useCallback(() => {
        const token = localStorage.getItem('x-access-token');
        return token ? true : false;
    }, []);
    
    useEffect(() => {
        if (route()) {
            navigate('/');
        }
    }, [route, navigate]);
    // hook variables
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [errorMessage, setError] = useState("");

    const dispatch = useDispatch();

    // event handler on form submission 
    const handleSubmit = (event) => {
        event.preventDefault(); // prevent defualt behaviour of this element
        const newUser = {
            username,
            email,
            password,
            passwordCheck
        }
        const validate = dispatch(registerAction(newUser));
        validate.then(data => {
            navigate('/login');
        }).catch(error => {
            setError(error.data.err);
        });
    };

    let registerData = {
        handleSubmit,
        setUsername,
        setEmail,
        setPassword,
        setPasswordCheck,
        errorMessage,
        setError
    };

    return (
        <div id="login">
            <div className="container">
                <div className="row login-box">
                    <BaseLogin />
                    <RegisterForm registerState={registerData} />
                </div>
            </div>
        </div>
    );
}
