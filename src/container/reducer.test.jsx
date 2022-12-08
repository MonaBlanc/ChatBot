import rootreducer from "./reducer"
import * as actionType from './types';

describe("Reducer test", () => {
    test("Reducer random meal success state", () => {
        const initialState = { isLoggedIn: false, user: null };
        const action = { type: actionType.GET_RANDOM_MEAL_SUCCESS };
        const result = rootreducer(initialState, action);
        expect(result).toEqual(initialState);
    })
    test("Reducer random meal fail state", () => {
        const initialState = { isLoggedIn: false, user: null };
        const action = { type: actionType.GET_RANDOM_MEAL_FAIL };
        const result = rootreducer(initialState, action);
        expect(result).toEqual(initialState);
    })
    test("Reducer get recipe success state", () => {
        const initialState = { isLoggedIn: false, user: null };
        const action = { type: actionType.GET_RECIPE_SUCCESS };
        const result = rootreducer(initialState, action);
        expect(result).toEqual(initialState);
    })
    test("Reducer get recipe fail state", () => {
        const initialState = { isLoggedIn: false, user: null };
        const action = { type: actionType.GET_RECIPE_FAIL };
        const result = rootreducer(initialState, action);
        expect(result).toEqual(initialState);
    })
    test("Reducer empty state", () => {
        const initialState = { isLoggedIn: false, user: null };
        const action = { type: "" };
        const result = rootreducer(initialState, action);
        expect(result).toEqual(initialState);
    })
})