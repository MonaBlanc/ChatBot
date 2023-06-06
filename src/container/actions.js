import * as actionType from './types';
import * as MealsService from '../components/services/meals.service';
import * as AuthService from '../components/services/auth.service';

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

export const getFormMealAction = (diet, dishtype) => (dispatch) => {
    // make sure dispatch is asynchronous
    // dispatch should be implemented in an action not into the component
    // use redux-thunk (in store.js) to do that
    return MealsService.getFormMeal(diet, dishtype)
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
export const registerAction = (payload) => (dispatch) => {
    // make sure dispatch is asynchronous
    // dispatch should be implemented in an action not into the component
    // use redux-thunk (in store.js) to do that
    return AuthService.register(payload)
        .then(response => {
            dispatch({
                type: actionType.REGISTER_SUCCESS,
                payload: response.data
            })
            return Promise.resolve(response.data);
        })
        .catch(error => {
            dispatch({
                type: actionType.REGISTER_FAIL,
                payload: { err: error.message || "Registration failed." }
            })
            return Promise.reject(error);
        })
}

// login action

export const loginAction = (userCredentials) => (dispatch) => {
    return AuthService.login(userCredentials)
        .then(data => {
            dispatch({
                type: actionType.LOGIN_SUCCESS,
                payload: data
            })
            return Promise.resolve(data);
        })
        .catch(error => {
            dispatch({
                type: actionType.LOGIN_FAIL,
                payload: { err: error.message || "Login failed." }
            })
            return Promise.reject(error)
        });
}

// logout action
export const logoutAction = () => (dispatch) => {
    const msg = AuthService.logout()

    dispatch({
        type: actionType.LOGOUT,
        payload: { msg }
    })

    return Promise.resolve(msg)

}

