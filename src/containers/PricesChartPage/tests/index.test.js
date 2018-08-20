import React from 'react';
import { shallow } from 'enzyme';
import "../../../../setup/tests/setupEnzyme";
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import PricesChartPage from '../';

const initialState = {
    timePrices: [],
    loading: false,
    error: undefined
};
const mockStore = configureStore([thunk]);
let store;
let wrapper;
let component;

beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<PricesChartPage store={store}/>);
    component = wrapper.instance();
});

describe('<PricesChartPage/>', () => {
    it('should render', () => {
        expect(component).toBeTruthy();
    });

    it('should display the last price', () => {
        const initialState = {
            timePrices: [
                {time: new Date().toLocaleTimeString(), price: 27},
                {time: new Date().toLocaleTimeString(), price: 25}
            ],
            loading: false,
            error: undefined
        };

        store = mockStore(initialState);
        wrapper = shallow(<PricesChartPage store={store}/>);

        expect(wrapper.dive().find('.last-price').text()).toEqual('£25');
    });

    it('should display the TrendArrow', () => {
        expect(wrapper.dive().find('.last-price-container').text()).toEqual('<TrendArrow />');
    });

    it('should not display LoadingOverlay when not loading', () => {
        expect(wrapper.dive().find('.loading-overlay-container').text()).not.toEqual('<LoadingOverlay />');
    });

    it('should display Chart', () => {
        expect(wrapper.dive().find('.chart-container').text()).toEqual('<Chart />');
    });

    it('should display LoadingOverlay when loading', () => {
        const initialState = {
            timePrices: [],
            loading: true,
            error: undefined
        };

        store = mockStore(initialState);
        wrapper = shallow(<PricesChartPage store={store}/>);
        expect(wrapper.dive().find('.loading-overlay-container').text()).toEqual('<LoadingOverlay />');
    });

    it('should not display error-message', () => {
        expect(wrapper.dive().find('.error-message').exists()).toBeFalsy();
    });

    it('should display the error-message', () => {
        const initialState = {
            timePrices: [],
            loading: false,
            error: {
                message: 'Some error'
            }
        };

        store = mockStore(initialState);
        wrapper = shallow(<PricesChartPage store={store}/>);

        expect(wrapper.dive().find('.error-message').text()).toEqual('Error fetching new BTC/GBP price. Some error');
    });
});