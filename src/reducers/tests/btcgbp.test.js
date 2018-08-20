import btcgbpReducer from '../btcgbp';
import {BTC_GBP_FETCH_BEGIN, BTC_GBP_FETCH_SUCCESS, BTC_GBP_FETCH_ERROR} from "../../actions/btcgbp";

describe('btcgbp reducer', () => {
    let initialState;

    beforeEach(() => {
        initialState = {
            timePrices: [],
            loading: false,
            error: undefined
        };
    })

    it('should not change for unknown action', () => {
        const action = {type: 'DUMMY_ACTION'};
        const expectedState = initialState;
        expect(btcgbpReducer(initialState, action)).toEqual(expectedState);
    });

    it('should set loading to true on BTC_GBP_FETCH_BEGIN', () => {
        const action = {type: BTC_GBP_FETCH_BEGIN};
        const expectedState = {
            timePrices: [],
            loading: true,
            error: undefined
        };
        expect(btcgbpReducer(initialState, action)).toEqual(expectedState);
    });

    it('should reset loading to false and add the price and time on BTC_GBP_FETCH_SUCCESS', () => {
        const now = new Date().toLocaleTimeString();
        const action = { type: BTC_GBP_FETCH_SUCCESS, payload: { lastPrice: 20, time: now } };
        const expectedState = {
            timePrices: [{price: 20, time: now}],
            loading: false,
            error: undefined
        };
        expect(btcgbpReducer(initialState, action)).toEqual(expectedState);
    });

    it('should reset loading to false and set the error on BTC_GBP_FETCH_ERROR', () => {
        const action = {type: BTC_GBP_FETCH_ERROR, payload: { error: 'Some error' }};
        const expectedState = {
            timePrices: [],
            loading: false,
            error: 'Some error'
        };
        expect(btcgbpReducer(initialState, action)).toEqual(expectedState);
    });
});