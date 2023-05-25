import { createClientMessage } from "react-chatbot-kit";

/**
 * This is where you will put actions and routes
 */
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  goToFridge = () => {
    const userMessage = createClientMessage("Opening fridge...");
    const message = this.createChatBotMessage(
      "I am so sorry, i can't do that yet... Check our API for now!",
      {
        widget: "mealAPI",
      }
    );
    this.updateChatState(userMessage);
    this.updateChatbotState(message);
  };

  getRandomMeal = () => {
    const userMessage = createClientMessage("Surprise me!");
    const message = this.createChatBotMessage("Okay.. Here is a random meal for you!",
      {
        widget: "menuListAPI",
      }
    );
    const validation = this.createChatBotMessage("Is this what you wanted?",
      {
        widget: "validation",

      }
    );
    this.updateChatState(userMessage);
    this.updateChatbotState(message);
    this.updateChatbotState(validation);
  };

  displayFullRecipe = (id) => {
    const userMessage = createClientMessage("Yes!");
    const message = this.createChatBotMessage("Here is the full recipe for you!",
      {
        widget: "recipeAPI",
        props: { id: id },
      }
    );
    const groceryList = this.createChatBotMessage("You can add the ingredients to your grocery list!",
      {
        widget: "groceryList",
        props: { id: id },
      }
    );
    const userGreets = createClientMessage("Thank you!");
    const goodbyeChat = this.createChatBotMessage("No problem! Come back anytime :)");  

    this.updateChatState(userMessage);
    this.updateChatbotState(message);
    this.updateChatbotState(groceryList);
    this.updateChatbotState(userGreets);
    this.updateChatbotState(goodbyeChat);

  };


  getMealForm = () => {
    const userMessage = createClientMessage("No!");
    const message = this.createChatBotMessage("Okay, let's try again!",
      {
        widget: "mealForm",
      }
    );
    this.updateChatState(userMessage);
    this.updateChatbotState(message);
  };

  getFormMeal = (diet, dishtype) => {
    const userMessage = createClientMessage("That's it!");
    const message = this.createChatBotMessage("Here is the perfect meal for you!",
      {
        widget: "menuFormListAPI",
        props: { diet: diet, dishtype: dishtype},
      }
    );
    const validation = this.createChatBotMessage("Is this ok with you?",
      {
        widget: "validation",
      }
    );
    this.updateChatState(userMessage);
    this.updateChatbotState(message);
    this.updateChatbotState(validation);
  };

  getInitForm = () => {
    const userMessage = createClientMessage("I would like to make a specific request!");
    const message = this.createChatBotMessage("Okay, let's go through some questions!",
      {
        widget: "mealForm",
      }
    );
    this.updateChatState(userMessage);
    this.updateChatbotState(message);
  };

  greet = () => {
    const greetingMessage = this.createChatBotMessage("Hello, friend.");
    this.updateChatbotState(greetingMessage);
  };


  updateChatbotState(message) {
    this.setState(prevState => ({
      ...prevState, messages: [...prevState.messages, message]
    }))
  }

  updateChatState(userMessage) {
    this.setState(prevState => ({
      ...prevState, messages: [...prevState.messages, userMessage]
    }))
  }
}
export default ActionProvider
