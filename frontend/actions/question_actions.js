import * as QuestionApiUtil from '../util/question_api_util';

export const RECEIVE_ALL_QUESTIONS = 'RECEIVE_ALL_QUESTIONS';
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const REMOVE_QUESTION = 'REMOVE_QUESTION';
export const RECEIVE_QUESTION_ERRORS = 'RECEIVE_QUESTION_ERRORS'

const receiveAllQuestions = (questions) => {
    return {
        type: RECEIVE_ALL_QUESTIONS,
        questions
    }
} // THIS IS THE LOGGER ACTION

const receiveQuestion = (question) => {
    
    return {
        type: RECEIVE_QUESTION,
        question
    }
}

const removeQuestion = (questionId) => {
    return {
        type: REMOVE_QUESTION,
        questionId
    }
}

const receiveErrors = (errors) => {
    type: RECEIVE_QUESTION_ERRORS,
    errors
}

export const requestQuestions = () => dispatch => {
    
    return QuestionApiUtil.fetchQuestions().then((questions) => dispatch(receiveAllQuestions(questions)))
}

export const fetchQuestion = (id) => dispatch => {
    return QuestionApiUtil.fetchQuestion(id).then((question) => dispatch(receiveQuestion(question)))
}

export const createQuestion = (question) => dispatch => {

    
    return QuestionApiUtil.createQuestion(question).then((question) => dispatch(receiveQuestion(question))),
        error => (dispatch(receiveErrors(error.responseJSON)))
}

export const updateQuestion = (question) => dispatch => {
    return QuestionApiUtil.updateQuestion(question).then((question) => dispatch(receiveQuestion(question))),
        error => (dispatch(receiveErrors(error.responseJSON)))
}

export const deleteQuestion = (questionId) => dispatch => {
    return QuestionApiUtil.deleteQuestion(questionId).then(() => dispatch(removeQuestion(questionId))),
        error => (dispatch(receiveErrors(error.responseJSON)))
}
