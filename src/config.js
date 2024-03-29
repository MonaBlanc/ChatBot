import { createChatBotMessage } from 'react-chatbot-kit';
import FormList from './components/Pages/FormMeal/FormList';
import GroceryList from './components/Pages/GroceryList/GroceryList';
import LinkList from './components/Pages/LinkList/LinkList';
import MealForm from './components/Pages/MealForm/MealForm';
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
    diet: "",
    dishtype: "",
    mainIngredient: ""
  },
  widgets: [
    {
      widgetName: "OpeningOptions",
      widgetFunc: (props) => <OpeningOptions {...props} />,
      mapStateToProps: ["mascot"],
    },
    {
      widgetName: "menuListAPI",
      widgetFunc: (props) => <RandomList {...props} />,
      mapStateToProps: ["meal", "mascot"],
      
    },
    {
      widgetName: "menuFormListAPI",
      widgetFunc: (props) => <FormList {...props} />,
      mapStateToProps: ["diet", "dishtype", "main"],
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
      widgetName: "groceryList",
      widgetFunc: (props) => <GroceryList {...props} />,
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
      widgetFunc: (props) => <MealForm {...props} />,
    },
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    }
  },
}

export default config