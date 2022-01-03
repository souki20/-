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

  let numbers = [];
  numbers = Object.keys(props.data);

  return(
    <div className='page-list'>
      {numbers.map((number, index) => {
        return (
          <Button className={classes.button} variant="contained" key={index} onClick={() => props.select(index+1)}>
            {number}
          </Button>
        )
      })}
    </div>
  )
}

export default QuestionNumber;