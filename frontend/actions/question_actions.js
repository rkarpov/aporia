import * as QuestionApiUtil from '../util/question_api_util';

export const RECEIVE_ALL_QUESTIONS = 'RECEIVE_ALL_QUESTIONS';
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const REMOVE_QUESTION = 'REMOVE_QUESTION';

const receiveAllQuestions = ({questions, users}) => {
    return {
        type: RECEIVE_ALL_QUESTIONS,
        questions,
        users,
    }
}

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

export const requestQuestions = (questions) => dispatch => {

    return QuestionApiUtil.fetchQuestions(questions).then((questions) => dispatch(receiveAllQuestions(questions)))
}

export const fetchQuestion = (id) => dispatch => {
    return QuestionApiUtil.fetchQuestion(id).then((question) => dispatch(receiveQuestion(question)))
}

export const createQuestion = (question) => dispatch => {
    return QuestionApiUtil.createQuestion(question).then((question) => dispatch(receiveQuestion(question)))
}

export const updateQuestion = (question) => dispatch => {
    return QuestionApiUtil.updateQuestion(question).then((question) => dispatch(receiveQuestion(question)))
}

export const deleteQuestion = (questionId) => dispatch => {
    return QuestionApiUtil.deleteQuestion(questionId).then(() => dispatch(removeQuestion(questionId)))
}
