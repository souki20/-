import React from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
// import { RenderBeforeAnswer } from './index';


const RenderBeforeAnswer = (props) => {

  const selector = useSelector(state => state.contents);


  if (selector.currentId == 1) {
    return <div className='beforeAnswer-item'>過去の回答が表示されます</div>;
  } else {
    return (
      selector.answerList.map((value, index) => {
        return <div className='beforeAnswer-item'>{selector.beforeQuestions[index]}{value}</div>;
      })
    )
  }
}


const BeforeAnswer = (props) => {
  
  return (
    <div className='beforeAnswer-content'>
      {RenderBeforeAnswer(props)}
    </div>
  )

}

export default BeforeAnswer;