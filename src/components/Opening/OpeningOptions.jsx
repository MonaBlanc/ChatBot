import React from "react";
import "../../assets/css/Chefbot.css";
import "./OpeningOptions.css"

const OpeningOptions = (props) => {
  const options = [
    {
      text: "Go to the fridge",
      handler: props.actionProvider.goToFridge,
      id: 1,
    },
    { 
      text: "I have something in mind", 
      handler: props.actionProvider.getFormMeal, 
      id: 2, },
    {
      text: "I have no idea",
      handler: props.actionProvider.getRandomMeal,
      id: 3,
    },
    { text: "Quit", handler: () => { }, id: 4 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="opening-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="opening-options-container">{optionsMarkup}</div>;
};

export default OpeningOptions;