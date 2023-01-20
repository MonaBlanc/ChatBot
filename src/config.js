import { createChatBotMessage } from 'react-chatbot-kit';
import OpeningOptions from './components/Pages/Opening/OpeningOptions';
import RandomList from './components/Pages/RandomMeal/RandomList';
import Recipe from './components/Pages/Recipe/Recipe';
import Validation from './components/Pages/Validation/Validation';

const config = {
  botName: "ChefBot",
  initialMessages: [
    createChatBotMessage("Hey, I'm here to help. What do you want to eat?", {
      widget: "OpeningOptions",
    }),
  ],
  state: {
    meal: {},
  },
  widgets: [
    {
      widgetName: "OpeningOptions",
      widgetFunc: (props) => <OpeningOptions {...props} />,
    },
    {
      widgetName: "menuListAPI",
      widgetFunc: (props) => <RandomList {...props} />,
      mapStateToProps: ["meal"],
    },
    {
      widgetName: "validation",
      widgetFunc: (props) => <Validation {...props} />,
    },
    {
      widgetName: "recipeAPI",
      widgetFunc: (props) => <Recipe {...props} />,
      mapStateToProps: ["meal"],
    },
    {
      widgetName: "mealAPI",
      widgetFunc: (props) => <Recipe {...props} />,
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