import React from 'react';
import ReactDOM from 'react-dom';

import { createStore} from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/index'

import './index.css';
import App from './components/App';

//create store
const store = createStore(
    reducers,//todos los reducers
    {}// estado inicial
)

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
);
