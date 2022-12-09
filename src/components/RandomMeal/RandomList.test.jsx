import React from "react";
import RandomList from "./RandomList";
import { render } from "@testing-library/react";
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  container.remove();
  container = null;
});
describe("RandomList render", () => {
  const middlewares = [thunk]
  const mockStore = configureMockStore(middlewares)
  const initialState = { isLoggedIn: false, user: null };
  let store;
  test("RandomList render", () => {
    store = mockStore(initialState)
    render(<Provider store={store}><RandomList /></Provider>, container);
  });
  test("RandomList snapshot", () => {
    const snapshot = render(<Provider store={store}><RandomList /></Provider>, container);
    expect(snapshot).toMatchSnapshot();
  })
}); 