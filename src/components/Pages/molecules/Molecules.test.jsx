import React from "react";
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import Header from "./Header";
import Hero from "./Hero";
import Description from "./Description";
import Footer from "./Footer";
import Slider from "./Slider";

test("Header should have a navigation bar", () => {
    render(< Header />, { wrapper: BrowserRouter });
    const nav = screen.getAllByRole("navigation");
    expect(nav).toHaveLength(1);
})

test("Header header should have 4 links", () => {
    render(< Header />, { wrapper: BrowserRouter });
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(4);
})

test("Header header should have a my account button", () => {
    render(< Header />, { wrapper: BrowserRouter });
    const links = screen.getAllByRole("button");
    expect(links).toHaveLength(1);
})

test("My account button should say 'My Account'", () => {
    render(< Header />, { wrapper: BrowserRouter });
    screen.getByText("My Account");
})

test("Hero should show 'WHICH FOOD MOOD ARE YOU IN?", () => {
    render(< Hero />, { wrapper: BrowserRouter });
    screen.getByText("WHICH");
    screen.getByText("FOOD MOOD");
    screen.getByText("ARE YOU IN?");
})

test("Hero header should have at button", () => {
    render(< Hero />, { wrapper: BrowserRouter });
    const links = screen.getAllByRole("button");
    expect(links).toHaveLength(1);
})

test("Hero button should say 'Find your next meal ->'", () => {
    render(< Hero />, { wrapper: BrowserRouter });
    screen.getByText("Find your next meal ->");
})

test("Description should have right figma text", () => {
    render(< Description />, { wrapper: BrowserRouter });
    screen.getByText("ChefBot, your new Sous-chef!");
    screen.getByText("ChefBot is an intelligent chatbot that will help you find the perfect meal for your cravings!");
    screen.getByText("Scroll below to see some of the cool features of ChiefBot.");
})

test("Footer should mention chefbot", () => {
    render(< Footer />, { wrapper: BrowserRouter });
    screen.getByText("Chefbot");
})

// test("Slider should have 4 links", () => {
//     render(< Slider />, { wrapper: BrowserRouter });
//     const images = screen.getAllByRole("img");
//     expect(links).toHaveLength(7);
// })