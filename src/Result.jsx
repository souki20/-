import { Button } from "@material-ui/core";
import { push } from "connected-react-router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { backPageTop } from "./Redux/actions";


const styles = {
  
}


const Result = () => {
  
  // const selector = useSelector(state => state.contents);
  const dispatch = useDispatch();
  
  // const backTop = () => {
  //     dispatch(backPageTop());
  //     dispatch(push("/"));
  // }


  return(
    <div className="">
      <div className="result-title">診断結果は...</div>
      <Button
        variant="contained"
        className=""
        onClick={() => {dispatch(push("/"))}}
      >
        トップページに戻る
      </Button>
    </div>
  );
}

export default Result;