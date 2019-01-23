import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';


//TEST
// import * as SessionApiUtil from `./util/session_api_util`
//TEST

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    const root = document.getElementById('root');

    //TEST
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    //TEST

    ReactDOM.render(<Root store={store}/>, root)
    // ReactDOM.render(<h1>hello</h1>, root);
}); 