// アプリから受け取った「state」の変更依頼をReducersに渡す

// Action Type
export const INIT_DATASET = "INIT_DATASET";
export const SELECT_NUMBER = "SELECT_NUMBER";
export const SELECT_ANSWER = "SELECT_ANSWER";
export const BACK_DIAGNOSE = "BACK_DIAGNOSE";


// Action Creater
export const initDataset = () => {
  return{
    type: INIT_DATASET,
  }
}

export const selectNumber = (state, index) => {
  let selectNumberDate = state.dataset[index];
  let selectNumberQuestion = selectNumberDate.question;
  let selectNumberAnswers = selectNumberDate.answers;
  let currentAnswerList = state.answerList;
  // console.log(currentAnswerList[0]);
  let selectNumberAnswerlist = [];
  for(var i=1; i<index; i++) {
    selectNumberAnswerlist.push(currentAnswerList[i-1]);
    // selectNumberAnswerlist.push("変更");
  }

  return{
    type: SELECT_NUMBER,
    payload: {
      currentId: index,
      question: selectNumberQuestion,
      answers: selectNumberAnswers,
      answerList: selectNumberAnswerlist,
    }
  }
}

export const selectAnswer = (state, value) => {
  let currentAnswerList = state.answerList;
  let newAnswerList = currentAnswerList.concat(value);
  let nextId = Number(state.currentId)+1;

  if(nextId == state.totalQuestions+1) {
    return{
      type: SELECT_ANSWER,
      payload: {
        answerList: newAnswerList,
      }
    }
  } else {
    let nextData = state.dataset[nextId];
    let nextQuestion = nextData.question;
    let nextAnswers = nextData.answers;
    return{
      type: SELECT_ANSWER,
      payload: {
        currentId: nextId,
        question: nextQuestion,
        answers: nextAnswers,
        answerList: newAnswerList,
      }
    }
  }
}


export const backPageDiagnose = (state) => {
  let newAnswerList = [];
  let currentAnswerList = state.answerList;
  newAnswerList = currentAnswerList.pop();

  return{
    type: BACK_DIAGNOSE,
    payload: {
      answerList: newAnswerList,
    }
  }
}