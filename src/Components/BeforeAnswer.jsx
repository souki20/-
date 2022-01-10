import React from 'react';
import ReactDOM from 'react-dom';
// import { RenderBeforeAnswer } from './index';


const RenderBeforeAnswer = (props) => {
  if (props.currentId == 1) {
    return <div className='beforeAnswer-item'>過去の回答が表示されます</div>;
  } else {
    return (
      props.value.map((value, index) => {
        return <div className='beforeAnswer-item'>{props.questions[index]}{value}</div>;
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