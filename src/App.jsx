import React from 'react';
import ReactDOM from 'react-dom';
import {Answer, BeforeAnswer, Question, QuestionNumber} from './Components/index';


class App extends React.Component {
  render() {
    return(
      <div>
        <QuestionNumber />
        <Question />
        <Answer />
        <BeforeAnswer />
      </div>
    )
  }
}

export default App;