import "../Chefbot/Chefbot.css";
import "./MealForm.css";

const MealForm = (props) => {
  const { state, setState } = props;

  const handleChange = (event) => {
    const value = event.currentTarget.querySelector('input[type="radio"]').value;
    const name = event.currentTarget.querySelector('input[type="radio"]').name;
    console.log(name, value);
    setState((state) => ({
      ...state,
      [name]: value,
    }));
  };

    const handleSubmit = (event) => {
      console.log("Meal form: ", state.diet, state.dishtype);
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
                <div className="optionIcon" onClick={(e)=>handleChange(e)}>
                  <input type="radio" name="diet" id="diet-vegan" value={"Vegan"}   />
                  <img src="images/vegan.png" alt="vegan" />
                </div> 
                <label htmlFor="diet-vegan">
                  Vegan
                </label>
            </li>
            <li>
              <div className="optionIcon" onClick={(e)=>handleChange(e)}>
                <input type="radio" name="diet" id="diet-vegetarian" value={"Vegetarian"}  />
                <img src="images/vege.png" alt="vege" />
              </div>
              <label htmlFor="diet-vegetarian">Vegetarian</label>
            </li>
            <li>
              <div className="optionIcon" onClick={(e)=>handleChange(e)}>
                <input type="radio" name="diet" id="diet-all" value={""}  defaultChecked />
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
              <div className="optionIcon" onClick={(e)=>handleChange(e)}>
                <input type="radio" name="dishtype" id="dishtype-breakfast" value={"Breakfast"}  />
                <img src="images/breakfast.png" alt="breakfast" />
              </div>
              <label htmlFor="dishtype-breakfast">Breakfast</label>
            </li>
            <li>
              <div className="optionIcon" onClick={(e)=>handleChange(e)}>
                <input type="radio" name="dishtype" id="dishtype-starter" value={"Starter"}  />
                <img src="images/starter.png" alt="starter" />
              </div>
              <label htmlFor="dishtype-starter">Starter</label>
            </li>
            <li>
              <div className="optionIcon" onClick={(e)=>handleChange(e)}>
                <input type="radio" name="dishtype" id="dishtype-meal" value={"Meal"}  />
                <img src="images/meal.png" alt="meal" />
              </div>
              <label htmlFor="dishtype-meal">Meal</label>
            </li>
            <li>
              <div className="optionIcon" onClick={(e)=>handleChange(e)}>
                <input type="radio" name="dishtype" id="dishtype-dessert" value="Dessert"  />
                <img src="images/dessert.png" alt="dessert" />
              </div>
              <label htmlFor="dishtype-dessert">Dessert</label>
            </li>
            <li>
              <div className="optionIcon" onClick={(e)=>handleChange(e)}>
                <input type="radio" name="dishtype" id="dishtype-all"  value={""}  defaultChecked />
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
