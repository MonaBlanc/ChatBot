import React from "react";
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import OpeningOptions from "./OpeningOptions";

test("Should show 4 options", () => {
    const goToFridge = () => { };
    const getRandomMeal = () => { };
    const actionProvider = [
        goToFridge,
        getRandomMeal
    ];
    const props = [
        actionProvider
    ];
    render(< OpeningOptions props={actionProvider} />, { wrapper: BrowserRouter });
    screen.getByText("Go to the fridge");
    screen.getByText("I have something in mind");
    screen.getByText("I have no idea");
    screen.getByText("Quit");
})