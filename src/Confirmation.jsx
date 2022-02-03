import { Button } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { BeforeAnswer } from './Components';
import { makeStyles, createStyles } from '@material-ui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { backPageDiagnose } from './Redux/actions';


const useStyles = makeStyles(() => (
  createStyles({
    "mainButton": {
      width: '80%',
      height: '20%',
      // minWidth: 0,
      borderRadius: '30px',
      margin: '30px',
    },
    "subButton": {
      width: '70%',
      height: '15%',
      // minWidth: 0,
      borderRadius: '20px',
      margin: '30px',
    },
  })
));



const Confirmation = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selector = useSelector(state => state.contents);


  const backDiagnose = (state) => {
    dispatch(backPageDiagnose(state));
    dispatch(push("/diagnose"));
  }

  return (
    <div className="top-section">
      <div className="top-content-left">
        <div>
          {props.title}  
        </div>
        <Button 
          variant="contained" 
          className={classes.mainButton}
          onClick={() => dispatch(push("/result"))}
        > 診断結果を見る </Button>
        <Button 
          variant="contained" 
          className={classes.subButton} 
          onClick={() => backDiagnose(selector)}
        > 質問に戻る </Button>
      </div>
      <div className='top-content-right'>
        <p className="beforeAnswer-title">彼(彼女)に対して</p>
        <BeforeAnswer
          // currentId={props.currentId}
          // value={props.answerList}
          // questions={props.beforeQuestions}
        />
      </div>
    </div>
  )
}

export default Confirmation;