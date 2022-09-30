/**
 * This is where you will write the vocabulary you want the chatbot to recognize -> AI part
 */
class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes("hello")) {
        this.actionProvider.greet();
      }
  
      if (lowerCaseMessage.includes("fridge")) {
        this.actionProvider.goToFridge();
      }
    }
  }
  
  export default MessageParser;