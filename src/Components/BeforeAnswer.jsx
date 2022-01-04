import React from 'react';
import ReactDOM from 'react-dom';
import { RenderBeforeAnswer } from './index';




const BeforeAnswer = (props) => {
  // console.log(props.count);
  
  return (
    <div className='beforeAnswer-content'>
      {RenderBeforeAnswer(props)}
      {/* {props.value.map((value, index) => {
        console.log('それ以外')
        return (<div className='beforeAnswer-item' key={index}>{props.questions[index]}{value}</div>);
      })} */}
    </div>
  )



}

export default BeforeAnswer;