import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';
import '../styles/style.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectNumber, backPageTop, initDataset } from '../Redux/actions';
import { css, keyframes } from '@emotion/css';
import { push } from 'connected-react-router';
// import { initDataset, INIT_DATASET } from './Redux/actions';


const useStyles = makeStyles(() => (
  createStyles({
    "button": {
      width: '40px',
      height: '40px',
      minWidth: 0,
      borderRadius: '50%',
      margin: '10px',
    },
    "backtop": {
      marginRight: '30px',
      fontSize: '0.7rem',
      lineHeight: 'normal',
      height: '35px',
    }
  })
));


// Emotion
const flash = keyframes`
0%,100% {
  opacity: 1;
  background-color: #5a5a5a;
  // color: #f3f3f3f3;
}

50% {
  opacity: 0.5;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  // background-color: #d5d5d5;
  background-color: #5a5a5a;
  // color: #f3f3f3f3;
}
`

const styles = {
  flash: css`
  animation: ${flash} 1s linear infinite;
`
}

const backTop = (classes, dispatch) => {
  const backTopPage = () => {
    dispatch(initDataset());
    dispatch(push("/"));
  }


  return(
    <Button 
      variant='contained'
      className={ classes.backtop }
      onClick={() => {dispatch(push("/"))}}
      // onClick={() => backTopPage()}
    >
      ＜　トップページ　
    </Button>
  )
}


const QuestionNumber = () => {
  const classes = useStyles();

  const selector = useSelector(state => state.contents);
  const dispatch = useDispatch();

  let numbers = [];
  // numbers = Object.keys(props.data);
  numbers = Object.keys(selector.dataset);
  //console.log(numbers.length);



  return(
    <div className='page-list'>
      {backTop(classes, dispatch)}
      {numbers.map((number, index) => {
        index=index+1;
        if(index < selector.currentId){
          // console.log(index);
          return (
            <Button 
              className={ classes.button }
              variant="contained"
              key={(index-1).toString()}
              onClick={() => dispatch(selectNumber(selector, index))}
            >
            {number}
            </Button>
          )
        } else if(index == selector.currentId) {
          return (
            <Button 
              className={ styles.flash + ' ' + classes.button }
              variant="contained"
              key={(index-1).toString()}
            >
            {number}
            </Button>
          )
        } else {
          return (
            <Button 
              className={classes.button}
              variant="contained"
              key={(index-1).toString()}
            >
            {number}
            </Button>
          )
        }
      })}
    </div>
  )
}

export default QuestionNumber;