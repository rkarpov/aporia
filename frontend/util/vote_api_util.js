export const createQuestionVote = vote => {
    debugger
    return $.ajax({
        method: 'POST',
        url: `/api/questions/${vote.question_id}/votes`,
        data: { vote }
    })
}

// export const removeQuestionVote = voteId => {
//     return $.ajax({
//         method: 'DELETE',
//         url: `/api/questions/${voteId.question_id}/votes/${voteId.voteId}`,
//     })
// }