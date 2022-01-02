import React from 'react';
import ReactDOM from 'react-dom';
import {AnswerList, BeforeAnswer, Question, QuestionNumber} from './Components/index';
import defaultDataset from './dataset';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataset: defaultDataset,
      currentId: "1",
      nextQuestionId: "",
      totalQuestions: "",
      question: "",
      answers: "",
    }
  }


  initDataset = () => {
    const initData = this.state.dataset[this.state.currentId];
    const initQuestion = initData.question;
    const initAnswer = initData.answers;
    const initTotalQuestions = Object.keys(this.state.dataset).length; 

    this.setState({
      question: initQuestion,
      answers: initAnswer,
      totalQuestions: initTotalQuestions,
    })
  }
  
  componentDidMount() {
    this.initDataset()
  }



  render() {
    return(
      <>
        <div className='page-section'>
          <QuestionNumber totalQuestions={this.state.totalQuestions} data={this.state.dataset} />
        </div>
        <div className='main-section'>
          <div className='main-content-left'>
            <Question />
            <AnswerList answers={this.state.answers}/>
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