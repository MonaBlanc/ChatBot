import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter as Router } from 'react-router-dom';

configure({ adapter: new Adapter() });
describe('Home test', () => {
    const home = shallow(<Router><Home /></Router>);
    it('should match the snapshot', () => {
        expect(home.html()).toMatchSnapshot();
    });
});