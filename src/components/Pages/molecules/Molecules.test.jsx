import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../../container/store';
import Error from './Error';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import Slider from './Slider';


/* Testing the rendering of the components */

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


describe('Error test', () => {
    it('loads error page', () => {
        render(<Error />, { wrapper: Wrapper });
        expect(screen.getByTestId('error')).toBeInTheDocument();
    });
});

describe('Slider test', () => {
    it('loads slider', () => {
      render(<Slider />, { wrapper: Wrapper });
      // Test any specific behavior or elements related to the Slider component
      expect(screen.getByTestId('slider')).toBeInTheDocument();
      // Add more assertions as needed
    });
  });
