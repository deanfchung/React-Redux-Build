import App from '../../components/App';
import React from 'react';
import { shallow } from 'enzyme';

it('runs demo test without failing', () => {
	expect(2 + 2).toBe(4);
});
it('renders without crashing', () => {
	expect(shallow(<App />).length).toEqual(1);
});
