import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import TopPage from './Components/TopPage';
import { useDispatch, useSelector } from 'react-redux';
import { initDataset, INIT_DATASET } from './Redux/actions';
import Router from './Router';
import { store } from '.';


const App = () => {
  
  const dispatch = useDispatch();

  // stateの必要な部分を返す関数の引数を受け取ります
  const selector = useSelector((state) => state.contents);
  // console.log('App.jsx');
  console.log(selector);
  // console.log(selector.contents.answerList.length);


    // // 最初の一回だけ実行
    useEffect(() => {
      // console.log('state更新')
      // dispatch(initDataset())
      // store.dispatch(initDataset())
      // store.dispatch({type: INIT_DATASET})
      store.dispatch(initDataset(selector))
    }, [])


    return (
      <main >
        <Router />
      </main>
    )
}

export default App;