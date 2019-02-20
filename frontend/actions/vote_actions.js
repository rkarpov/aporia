import * as VoteApiUtil from '../util/vote_api_util';

export const RECEIVE_QUESTION_VOTE = 'RECEIVE_QUESTION_VOTE';
export const REMOVE_QUESTION_VOTE = 'REMOVE_QUESTION_VOTE';

const receiveQuestionVote = payload => {
    debugger
    return({
        type: RECEIVE_QUESTION_VOTE,
        payload
    })
}

// const removeQuestionVote = voteId => {
//     return({
//         type: REMOVE_QUESTION_VOTE,
//         vodeId
//     })
// }

export const createQuestionVote = (vote) => dispatch  => {
    debugger
    return (
        VoteApiUtil.createQuestionVote(vote).then((vote) => dispatch(receiveQuestionVote(vote)))
    )
}

// export const deleteQuestionVote = (vote) => dispatch  => {
//     return (
//         VoteApiUtil.removeQuestionVote(vote).then((vote) => dispatch(removeQuestionVote(vote)))
//     )
// }