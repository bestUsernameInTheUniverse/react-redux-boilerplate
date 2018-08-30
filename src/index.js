import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/index.js';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);




//1. install redux packages: redux react-redux redux-thunk redux-devtools-extension
//2. wrap app in a <Provider></Provider>
//3. create a store and import it and apply to Provider as 'store' prop
    // GOTO ./store/index.js
//
