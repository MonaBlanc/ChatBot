import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';

describe('Header test', () => {
    const header = render(<Provider><Router><Header /></Router></Provider>, { wrapper: Router });
    it('should match the snapshot', () => {
        expect(header.html()).toMatchSnapshot();
    });
});
describe('Footer test', () => {
    const footer = render(<Provider><Router><Footer /></Router></Provider>);
    it('should match the snapshot', () => {
        expect(footer.html()).toMatchSnapshot();
    });
});
describe('Hero test', () => {
    const hero = render(<Router><Hero /></Router>);
    it('should match the snapshot', () => {
        expect(hero.html()).toMatchSnapshot();
    });
});