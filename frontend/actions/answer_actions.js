import * as AnswerApiUtil from '../util/answer_api_util';

export const RECEIVE_ANSWERS = 'RECEIVE_ANSWERS';
export const RECEIVE_ANSWER = 'RECEIVE_ANSWER';
export const REMOVE_ANSWER = 'REMOVE_ANSWER';

// const receiveAllAnswers = ({answers, question}) => {
//     return {
//         type: RECEIVE_ANSWERS,
//         answers,
//         question,
//     }
// }

const receiveAllAnswers = (answers) => {
    
    return {
        type: RECEIVE_ANSWERS,
        answers
    }
}

const receiveAnswer = (answer) => {
    return {
        type: RECEIVE_ANSWER,
        answer
    }
}

const removeAnswer = (answerId) => {
    return {
        type: REMOVE_ANSWER,
        answerId
    }
}

// export const requestAnswers = (questionId) => dispatch => {
//     return (
//         AnswerApiUtil.fetchAnswers(questionId).then((payload) => dispatch(receiveAllAnswers(payload)))
//     )
// }

export const requestAnswers = (questionId) => dispatch => {
    return (
        AnswerApiUtil.fetchAnswers(questionId).then((answers) => dispatch(receiveAllAnswers(answers)))
    )
}

export const requestAnswer = (id) => dispatch => {
    return (
        AnswerApiUtil.fetchAnswer(id).then((answer) => dispatch(receiveAnswer(answer)))
    )
}

export const createAnswer = (answer) => dispatch => {
    return (
        AnswerApiUtil.createAnswer(answer).then((answer) => dispatch(receiveAnswer(answer)))
        // have error call back dispatching receive errors
    )
}

export const updateAnswer = (answer) => dispatch => {
    return (
        AnswerApiUtil.updateAnswer(answer).then((answer) => dispatch(receiveAnswer(answer)))
    )
}

export const deleteAnswer = (answerId) => dispatch => {
    return (
        AnswerApiUtil.deleteAnswer(answerId).then( () => dispatch(removeAnswer(answerId)))
    )
}