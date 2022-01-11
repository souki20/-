// storeはstateを保存する役割

import { defaultReducer } from '../reducers';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';


// historyは今どこにいるかを渡している
export default function reduxCreateStore(history) {
  return createStore(
    // stateを生成
    // 分割したreducersをまとめる
    // routerでhistoryを管理
    combineReducers({
      router: connectRouter(history),
      contents: defaultReducer,
    }),
    applyMiddleware(
      routerMiddleware(history)
    )
  )
}