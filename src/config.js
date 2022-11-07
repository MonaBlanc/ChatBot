import { createChatBotMessage } from 'react-chatbot-kit';
import OpeningOptions from './components/Opening/OpeningOptions';
import LinkList from "./components/LinkList/LinkList";
import RandomList from './components/RandomMeal/RandomList';

const config = { 
  botName: "ChiefBot",
  initialMessages: [
    createChatBotMessage("Hey, I'm here to help. What do you want to eat?", {
      widget: "OpeningOptions",
    }),
  ],
  widgets: [
    {
      widgetName: "OpeningOptions",
       widgetFunc: (props) => <OpeningOptions {...props} />,
    },
    {
      widgetName: "menuListAPI",
      widgetFunc: () => <RandomList />,
    },
    {
        widgetName: "mealAPI",
        widgetFunc: (props) => <LinkList {...props}/>,
        props: {
          options: [
            {
              text: "Meal DB",
              url:
                "https://www.themealdb.com/",
              id: 1,
            },/*
            {
              text: "Mozilla JS Guide",
              url:
                "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
              id: 2,
            },
            {
              text: "Frontend Masters",
              url: "https://frontendmasters.com",
              id: 3,
            },*/
          ],
        },
      },
],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
}

export default config