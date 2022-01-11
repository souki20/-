// アプリから受け取った「state」の変更依頼をReducersに渡す

import { useState } from "react";


export const INIT_DATASET = "INIT_DATASET";
export const initDataset = (state) => {
  return{
    type: INIT_DATASET,
  }
}

export const SELECT_NUMBER = "SELECT_NUMBER";
export const selectNumber = (state, index) => {
  let currentData = state.dataset[index];
  let currentQuestion = currentData.question;
  let currentAnswers = currentData.answers;

  return{
    type: SELECT_NUMBER,
    payload: {
      currentId: "",
      question: currentQuestion,
      answers: currentAnswers,
    }
  }
}

export const SELECT_ANSWER = "SELECT_ANSWER";
export const selectAnswer = (state, value) => {
  let currentAnswerList = state.answerList;
  let newAnswerList = currentAnswerList.concat(value);
  let nextId = Number(state.currentId)+1;
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