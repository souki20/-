import { push } from 'connected-react-router';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '..';
import { initDataset } from '../Redux/actions';
import { AnswerList, Question, BeforeAnswer } from './index';
import Main from './Main';


const Diagnose = (props) => {

  // const contentsSelector = useSelector(state => state);
  const selector = useSelector(state => state.contents);
  const dispatch = useDispatch();

  // Diagnoseコンポーネントを描画する時stateに値が入っているかどうか
  if(selector.question === "") {
    dispatch(initDataset(selector));
  }

  // dispatch()
  // useEffect(() => {
  //   console.log('Diagnose')
  //   store.dispatch(initDataset(selector))
  // },[])

  return(
    <>
      <Main 
        // totalQuestions={contentsSelector.totalQuestions}
        // dataset={contentsSelector.dataset}
        // question={contentsSelector.question}
        // answers={contentsSelector.answers}
        // selectNumber={contentsSelector.selectNumber}
        // selectAnswer={contentsSelector.selectAnswer}
      />
      <div className='main-section'>
        <div className='main-content-left'>
          <Question 
            // question={contentsSelector.question}
          />
          <AnswerList 
            // answers={contentsSelector.answers}
            // select={contentsSelector.selectAnswer}
          />
        </div>
        <div className='main-content-right'>
          <p className="beforeAnswer-title">彼(彼女)に対して</p>
          <BeforeAnswer
            // currentId={contentsSelector.currentId}
            // value={contentsSelector.answerList}
            // questions={contentsSelector.beforeQuestions}
          />
        </div>
      </div>
    </>
  )
}

export default Diagnose;