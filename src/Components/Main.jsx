import React from "react";
import { QuestionNumber} from './index';


const Main = (props) => {

  return(
    <>
      <div className='page-section'>
        <QuestionNumber
          totalQuestions={props.totalQuestions}
          data={props.dataset}
          select={props.selectNumber}
        />
      </div>
    </>
  )
}

export default Main;