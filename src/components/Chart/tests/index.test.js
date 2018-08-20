import React from 'react';
import "../../../../setup/tests/setupEnzyme";
import { shallow } from 'enzyme';
import Chart from '../';

const wrapper = shallow(<Chart/>);

describe('<Chart/>', () => {
    describe('render()', () => {
        it('should render', () => {
            expect(wrapper).toBeTruthy();
        });

        it('should display Line component', () => {
            expect(wrapper.find('Line').text()).toEqual('<Line />');
        });
    });
});