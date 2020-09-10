import {CREATE_QUIZ_QUESTION, RESER_QUIZ_CREATION} from "../action/actionTypes";

const initialState = {
    quiz: []
}


const createReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_QUIZ_QUESTION :
            return {
                ...state, quiz: [...state.quiz, action.item]
            }

        case RESER_QUIZ_CREATION:
            return {
                ...state, quiz: []
            }
        default:
            return state

    }
}
export default createReducer