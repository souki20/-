import { React, ReactDOM } from "react";
import { useSelector } from "react-redux";
import { Answer } from "./index";



const AnswerList = (props) => {

  const selector = useSelector(state => state.contents);

  let answers = [];
  let answerConfirm = [];
  for (let i=0; i<selector.answers.length; i++) {
    answers.unshift(selector.answers[i]);
    answerConfirm.unshift(selector.answerConfirm[i]);
  }


  return (
    <div className='answer-content'>
      {answers.map((answer, index) => {
        return <Answer
        value={answer} 
        selectAnswerConfirm = {answerConfirm[index]}
        key={index.toString()} 
        // select={props.select}
        />
      })}
    </div>
  )

}


export default AnswerList;