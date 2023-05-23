import "../Chefbot/Chefbot.css";
import "./MealForm.css";

const MealForm = (props) => {
  const { state, setState } = props;

  const handleChange = (event) => {
    setState((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

    const handleSubmit = (event) => {
      props.actionProvider.getFormMeal(state.diet, state.dishtype);
      event.preventDefault();
    };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>
          <strong>Diet:</strong>
        </h2>
        <div className="group"> 
          <ul id="diet">
            <li>
                <input type="radio" name="diet" id="diet-vegan" value={"Vegan"} onChange={handleChange}  />
                <label htmlFor="diet-vegan">
                  <div className="optionIcon">
                    <img src="images/vegan.png" alt="vegan" />
                  </div> 
                  Vegan
                </label>
            </li>
            <li>
              <input type="radio" name="diet" id="diet-vegetarian" value={"Vegetarian"} onChange={handleChange} />
              <label htmlFor="diet-vegetarian">
                <div className="optionIcon">
                  <img src="images/vege.png" alt="vevegetariangan" />
                </div>
                Vegetarian
              </label>
            </li>
            <li>
              <input type="radio" name="diet" id="diet-all" value={""} onChange={handleChange} defaultChecked />
              <label htmlFor="diet-all">
                <div className="optionIcon">
                  <img src="images/none.png" alt="all" />
                </div>
                None
              </label>
            </li>
          </ul>
        </div>
        <h2>Type of dish:</h2>
        <div className="group">
          <ul id="dishtype" >
            <li>
              <input type="radio" name="dishtype" id="dishtype-breakfast" value={"Breakfast"} onChange={handleChange} />
              <label htmlFor="dishtype-breakfast">
                <div className="optionIcon">
                  <img src="images/breakfast.png" alt="breakfast" />
                </div>
                Breakfast
                </label>
            </li>
            <li>
              <input type="radio" name="dishtype" id="dishtype-starter" value={"Starter"} onChange={handleChange} />
              <label htmlFor="dishtype-starter">
                <div className="optionIcon">
                  <img src="images/starter.png" alt="starter" />
                </div>
                Starter
                </label>
            </li>
            <li>
              <input type="radio" name="dishtype" id="dishtype-meal" value={"Meal"} onChange={handleChange} />
              <label htmlFor="dishtype-meal">
                <div className="optionIcon">
                  <img src="images/meal.png" alt="meal" />
                </div>
                Meal
              </label>
            </li>
            <li>
              <input type="radio" name="dishtype" id="dishtype-dessert" value={"Dessert"} onChange={handleChange} />
              <label htmlFor="dishtype-dessert">
                <div className="optionIcon">
                  <img src="images/dessert.png" alt="dessert" />
                </div>
                Dessert
              </label>
            </li>
            <li>
              <input type="radio" name="dishtype" id="dishtype-all"  value={""} onChange={handleChange} defaultChecked />
              <label htmlFor="dishtype-all">
                <div className="optionIcon">
                  <img src="images/none.png" alt="all" />
                </div>
                All
              </label>
            </li>
          </ul>
        </div>
        <button type="submit" className="opening-option-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default MealForm;
