import React from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';


const Question = (props) => {

  // const contentsSelector = (state) => state.contents;
  const selector = useSelector(state => state.contents);

  return(
    <div className='question-content'>{selector.question}</div>
  )
}

export default Question;