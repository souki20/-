import React from 'react';
import ReactDOM from 'react-dom';
import { Diagnose } from './Components';
import Confirmation from './Confirmation';
import TopPage from './Components/TopPage';
import defaultDataset from './dataset';


// const Main = (count) => {
//   // if(count)
// }


class App extends React.Component {


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
    if(nextQuestion) {
      this.setState({
        currentId: nextId,
        question: nextQuestion,
        answers: nextAnswers,
        answerList: newAnswerList,
      })
    } else {

    }
  }
  



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

    this.selectNumber = this.selectNumber.bind(this);
    this.selectAnswer = this.selectAnswer.bind(this);
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
    return (
      // <Diagnose 
      //   dataset={this.state.dataset}
      //   currentId={this.state.currentId}
      //   nextQuestionId={this.state.nextQuestionId}
      //   totalQuestions={this.state.totalQuestions}
      //   question={this.state.question}
      //   beforeQuestions={this.state.beforeQuestions}
      //   answers={this.state.answers}
      //   answerList={this.state.answerList}
      //   selectNumber={this.selectNumber}
      //   selectAnswer={this.selectAnswer}
      // />

      // <Confirmation 
      //   title='シミュレーション'
      //   currentId={this.state.currentId}
      //   answerList={this.state.answerList}
      //   beforeQuestions={this.state.beforeQuestions}
      // />

      <TopPage
        title='シミュレーション'
        
      />
    )
  }
}

export default App;