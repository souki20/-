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


// StoreとRouterの接続

// 今までどこのパスにいたのか、現在はどこのパスにいるのかの履歴を作り出す
const history = History.createBrowserHistory();

// storeの作成
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