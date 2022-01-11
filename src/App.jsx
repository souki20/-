import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Diagnose } from './Components';
import Confirmation from './Confirmation';
import TopPage from './Components/TopPage';
import { useDispatch, useSelector } from 'react-redux';
import { initDataset } from './Redux/actions';


const App = () => {

  const dispatch = useDispatch();
  // stateの必要な部分を返す関数の引数を受け取ります
  const selector = useSelector((state) => state);
  console.log('App.jsx');
  console.log(selector.contents);



  // render() {
    return (
      // <Diagnose 
      //   dataset={this.state.dataset}
      //   currentId={this.state.currentId}
      //   nextQuestionId={this.state.nextQuestionId}
      //   totalQuestions={this.state.totalQuestions}
      //   question={this.state.question}
      //   beforeQuestions={this.state.beforeQuestions}
      //   answers={this.state.answers}
      //   answerList={this.state.answerList}
      //   selectNumber={this.selectNumber}
      //   selectAnswer={this.selectAnswer}
      // />

      // <Confirmation 
      //   title='シミュレーション'
      //   currentId={this.state.currentId}
      //   answerList={this.state.answerList}
      //   beforeQuestions={this.state.beforeQuestions}
      // />

      <TopPage
        title='シミュレーション'
        selector={selector.contents}
        dispatch={dispatch}
      />
    )
  // }
}

export default App;