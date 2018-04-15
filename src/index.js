import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore,applyMiddleware } from 'redux';
import appReducers from './reducers';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
const store = createStore(
    appReducers,
    applyMiddleware(thunk)
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
