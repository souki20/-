import React from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import { AnswerList, Question, BeforeAnswer } from './index';
import Main from './Main';


const Diagnose = (props) => {

  // const contentsSelector = useSelector(state => state);

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