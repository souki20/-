import React from "react";
import { useSelector } from "react-redux";
import { QuestionNumber} from './index';


const Main = () => {

  return(
    <>
      <div className='page-section'>
        <QuestionNumber
          // totalQuestions={props.totalQuestions}
          // data={props.dataset}
          // select={props.selectNumber}
        />
      </div>
    </>
  )
}

export default Main;