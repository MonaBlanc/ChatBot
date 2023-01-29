import React from 'react'
import "./AnimatedBot.css"

export default function AnimatedBot(props) {
    const { state } = props;
    // console.log(state);
    return (
        <>
            <img className="bot" src={require('../../../assets/img/angry-catto.png')} alt="bot" />
        </>
    )
}
