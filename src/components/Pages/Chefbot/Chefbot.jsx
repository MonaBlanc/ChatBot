import React from 'react'
import Header from '../molecules/Header'
import Footer from '../molecules/Footer'
import Chatbot from 'react-chatbot-kit'
import ActionProvider from '../../../ActionProvider';
import MessageParser from '../../../MessageParser';
import config from '../../../config';
import "./Chefbot.css"

export default function Chefbot() {
    return (
        <div className="chefbot-container">
            <Header />
            <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
            <Footer />
        </div>
    )
}
