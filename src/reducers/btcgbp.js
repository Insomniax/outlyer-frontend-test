import {BTC_GBP_FETCH_BEGIN, BTC_GBP_FETCH_SUCCESS, BTC_GBP_FETCH_ERROR} from "../actions/btcgbp";

const setLoading = (state, action) => {
    const newState = {...state};
    newState.loading = true;
    return newState;
};
const parseErrorResponse = (state, action) => {
    const newState = {...state};
    newState.loading = false;
    newState.error = action.payload.error;
    return newState;
};
const parseSuccessResponse = (state, action) => {
    const newState = {...state};
    newState.loading = false;
    newState.error = undefined;
    newState.timePrices.push({time: new Date().toLocaleTimeString(), price: action.payload.lastPrice});
    return newState;
};

const ACTION_HANDLERS = {
    [BTC_GBP_FETCH_BEGIN]: setLoading,
    [BTC_GBP_FETCH_SUCCESS]: parseSuccessResponse,
    [BTC_GBP_FETCH_ERROR]: parseErrorResponse
};

// Reducer
const initialState = {
    timePrices: [],
    loading: false,
    error: undefined
};
export default function btcgbpReducer (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}