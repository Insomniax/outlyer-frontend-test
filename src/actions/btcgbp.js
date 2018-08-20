import * as btcGbpApi from '../api/btcgbp';

export const BTC_GBP_FETCH_BEGIN = 'BTC_GBP_FETCH_BEGIN';
export const BTC_GBP_FETCH_SUCCESS = 'BTC_GBP_FETCH_SUCCESS';
export const BTC_GBP_FETCH_ERROR = 'BTC_GBP_FETCH_ERROR';

export const fetchBtcGbpBegin = () => ({ type: BTC_GBP_FETCH_BEGIN });
export const fetchBtcGbpSuccess = lastPrice => ({ type: BTC_GBP_FETCH_SUCCESS, payload: { lastPrice }});
export const fetchBtcGbpError = error => ({ type: BTC_GBP_FETCH_ERROR, payload: { error } });

export function fetchBtcGbp () {
    return dispatch => {
        dispatch(fetchBtcGbpBegin());
        return btcGbpApi.fetchBtcGbp()
            .then(json => {
                dispatch(fetchBtcGbpSuccess(json['last_price']));
                return json['last_price'];
            }).catch(error => {
                dispatch(fetchBtcGbpError(error))
                return error;
            })
    }
}