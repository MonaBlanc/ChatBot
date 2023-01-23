import * as actionType from './types';

const initialState = { isLoggedIn: false, user: null };

// reducer
export default function rootReducer(state = initialState, action) {
    const { type } = action;
    // const { type, payload } = action;
    switch (type) {
        case actionType.GET_RANDOM_MEAL_SUCCESS:
            return {
                ...state,
            };
        case actionType.GET_RANDOM_MEAL_FAIL:
            return {
                ...state,
            };
        case actionType.GET_RECIPE_SUCCESS:
            return {
                ...state,
            };
        case actionType.GET_RECIPE_FAIL:
            return {
                ...state,
            };
        default:
            return state;
    }
} 