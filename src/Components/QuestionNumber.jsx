import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';
import '../styles/style.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectNumber } from '../Redux/actions';


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


const QuestionNumber = () => {
  const classes = useStyles();

  // const contentsSelector = (state) => state.contents;
  const selector = useSelector(state => state.contents);
  const dispatch = useDispatch();

  let numbers = [];
  // numbers = Object.keys(props.data);
  numbers = Object.keys(selector.dataset);
  console.log(numbers.length);

  return(
    <div className='page-list'>
      {numbers.map((number, index) => {
        return (
          <Button 
            className={classes.button}
            variant="contained"
            key={index.toString()}
            // onClick={() => props.select(index+1)}
            onClick={() => dispatch(selectNumber(selector, index))}
          >
          {number}
          </Button>
        )
      })}
    </div>
  )
}

export default QuestionNumber;