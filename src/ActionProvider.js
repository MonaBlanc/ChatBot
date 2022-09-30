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
 