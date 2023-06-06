import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../../container/store';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';


function Wrapper({ children }) {
    return (
        <Provider store={store}>
            <Router>
                {children}
            </Router>
        </Provider>
    );
}

describe('Header test', () => {
    it('loads header and navbar', () => {
        render(<Header />, { wrapper: Wrapper });
        expect(screen.getByTestId('header')).toBeInTheDocument();
        expect(screen.getByTestId('nav')).toBeInTheDocument();
    });
});
describe('Footer test', () => {
    it('loads footer', () => {
        render(<Footer />, { wrapper: Wrapper });
        expect(screen.getByTestId('footer')).toBeInTheDocument();
    });
});
describe('Hero test', () => {
    it('loads title', () => {
        render(<Hero />, { wrapper: Wrapper });
        expect(screen.getByTestId('title')).toBeInTheDocument();
    });
});