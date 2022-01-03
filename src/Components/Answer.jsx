import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';


const useStyles = makeStyles(() => (
  createStyles({
    "button": {
      width: '100px',
      height: '100px',
      minWidth: 0,
      borderRadius: '50%',
      margin: '20px',
    },
  })
));


const Answer = (props) => {
  const classes = useStyles();

  return(
    <Button className={classes.button} variant="contained" key={props.count} onClick={() => props.select(props.value)}>
      {props.value}
    </Button>
  )
}

export default Answer;