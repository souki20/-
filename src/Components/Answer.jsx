import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { selectAnswer, selectNumber } from '../Redux/actions';
import { push } from 'connected-react-router';


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


const changeConfirmation = (props,classes,selector,dispatch,numbers, currentId) => {

  const lastAnswerClick = () => {
    dispatch(selectAnswer(selector, props.value));
    dispatch(push("/confirmation"));
  }

  if(currentId == numbers.length){
    return (
    <Button
      className={classes.button}
      variant="contained"
      key={props.count}
      onClick={() => lastAnswerClick()}
    >
    {props.value}
    </Button>
    )
  } else {
    return (
    <Button
      className={classes.button}
      variant="contained"
      key={props.count}
      onClick={() => dispatch(selectAnswer(selector, props.value))}
    >
    {props.value}
    </Button>
    )
  }
}


const Answer = (props) => {
  const classes = useStyles();

  const selector = useSelector(state => state.contents);
  const dispatch = useDispatch();
  // console.log(selector.contents);

  const numbers = Object.keys(selector.dataset)

  return(
    <>
      {changeConfirmation(props, classes, selector, dispatch, numbers, selector.currentId)}
    {/* <Button
      className={classes.button}
      variant="contained"
      // key={props.key}
      onClick={() => dispatch((selectAnswer(selector, props.value)))}
    >
    {props.value}
    </Button> */}
    </>
  )
}

export default Answer;