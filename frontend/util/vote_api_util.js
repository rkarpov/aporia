export const createQuestionVote = vote => {
    debugger
    return $.ajax({
        method: 'POST',
        url: `/api/questions/${vote.question_id}/votes`,
        data: { vote }
    })
}