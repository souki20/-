// 必要なstateを全て記述
import defaultDataset from "../../Dataset/dataset";
import defaultTextDataset from "../../Dataset/textDataset";


const initialState = {
  contents: {
    dataset: defaultDataset,
    textData: defaultTextDataset,
    currentId: 1,
    totalQuestions: "",
    question: "",
    // beforeQuestions: ["質問１の回答は,", "質問２の回答は,", "質問３の回答は,", "質問４の回答は,", "質問５の回答は,", "質問６の回答は,", "質問７の回答は,"],
    answers: "",
    answerList: [],
    answerConfirm: [],
    loveCountList: [],
    loveCount: 0,
  }
}


export default initialState;