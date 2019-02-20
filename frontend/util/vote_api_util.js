export const createQuestionVote = vote => {
    return $.ajax({
        method: 'POST',
        url: `/api/questions/${vote.question_id}/votes`,
        data: { vote }
    })
}