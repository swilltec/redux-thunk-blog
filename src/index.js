import React, { Component } from 'react';
import reactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';


reactDom.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>, document.querySelector("#root")
)