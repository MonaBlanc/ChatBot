import * as actionType from './types';
import * as MealsService from '../components/services/meals.service';

// get random meal action
export const getRecipeAction = (id) => (dispatch) => {
    // make sure dispatch is asynchronous
    // dispatch should be implemented in an action not into the component
    // use redux-thunk (in store.js) to do that
    return MealsService.getRecipe(id)
        .then(response => {
            dispatch({
                type: actionType.GET_RECIPE_SUCCESS,
                payload: response.data
            })
            return Promise.resolve(response.data);
        })
        .catch(error => {
            dispatch({
                type: actionType.GET_RECIPE_FAIL,
                payload: { err: error.message || "Fetch recipe failed." }
            })
            return Promise.reject(error);
        })
}




// get random meal action
export const randomMealAction = () => (dispatch) => {
    // make sure dispatch is asynchronous
    // dispatch should be implemented in an action not into the component
    // use redux-thunk (in store.js) to do that
    return MealsService.getRandomMeal()
        .then(response => {
            dispatch({
                type: actionType.GET_RANDOM_MEAL_SUCCESS,
                payload: response.data
            })
            return Promise.resolve(response.data);
        })
        .catch(error => {
            dispatch({
                type: actionType.GET_RANDOM_MEAL_FAIL,
                payload: { err: error.message || "Fetch random meal failed." }
            })
            return Promise.reject(error);
        })
}

export const getFormMealAction = (diet, dishtype, main) => (dispatch) => {
    // make sure dispatch is asynchronous
    // dispatch should be implemented in an action not into the component
    // use redux-thunk (in store.js) to do that
    return MealsService.getFormMeal(diet, dishtype, main)
        .then(response => {
            dispatch({
                type: actionType.GET_FORM_MEAL_SUCCESS,
                payload: response.data
            })
            return Promise.resolve(response.data);
        })
        .catch(error => {
            dispatch({
                type: actionType.GET_FORM_MEAL_FAIL,
                payload: { err: error.message || "Fetch random meal failed." }
            })
            return Promise.reject(error);
        })
}


