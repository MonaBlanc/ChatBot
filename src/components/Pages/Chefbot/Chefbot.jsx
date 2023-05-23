import React, { useCallback, useEffect } from 'react'
import Header from '../molecules/Header'
import Footer from '../molecules/Footer'
import AnimatedBot from "../AnimatedBot/AnimatedBot"
import Chatbot from 'react-chatbot-kit'
import ActionProvider from '../../../ActionProvider';
import MessageParser from '../../../MessageParser';
import config from '../../../config';
import { useNavigate } from 'react-router-dom';
import "./Chefbot.css"

export default function Chefbot() {
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
    return (
        <div className="chefbot-container">
            <Header />
            <div className="layout-row">
                {/* This component will also take the message parser and other props to change  */}
                <AnimatedBot config={config} />
                <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
            </div>
            <Footer />
        </div>
    )
}
