import { React, ReactDOM } from "react";
import { useSelector } from "react-redux";
import { Answer } from "./index";



const AnswerList = (props) => {

  const selector = useSelector(state => state.contents);

  let answers = [];
  for (let i=0; i<selector.answers.length; i++) {
    answers.push(selector.answers[i]);
  }


  return (
    <div className='answer-content'>
      {answers.map((answer, index) => {
        return <Answer
        value={answer} 
        key={index.toString()} 
        // select={props.select}
        />
      })}
    </div>
  )

}


export default AnswerList;