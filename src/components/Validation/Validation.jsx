import React from "react";
import "./Validation.css";

const Validation = (props) => {
  const validation = [
    {
        text: "Yes!",
        recipeID: props.id,
        handler: props.actionProvider.displayFullRecipe,
        id: 1,
      },
    { text: "Not really...", 
      handler: props.actionProvider.getRandomMeal,
      id: 2,
    },
    { 
      text: "I want to change something", 
      handler: props.actionProvider.getMealForm,
      id: 3,
    },
  ];

  const validationMarkup = validation.map((validation) => (
    <button
      className="validation-button"
      key={validation.id}
      onClick={e=>validation.handler(e, validation.recipeID)}
    >
      {validation.text}
    </button>
  ));

  return <div className="validation-container">{validationMarkup}</div>;
};

export default Validation;