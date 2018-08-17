import {BTC_GBP_FETCH_BEGIN, BTC_GBP_FETCH_SUCCESS, BTC_GBP_FETCH_ERROR} from "../actions/btcgbp";
import Immutable from "immutable";

const setLoading = (state, action) => state.set('loading', true);
const parseErrorResponse = (state, action) => state.merge({
    loading: false,
    error: Immutable.fromJS(action.payload.error)
});
const parseSuccessResponse = (state, action) => {
    return state.merge({
        loading: false,
        error: undefined,
        prices: [...state.get('prices'), action.payload.prices]
    });
};

const ACTION_HANDLERS = {
    [BTC_GBP_FETCH_BEGIN]: setLoading,
    [BTC_GBP_FETCH_SUCCESS]: parseSuccessResponse,
    [BTC_GBP_FETCH_ERROR]: parseErrorResponse
};

// Reducer
const initialState = Immutable.fromJS({
    prices: [],
    loading: false,
    error: undefined
});
export default function btcgbpReducer (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}