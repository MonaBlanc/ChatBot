import { createChatBotMessage } from 'react-chatbot-kit';
import LinkList from './components/LinkList/LinkList';
import OpeningOptions from './components/Opening/OpeningOptions';
import RandomList from './components/RandomMeal/RandomList';
import Recipe from './components/Recipe/Recipe';
import Validation from './components/Validation/Validation';

const config = {
  botName: "ChiefBot",
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
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Meal DB",
            url:
              "https://www.themealdb.com/",
            id: 1,
          },
        ],
      },
    },
    {
      widgetName: "mealForm",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Diet",
            id: 1,
          },
          {
            text: "Type of Dish",
            id: 2,
          },
          {
            text: "Main ingredient",
            id: 3,
          },
          {
            text: "Allergies",
            id: 4,
          },
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