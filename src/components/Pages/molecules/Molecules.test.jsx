import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';
import Slider from './Hero';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter as Router } from 'react-router-dom';

configure({ adapter: new Adapter() });
describe('Header test', () => {
    const header = shallow(<Router><Header /></Router>);
    it('should match the snapshot', () => {
        expect(header.html()).toMatchSnapshot();
    });
});
describe('Footer test', () => {
    const footer = shallow(<Router><Footer /></Router>);
    it('should match the snapshot', () => {
        expect(footer.html()).toMatchSnapshot();
    });
});
describe('Hero test', () => {
    const hero = shallow(<Router><Hero /></Router>);
    it('should match the snapshot', () => {
        expect(hero.html()).toMatchSnapshot();
    });
});