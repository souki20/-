// Actionかデータを受け取りStateをどう変更するかを決める

// Actionsファイル内のモジュールを全てimportしてActionsという名前をつけている
import * as Actions from './actions';
import initialState from './Store/initialState'; 

// 引数では第一引数にstate ,第二引数にactionがreturnした値
// reducerでは「...state」が無かったらstateで書いていたものが消えてしまう
// しかし同じ内容の場合は上書きされる
export const defaultReducer = (state = initialState.contents, action) => {
  // console.log('reducers.jsx');
  switch(action.type) {
    case Actions.INIT_DATASET:
      const initData = state.dataset[state.currentId];
      const initQuestion = initData.question;
      const initAnswer = initData.answers;
      const initTotalQuestions = Object.keys(state.dataset).length; 
      return{
        ...state,
        question: initQuestion,
        answers: initAnswer,
        totalQuestions: initTotalQuestions,
      }
    case Actions.SELECT_NUMBER:
      return{
        ...state,
        ...action.payload,
      }
    case Actions.SELECT_ANSWER:
      return{
        ...state,
        ...action.payload,
      }
    case Actions.BACK_DIAGNOSE:
      return{
        ...state,
        // ...action.payload,
      }
    case Actions.backPageTop:
      return{
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}