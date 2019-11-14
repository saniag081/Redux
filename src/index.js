import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/index';
import reduxThunk from 'redux-thunk';

import './index.css';
import App from './components/App';

//create store
const store = createStore(
    reducers,//todos los reducers
    {},// estado inicial
    applyMiddleware(reduxThunk)//asincronismo
);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
);
