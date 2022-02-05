import { React, ReactDOM, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "..";
import { initDataset, INIT_DATASET } from "../Redux/actions";
import { Answer } from "./index";



const AnswerList = (props) => {

  const selector = useSelector(state => state.contents);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log("useEffect");
  //   dispatch(initDataset(selector))
  // }, [])

  // let answers = [];
  // let answerConfirm = [];
  // for (let i=0; i<selector.answers.length; i++) {
  //   answers.unshift(selector.answers[i]);
  //   answerConfirm.unshift(selector.answerConfirm[i]);
  // }

  // console.log(selector.answers);
  // console.log(selector.answerConfirm);
  // console.log("###");
  // console.log(answers);
  // console.log(answerConfirm);

  // let answers = selector.answers;


  return (
    // <div className='answer-content'>
    //   {answers.map((answer, index) => {
    //     return <Answer
    //     value={answer} 
    //     selectAnswerConfirm = {answerConfirm[index]}
    //     count={index.toString()} 
    //     // select={props.select}
    //     />
    //   })}
    // </div>
    <div className='answer-content'>
      {selector.answers.map((answer, index) => {
        return <Answer
        value={answer} 
        selectAnswerConfirm = {selector.answerConfirm[index]}
        count={index.toString()} 
        key={index.toString()}
        // select={props.select}
        />
      })}
    </div>
  )

}


export default AnswerList;