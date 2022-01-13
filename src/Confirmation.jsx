import { Button } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { BeforeAnswer } from './Components';
import { makeStyles, createStyles } from '@material-ui/styles';


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

  return (
    <div className="top-section">
      <div className="top-content-left">
        <div>
          {props.title}  
        </div>
        <Button variant="contained" className={classes.mainButton}> 診断結果を見る </Button>
        <Button variant="contained" className={classes.subButton}> 質問に戻る </Button>
      </div>
      <div className='top-content-right'>
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