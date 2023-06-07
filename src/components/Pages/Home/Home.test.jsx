import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../../container/store';
import Home from './Home';

it('Home test', () => {
    render(<Provider store={store}><Router><Home /></Router></Provider>);
    expect(screen.getByTestId('home')).toBeInTheDocument();
});