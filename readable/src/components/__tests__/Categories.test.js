import React from 'react';
import { shallow } from 'enzyme';
import Categories from './../Categories';

const CATEGORIES = [
	{ name: 'React', path: 'react' },
	{ name: 'Redux', path: 'redux' }
];

describe('Categories component', () => {
    it('should render correctly', () => {
        const wrapper = shallow(
            <Categories categories={CATEGORIES} />
        );

        expect(wrapper).toMatchSnapshot();
    });
});