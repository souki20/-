import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './styles/style.css'
import { Provider } from 'react-redux';
import reduxCreateStore from './Redux/Store/store';
import { ConnectedRouter } from 'connected-react-router';
import * as History from 'history';
// import { createStore } from 'redux';

// ========================================


// storeの作成
// export const store1 = reduxCreateStore();

const history = History.createBrowserHistory();
export const store = reduxCreateStore(history);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);