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
      loveCountList: [],
      loveCount: 0,
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
  let currentLoveCountList = state.loveCountList;
  let selectNumberAnswerlist = [];
  let changeLoveCountList = [];
  let changeLoveCount = 0;

  for(var i=1; i<index; i++) {
    selectNumberAnswerlist.push(currentAnswerList[i-1]);
    changeLoveCountList.push(currentLoveCountList[i-1]);
    changeLoveCount += Number(currentLoveCountList[i-1]);
  }

  return{
    type: SELECT_NUMBER,
    payload: {
      currentId: index,
      question: selectNumberQuestion,
      answers: selectNumberAnswers,
      answerList: selectNumberAnswerlist,
      answerConfirm: selectNumberAnswerConfirm,
      loveCountList: changeLoveCountList,
      loveCount: changeLoveCount,
    }
  }
}

export const selectAnswer = (state, count, answer) => {
  let currentAnswerList = state.answerList;
  // let newAnswerList = currentAnswerList.concat(value);
  // console.log(answer);
  let newAnswerList = currentAnswerList.concat(answer);
  let nextId = Number(state.currentId)+1;
  let loveCountList = state.loveCountList;
  loveCountList.push(count);
  let countNumber = Number(count);
  let loveCount = state.loveCount;
  loveCount = loveCount + countNumber;

  if(nextId == state.totalQuestions+1) {
    return{
      type: SELECT_ANSWER,
      payload: {
        answerList: newAnswerList,
        loveCountList: loveCountList,
        loveCount: loveCount,
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
        loveCountList: loveCountList,
        loveCount: loveCount,
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