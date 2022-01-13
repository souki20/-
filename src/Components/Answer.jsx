import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { selectAnswer, selectNumber } from '../Redux/actions';


const useStyles = makeStyles(() => (
  createStyles({
    "button": {
      width: '7rem',
      height: '7rem',
      minWidth: 0,
      borderRadius: '50%',
    },
  })
));


const Answer = (props) => {
  const classes = useStyles();

  // const contentsSelector = (state) => state.contents;
  const selector = useSelector(state => state.contents);
  const dispatch = useDispatch();

  return(
    <Button
      className={classes.button}
      variant="contained"
      key={props.count.toString()}
      // onClick={() => props.select(props.value)}
      onClick={() => dispatch((selectAnswer(selector, props.value)))}
    >
    {props.value}
    </Button>
  )
}

export default Answer;