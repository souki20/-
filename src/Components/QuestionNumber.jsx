import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';
import '../styles/style.css';


const useStyles = makeStyles(() => (
  createStyles({
    "button": {
      width: '40px',
      height: '40px',
      minWidth: 0,
      borderRadius: '50%',
      margin: '10px',
    },
  })
));



const QuestionNumber = (props) => {
  const classes = useStyles();
  let list = [];

  for (let i=0; i<props.totalQuestions; i++) {
    list.push(<Button className={classes.button} variant="contained">{i+1}</Button>);
  }

  return(
    <div className='page-list'>
      {list}
    </div>
  )
}

export default QuestionNumber;