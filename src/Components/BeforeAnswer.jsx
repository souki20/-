import React from 'react';
import ReactDOM from 'react-dom';


const BeforeAnswer = (props) => {
  let questionList = props.questions;

  return(
    <div className='beforeAnswer-content'>
      {props.value.map((value, index) => {
        return <div className='beforeAnswer-item' key={index}>{questionList[index]}{value}</div>
      })}
    </div>
  )
}

export default BeforeAnswer;