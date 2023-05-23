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

    const handleSubmit = event => {
        props.actionProvider.getFormMeal(state.category, state.main);
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
                <div class="optionIcon">
                  <input type="radio" name="diet" id="diet-vegan" value={"vegan"} onChange={handleChange}  />
                  <img src="images/vegan.png" alt="vegan" />
                </div> 
                <label htmlFor="diet-vegan">
                  Vegan
                </label>
            </li>
            <li>
              <div class="optionIcon">
                <input type="radio" name="diet" id="diet-vegetarian" value={"vegetarian"} onChange={handleChange} />
                <img src="images/vege.png" alt="vevegetariangan" />
              </div>
              <label htmlFor="diet-vegetarian">Vegetarian</label>
            </li>
            <li>
              <div class="optionIcon">
                <input type="radio" name="diet" id="diet-all" value={"all"} onChange={handleChange} defaultChecked />
                <img src="images/none.png" alt="all" />
              </div>
              <label htmlFor="diet-all">None</label>
            </li>
          </ul>
        </div>
        <h2>Type of dish:</h2>
        <div className="group">
          <ul id="dishtype" >
            <li>
              <div class="optionIcon">
                <input type="radio" name="dishtype" id="dishtype-breakfast" value={"breakfast"} onChange={handleChange} />
                <img src="images/breakfast.png" alt="breakfast" />
              </div>
              <label htmlFor="dishtype-breakfast">Breakfast</label>
            </li>
            <li>
              <div class="optionIcon">
                <input type="radio" name="dishtype" id="dishtype-starter" value={"starter"} onChange={handleChange} />
                <img src="images/starter.png" alt="starter" />
              </div>
              <label htmlFor="dishtype-starter">Starter</label>
            </li>
            <li>
              <div class="optionIcon">
                <input type="radio" name="dishtype" id="dishtype-meal" value={"meal"} onChange={handleChange} />
                <img src="images/meal.png" alt="meal" />
              </div>
              <label htmlFor="dishtype-meal">Meal</label>
            </li>
            <li>
              <div class="optionIcon">
                <input type="radio" name="dishtype" id="dishtype-dessert" value={"dessert"} onChange={handleChange} />
                <img src="images/dessert.png" alt="dessert" />
              </div>
              <label htmlFor="dishtype-dessert">Dessert</label>
            </li>
            <li>
              <div class="optionIcon">
                <input type="radio" name="dishtype" id="dishtype-all"  value={"all"} onChange={handleChange} defaultChecked />
                <img src="images/none.png" alt="all" />
              </div>
              <label htmlFor="dishtype-all">All</label>
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
