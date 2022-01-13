import { Button } from '@material-ui/core';
import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import { makeStyles, createStyles } from '@material-ui/styles';
import { push } from 'connected-react-router';
import { useDispatch, useSelector } from 'react-redux';
// import { initDataset } from './Redux/actions';
import { store } from '..';
// import { INIT_DATASET } from '../Redux/actions';


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

  const dispatch = useDispatch();


  return (
    <div className="top-section">
      <div className="top-content-left">
        <div>
          シミュレーション 
        </div>
        <Button 
          variant="contained"
          className={classes.mainButton}
          onClick={() => {dispatch(push("/diagnose"))}}
        > 今すぐ診断をする </Button>
        <Button variant="contained" className={classes.subButton}> 説明を見る </Button>
      </div>
    </div>
  )
}

export default TopPage;