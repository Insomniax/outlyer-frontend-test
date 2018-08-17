import * as btcGbpApi from '../api/btcgbp';

export const BTC_GBP_FETCH_BEGIN = 'BTC_GBP_FETCH_BEGIN';
export const BTC_GBP_FETCH_SUCCESS = 'BTC_GBP_FETCH_SUCCESS';
export const BTC_GBP_FETCH_ERROR = 'BTC_GBP_FETCH_ERROR';

export const fetchBtcGbpBegin = () => ({ type: BTC_GBP_FETCH_BEGIN });
export const fetchBtcGbpSuccess = prices => ({ type: BTC_GBP_FETCH_SUCCESS, payload: { prices }});
export const fetchProductsError = error => ({ type: BTC_GBP_FETCH_ERROR, payload: { error } });

export function fetchBtcGbp () {
    return dispatch => {
        dispatch(fetchBtcGbpBegin());
        return btcGbpApi.fetchBtcGbp()
            .then(json => {
                console.log('json', json);
                dispatch(fetchBtcGbpSuccess(json['last_price']));
                return json['last_price'];
            }).catch(error => dispatch(fetchProductsError(error)))
    }
}