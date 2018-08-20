import configureStore from 'redux-mock-store';
import {BTC_GBP_FETCH_BEGIN, BTC_GBP_FETCH_SUCCESS, BTC_GBP_FETCH_ERROR} from "../btcgbp";

const mockStore = configureStore();
const store = mockStore();

describe('btcgbp actions', () => {
    beforeEach(() => {
        store.clearActions();
    });

    it('should add BTC_GBP_FETCH_BEGIN action to store when dispatched', () => {
        const expectedAction = {type: BTC_GBP_FETCH_BEGIN };
        store.dispatch(expectedAction);
        expect(store.getActions().includes(expectedAction)).toBeTruthy();
    });

    it('should add BTC_GBP_FETCH_SUCCESS action to store when dispatched', () => {
        const expectedAction = {type: BTC_GBP_FETCH_SUCCESS, payload: { lastPrice: 20 }};
        store.dispatch(expectedAction);
        expect(store.getActions().includes(expectedAction)).toBeTruthy();
    });

    it('should add BTC_GBP_FETCH_ERROR action to store when dispatched', () => {
        const expectedAction = {type: BTC_GBP_FETCH_ERROR, payload: { error: 'Some error' }}
        store.dispatch(expectedAction);
        expect(store.getActions().includes(expectedAction)).toBeTruthy();
    });
});