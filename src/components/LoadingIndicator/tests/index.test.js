import React from 'react';
import "../../../../setup/tests/setupEnzyme";
import { shallow } from 'enzyme';
import LoadingIndicator from '../';

const wrapper = shallow(<LoadingIndicator srLoadingText='Loading...'/>);

describe('<LoadingIndicator/>', () => {
    it('should render', () => {
        expect(wrapper).toBeTruthy();
    });

    it('should display spinner with loading text for screen readers', () => {
        expect(wrapper.find('.fa-spinner.fa-pulse')).toBeTruthy();
        expect(wrapper.find('span.sr-only').text()).toEqual('Loading...')
    });
});