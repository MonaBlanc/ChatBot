import React from "react";
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import Header from "./Header";
import Hero from "./Hero";
import Description from "./Description";
import Footer from "./Footer";

describe("Snapshots tests", () => {
    test("Header snapshot", () => {
        const snapshot = render(<Header />, { wrapper: BrowserRouter });
        expect(snapshot).toMatchSnapshot();
    })
})
describe("Snapshots tests", () => {
    test("Hero snapshot", () => {
        const snapshot = render(<Hero />, { wrapper: BrowserRouter });
        expect(snapshot).toMatchSnapshot();
    })
})
describe("Snapshots tests", () => {
    test("Description snapshot", () => {
        const snapshot = render(<Description />, { wrapper: BrowserRouter });
        expect(snapshot).toMatchSnapshot();
    })
})
describe("Snapshots tests", () => {
    test("Footer snapshot", () => {
        const snapshot = render(<Footer />, { wrapper: BrowserRouter });
        expect(snapshot).toMatchSnapshot();
    })
})