import { Button } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";
import { push } from "connected-react-router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { backPageTop } from "./Redux/actions";


// const styles = {
//   result: css`
//   text-align: center;
//   `
// }

const useStyles = makeStyles(() => (
  createStyles({
    "resultTitle": {
      textAlign: 'center',
      margin: '50px 0',
      fontSize: '2rem',
    },
    "resultContents": {
      minHeight: '70vh',
      backgroundColor: '#F1F5B9'
    },
    "resultText": {
      textAlign: 'center',
    },
    "button": {
      margin: '30px'
    },
  })
));


const Result = () => {
  
  // const selector = useSelector(state => state.contents);
  const dispatch = useDispatch();
  const classes = useStyles();
  
  // const backTop = () => {
  //     dispatch(backPageTop());
  //     dispatch(push("/"));
  // }


  return(
    <div className="">
      <div className={classes.resultTitle}>診断結果は...</div>
      <div className={classes.resultContents}>
        <Button
          variant="contained"
          className={classes.button}
          onClick={() => {dispatch(push("/"))}}
          >
          ＜トップページに戻る
        </Button>
        <div className={classes.resultText}>
          文字
        </div>
        </div>
    </div>
  );
}

export default Result;