import React from "react";
import { render, screen } from '@testing-library/react';
import Home from "./Home";
import { BrowserRouter } from 'react-router-dom'

test("If header is rendered", () => {
    render(< Home />, { wrapper: BrowserRouter });
    screen.getByText("Logo Chatbot");
});

test("If hero is rendered", () => {
    render(< Home />, { wrapper: BrowserRouter });
    screen.getByText("WHICH");
});

test("If description is rendered", () => {
    render(< Home />, { wrapper: BrowserRouter });
    screen.getByText("ChefBot, your new Sous-chef!");
});

test("If footer is rendered", () => {
    render(< Home />, { wrapper: BrowserRouter });
    screen.getByText("Chefbot");
});