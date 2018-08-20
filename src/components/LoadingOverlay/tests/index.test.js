import React from 'react';
import "../../../../setup/tests/setupEnzyme";
import { shallow } from 'enzyme';
import LoadingOverlay from '../';

const wrapper = shallow(<LoadingOverlay/>);

describe('<LoadingOverlay/>', () => {
    it('should render', () => {
        expect(wrapper).toBeTruthy();
    });

    it('should display the LoadingIndicator', () => {
        expect(wrapper.find('.indicator').text()).toEqual('<LoadingIndicator />')
    });
});