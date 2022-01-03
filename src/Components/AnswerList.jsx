import { React, ReactDOM } from "react";
import { Answer } from "./index";



const AnswerList = (props) => {
  let answers = [];
  for (let i=0; i<props.answers.length; i++) {
    answers.push(props.answers[i]);
  }


  return (
    <div className='answer-content'>
      {answers.map((answer, index) => {
        return <Answer value={answer} count={index} select={props.select}/>
      })}
    </div>
  )

}


export default AnswerList;