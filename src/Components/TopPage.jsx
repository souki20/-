import { Button } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
// import { BeforeAnswer } from './Components';
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



const TopPage = (props) => {
  const classes = useStyles();

  return (
    <div className="top-section">
      <div className="top-content-left">
        <div>
          {props.title}  
        </div>
        <Button variant="contained" className={classes.mainButton}> 今すぐ診断をする </Button>
        <Button variant="contained" className={classes.subButton}> 説明を見る </Button>
      </div>
    </div>
  )
}

export default TopPage;