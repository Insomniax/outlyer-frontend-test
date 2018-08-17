const BASE_PATH = '/v1/pubticker';

export const fetchBtcGbp = () =>
    fetch(`${BASE_PATH}/btcgbp`)
        .then(handleErrors)
        .then(response => response.json());

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}