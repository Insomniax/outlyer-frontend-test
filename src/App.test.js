import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureStore([thunk]);
const initialState = {
    timePrices: [],
    loading: false,
    error: undefined
};
const store = mockStore(initialState);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><App/></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
