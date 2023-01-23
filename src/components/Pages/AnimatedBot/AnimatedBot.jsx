import React from 'react'
// import { useEffect } from 'react'
import "./AnimatedBot.css"

export default function AnimatedBot(props) {
    // const { state } = props.chatState;
    // useEffect(() => {
    //     console.log(state);
    // }, [state]);
    return (
        <>
            <img className="bot" src={require('../../../assets/img/angry-catto.png')} alt="bot" />
        </>
    )
}
