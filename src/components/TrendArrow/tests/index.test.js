import React from 'react';
import "../../../../setup/tests/setupEnzyme";
import { shallow } from 'enzyme';
import TrendArrow from '../';

let wrapper;

beforeEach(() => {
   wrapper = shallow(<TrendArrow/>);
});

describe('<TrendArrow/>', () => {
    it('should render', () => {
        expect(wrapper).toBeTruthy();
    });

    it ('should display nothing if \'from\' and \'to\' props are undefined', () => {
        expect(wrapper.text()).toEqual('');
    });

    it ('should display nothing if \'from\' and \'to\' props are equal', () => {
        wrapper = shallow(<TrendArrow from={20} to={20}/>);
        expect(wrapper.text()).toEqual('');
    });

    it ('should display the correct trend percentage', () => {
        wrapper = shallow(<TrendArrow from={20} to={40}/>);
        expect(wrapper.text()).toEqual(' +100.00%');

        wrapper = shallow(<TrendArrow from={20} to={10}/>);
        expect(wrapper.text()).toEqual(' -50.00%');
    });

    it('should display a green arrow-up if \'from\' value is lesser than \'to\'', () => {
        wrapper = shallow(<TrendArrow from={20} to={40}/>);
        expect(wrapper.find('div').hasClass('up')).toBeTruthy();
        expect(wrapper.find('i').hasClass('fa-arrow-up')).toBeTruthy();
    });

    it('should display a red arrow-down if \'from\' value is lesser than \'to\'', () => {
        wrapper = shallow(<TrendArrow from={20} to={10}/>);
        expect(wrapper.find('div').hasClass('down')).toBeTruthy();
        expect(wrapper.find('i').hasClass('fa-arrow-down')).toBeTruthy();
    });
});