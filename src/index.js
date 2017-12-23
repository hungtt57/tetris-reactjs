import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './containers/';
import './unit/const';
import './control';
import { subscribeRecord } from './unit';

subscribeRecord(store); //Ghi lại trạng thái vào localstorage

render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);

