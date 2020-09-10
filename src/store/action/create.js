import {CREATE_QUIZ_QUESTION, RESER_QUIZ_CREATION} from "./actionTypes";
import axios from "../../axios/axios-quiz";

export const createQuizQuestion = item => {
    return {
        type: CREATE_QUIZ_QUESTION,
        item
    }
}

export const  resetQuizCreation = () =>{
    return{
        type : RESER_QUIZ_CREATION
    }
}

export const finishCreateQuiz = () => {
    return async (dispatch, getState) => {
        await axios.post('/quizes.json', getState().create.quiz)
        dispatch(resetQuizCreation())
    }
}