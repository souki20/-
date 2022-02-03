// アプリから受け取った「state」の変更依頼をReducersに渡す

// Action Type
export const INIT_DATASET = "INIT_DATASET";
export const SELECT_NUMBER = "SELECT_NUMBER";
export const SELECT_ANSWER = "SELECT_ANSWER";
export const BACK_DIAGNOSE = "BACK_DIAGNOSE";
// export const BACK_TOP = "BACK_TOP";


// Action Creater
export const initDataset = (state) => {
  const currentId = 1;
  const initData = state.dataset[currentId];
  const initQuestion = initData.question;
  const initAnswer = Object.values(initData.answers);
  const initAnswerConfirm = Object.values(initData.selectAnswerConfirm);
  const initTotalQuestions = Object.keys(state.dataset).length;

  return{
    type: INIT_DATASET,
    payload: {
      currentId: currentId,
      totalQuestions: initTotalQuestions,
      question: initQuestion,
      answers: initAnswer,
      answerList: [],
      answerConfirm: initAnswerConfirm,
    }
  }
}

export const selectNumber = (state, index) => {
  let selectNumberDate = state.dataset[index];
  let selectNumberQuestion = selectNumberDate.question;
  // let selectNumberAnswers = selectNumberDate.answers;
  let selectNumberAnswers = Object.values(selectNumberDate.answers);
  let selectNumberAnswerConfirm = Object.values(selectNumberDate.selectAnswerConfirm);
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
      answerConfirm: selectNumberAnswerConfirm,
    }
  }
}

export const selectAnswer = (state, value, answer) => {
  let currentAnswerList = state.answerList;
  // let newAnswerList = currentAnswerList.concat(value);
  // console.l:wq:wq:wqqwog(answer);
  let newAnswerList = currentAnswerList.concat(answer);
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
    // let nextAnswers = nextData.answers;
    let nextAnswers = Object.values(nextData.answers);
    let nextAnswerConfirm = Object.values(nextData.selectAnswerConfirm);
    return{
      type: SELECT_ANSWER,
      payload: {
        currentId: nextId,
        question: nextQuestion,
        answers: nextAnswers,
        answerList: newAnswerList,
        answerConfirm: nextAnswerConfirm,
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


// export const backPageTop = () => {
//   return{
//     type: BACK_TOP,
//     payload: {
//       answerList: [],
//       currentId: 1,
//     }
//   }
// }