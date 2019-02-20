import * as VoteApiUtil from '../util/vote_api_util';

export const RECEIVE_QUESTION_VOTE = 'RECEIVE_QUESTION_VOTE';

const receiveQuestionVote = payload => {
    debugger
    return({
        type: RECEIVE_QUESTION_VOTE,
        payload
    })
}

export const createQuestionVote = (vote) => dispatch  => {
    debugger
    return (
        VoteApiUtil.createQuestionVote(vote).then((vote) => dispatch(receiveQuestionVote(vote)))
    )
}
