import React from 'react';
import ReactDOM from 'react-dom';
import {AnswerList, BeforeAnswer, Question, QuestionNumber} from './Components/index';
import defaultDataset from './dataset';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataset: defaultDataset,
      currentId: 1,
      nextQuestionId: "",
      totalQuestions: "",
      question: "",
      beforeQuestions: ["質問１の回答は,", "質問２の回答は,", "質問３の回答は,", "質問４の回答は,", "質問５の回答は,", "質問６の回答は,", "質問７の回答は,"],
      answers: "",
      answerList: [],
      count: 0,
    }

    // this.selectNumber = this.selectNumber.bind(this);
    // this.selectAnswer = this.selectAnswer.bind(this);
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


  selectNumber = (index) => {
    let currentData = this.state.dataset[index];
    let currentQuestion = currentData.question;
    let currentAnswers = currentData.answers;
    this.setState({
      currentId: index,
      question: currentQuestion,
      answers: currentAnswers,
    })
  }

  selectAnswer = (value) => {
    let currentAnswerList = this.state.answerList;
    let newAnswerList = currentAnswerList.concat(value);

    let nextId = Number(this.state.currentId)+1;
    let nextData = this.state.dataset[nextId];
    let nextQuestion = nextData.question;
    let nextAnswers = nextData.answers;
    this.setState({
      currentId: nextId,
      question: nextQuestion,
      answers: nextAnswers,
      answerList: newAnswerList,
    })
  }



  render() {
    return(
      <>
        <div className='page-section'>
          <QuestionNumber totalQuestions={this.state.totalQuestions} data={this.state.dataset} select={this.selectNumber}/>
        </div>
        <div className='main-section'>
          <div className='main-content-left'>
            <Question data={this.state.question} />
            <AnswerList answers={this.state.answers} select={this.selectAnswer}/>
          </div>
          <div className='main-content-right'>
            <BeforeAnswer currentId={this.state.currentId} value={this.state.answerList} questions={this.state.beforeQuestions} />
          </div>
        </div>
      </>
    )
  }
}

export default App;