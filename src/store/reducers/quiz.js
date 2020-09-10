import {
    FETCH_QUIZ_SUCCESS,
    FETCH_QUIZES_ERROR,
    FETCH_QUIZES_START,
    FETCH_QUIZES_SUCCESS, FINISH_QUIZ, QUIZ_NEXT_QUESTION, QUIZ_RETRY,
    QUIZ_SET_STATE
} from "../action/actionTypes";

const initialState = {
    quizes: [],
    loading: false,
    error: null,
    results: {},
    isFinished: false,
    activeQuestion: 0,
    answerState: null,
    quiz: null,
}

const quizReducer = (state = initialState, action) => {
    const {type, quiz, quizes, error} = action

    switch (type) {
        case FETCH_QUIZES_START:
            return {
                ...state, loading: true
            }
        case FETCH_QUIZES_SUCCESS:
            return {
                ...state, loading: false, quizes: quizes
            }
        case FETCH_QUIZES_ERROR:
            return {
                ...state, loading: false, error: error
            }
        case FETCH_QUIZ_SUCCESS:
            return {
                ...state, loading: false, quiz: quiz
            }
        case QUIZ_SET_STATE:
            return {
                ...state, answerState: action.answerState, results: action.results
            }
        case FINISH_QUIZ:
            return {
                ...state, isFinished: true
            }
        case QUIZ_NEXT_QUESTION:
            return {
                ...state, answerState: null, activeQuestion: action.number
            }
        case QUIZ_RETRY:
            return {
                ...state, activeQuestion: 0,
                answerState: null,
                isFinished: false,
                results: {}
            }
        default:
            return state
    }
}

export default quizReducer