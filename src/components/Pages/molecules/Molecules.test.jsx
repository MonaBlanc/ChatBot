import React from "react";
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom'
import Header from "./Header";
import { Router } from 'react-router-dom';

afterEach(cleanup);
describe('Molecules', () => {
    it.only('Header render test: one logo, three links and an account button', () => {
        render(<Router><Header /></Router>);
        expect(getByTestId("logo")).toHaveTextContent('Logo Chatbot');
        expect(getByTestId("link1")).toHaveTextContent('Home');
        expect(getByTestId("link2")).toHaveTextContent('Fridge');
        expect(getByTestId("link3")).toHaveTextContent('Help');
        expect(getByText("Fridge")).toHaveClass("text-orange");
    });
})