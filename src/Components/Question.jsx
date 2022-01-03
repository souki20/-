import React from 'react';
import ReactDOM from 'react-dom';




const Question = (props) => {
  return(
    <div className='question-content'>{props.data}</div>
  )
}

export default Question;