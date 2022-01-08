import React from 'react';
import ReactDOM from 'react-dom';
import { RenderBeforeAnswer } from './index';




const BeforeAnswer = (props) => {
  
  return (
    <div className='beforeAnswer-content'>
      {RenderBeforeAnswer(props)}
    </div>
  )

}

export default BeforeAnswer;