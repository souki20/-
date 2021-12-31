import React from 'react';
import ReactDOM from 'react-dom';
import {Answer, BeforeAnswer, Question, QuestionNumber} from './Components/index';
import defaultDataset from './dataset';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataset: defaultDataset,
      currentId: "1",
      nextQuestionId: "",
      totalQuestions: 7,
      question: "",
      answers: "",
    }
  }


  initDataset = () => {
    const initData = this.state.dataset[this.state.currentId];
    const initQuestion = initData.question;
    const initAnswer = initData.answers;

    this.setState({
      question: initQuestion,
      answers: initAnswer
    })
  }

  componentDidMount() {
    this.initDataset()
  }


  render() {
    return(
      <>
        <div className='page-section'>
          <QuestionNumber totalQuestions={this.state.totalQuestions} />
        </div>
        <div className='main-section'>
          <div className='main-content-left'>
            <Question />
            <Answer answers={this.state.answers}/>
          </div>
          <div className='main-content-right'>
            <BeforeAnswer />
          </div>
        </div>
      </>
    )
  }
}

export default App;