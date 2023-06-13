import React from "react";
import "./OpeningOptions.css"

const OpeningOptions = (props) => {
  const options = [
    {
      text: "I have something in mind",
      handler: props.actionProvider.getInitForm,
      id: 2,
    },
    {
      text: "I have no idea",
      handler: props.actionProvider.getRandomMeal,
      id: 3,
    },
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