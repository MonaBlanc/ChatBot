import React from "react";
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import RandomList from "./RandomList";

describe("RandomList Snapshot tests", () => {
    test("RandomList snapshot", () => {
        const snapshot = render(<RandomList />, { wrapper: BrowserRouter });
        expect(snapshot).toMatchSnapshot();
    })
})