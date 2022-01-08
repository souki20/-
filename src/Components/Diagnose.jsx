import React from 'react';
import ReactDOM from 'react-dom';
import { AnswerList, Question, BeforeAnswer } from './index';
import Main from './Main';


const Diagnose = (props) => {

  return(
    <>
      <Main 
        totalQuestions={props.totalQuestions}
        dataset={props.dataset}
        question={props.question}
        answers={props.answers}
        selectNumber={props.selectNumber}
        selectAnswer={props.selectAnswer}
      />
      <div className='main-section'>
        <div className='main-content-left'>
          <Question question={props.question} />
          <AnswerList 
            answers={props.answers}
            select={props.selectAnswer}
          />
        </div>
        <div className='main-content-right'>
          <BeforeAnswer
            currentId={props.currentId}
            value={props.answerList}
            questions={props.beforeQuestions}
          />
        </div>
      </div>
    </>
  )
}

export default Diagnose;