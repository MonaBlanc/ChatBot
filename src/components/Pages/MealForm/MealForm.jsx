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
      props.actionProvider.getFormMeal(state.diet, state.dishtype, state.mainIngredient);
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
                <input type="radio" name="diet" id="diet-vegan" value={"Vegan"} onChange={handleChange} />
                <label htmlFor="diet-vegan">
                  <div className="optionIcon">
                    <img src="images/vegan.png" alt="vegan" />
                  </div> 
                  Vegan
                </label>
            </li>
            <li>
              <input type="radio" name="diet" id="diet-vegetarian" value={"Vegetarian"} onChange={handleChange}/>
              <label htmlFor="diet-vegetarian">
                <div className="optionIcon">
                  <img src="images/vege.png" alt="vegetariangan" />
                </div>
                Vegetarian
              </label>
            </li>
            <li>
              <input type="radio" name="diet" id="diet-none" value={""} onChange={handleChange} defaultChecked />
              <label htmlFor="diet-none">
                <div className="optionIcon">
                  <img src="images/none.png" alt="none" />
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
              <input type="radio" name="dishtype" id="dishtype-breakfast" value={"Breakfast"} onChange={handleChange}/>
              <label htmlFor="dishtype-breakfast">
                <div className="optionIcon">
                  <img src="images/breakfast.png" alt="breakfast" />
                </div>
                Breakfast
                </label>
            </li>
            <li>
              <input type="radio" name="dishtype" id="dishtype-starter" value={"Starter"} onChange={handleChange}/>
              <label htmlFor="dishtype-starter">
                <div className="optionIcon">
                  <img src="images/starter.png" alt="starter" />
                </div>
                Starter
                </label>
            </li>
            <li>
              <input type="radio" name="dishtype" id="dishtype-side" value={"Side"} onChange={handleChange}/>
              <label htmlFor="dishtype-side">
                <div className="optionIcon">
                  <img src="images/side.png" alt="side" />
                </div>
                Side
              </label>
            </li>
            <li>
              <input type="radio" name="dishtype" id="dishtype-dessert" value={"Dessert"} onChange={handleChange}/>
              <label htmlFor="dishtype-dessert">
                <div className="optionIcon">
                  <img src="images/dessert.png" alt="dessert" />
                </div>
                Dessert
              </label>
            </li>
            <li>
              <input type="radio" name="dishtype" id="dishtype-special"  value={"Special"} onChange={handleChange}/>
              <label htmlFor="dishtype-special">
                <div className="optionIcon">
                  <img src="images/special.png" alt="special" />
                </div>
                Special
              </label>
            </li>
            
            <li>
              <input type="radio" name="dishtype" id="dishtype-any"  value={""} onChange={handleChange} defaultChecked />
              <label htmlFor="dishtype-any">
                <div className="optionIcon">
                  <img src="images/none.png" alt="any" />
                </div>
                Any
              </label>
            </li>
          </ul>
        </div>
        <h2>Main Ingredient:</h2>
        <div className="group">
          <ul id="mainIngredient" className="mt-4">
            <li>
              <input type="radio" name="mainIngredient" id="mainIngredient-lamb"  value={"Lamb"} onChange={handleChange} />
              <label htmlFor="dishtype-lamb">
                <div className="optionIcon">
                  <img src="images/lamb.png" alt="lamb" />
                </div>
                Lamb
              </label>
            </li>
            <li>
              <input type="radio" name="mainIngredient" id="mainIngredient-pasta"  value={"Pasta"} onChange={handleChange} />
              <label htmlFor="mainIngredient-pasta">
                <div className="optionIcon">
                  <img src="images/pasta.png" alt="pasta" />
                </div>
                Pasta
              </label>
            </li>
            <li>
              <input type="radio" name="mainIngredient" id="mainIngredient-pork"  value={"Pork"} onChange={handleChange} />
              <label htmlFor="mainIngredient-pork">
                <div className="optionIcon">
                  <img src="images/pork.png" alt="pork" />
                </div>
                Pork
              </label>
            </li>
            <li>
              <input type="radio" name="mainIngredient" id="mainIngredient-goat"  value={"Goat"} onChange={handleChange} />
              <label htmlFor="mainIngredient-goat">
                <div className="optionIcon">
                  <img src="images/goat.png" alt="goat" />
                </div>
                Goat
              </label>
            </li>
            <li>
              <input type="radio" name="mainIngredient" id="mainIngredient-seafood"  value={"Seafood"} onChange={handleChange}/>
              <label htmlFor="mainIngredient-seafood">
                <div className="optionIcon">
                  <img src="images/seafood.png" alt="seafood" />
                </div>
                Seafood
              </label>
            </li>
            <li>
              <input type="radio" name="mainIngredient" id="mainIngredient-all"  value={""} onChange={handleChange} defaultChecked />
              <label htmlFor="mainIngredient-any">
                <div className="optionIcon">
                  <img src="images/none.png" alt="any" />
                </div>
                Any
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
