import React from "react";

// エラーは毎回実行されてしまっている
const RenderBeforeAnswer = (props) => {
  if (props.currentId == 1) {
    console.log('1');
    return <div className='beforeAnswer-item'>過去の回答が表示されます</div>;
  } else {
    // console.log('それ以外');
    // return <div>成功</div>
    return (
      props.value.map((value, index) => {
        return <div className='beforeAnswer-item'>{props.questions[index]}{value}</div>;
      })
    )
  }
}

export default RenderBeforeAnswer;