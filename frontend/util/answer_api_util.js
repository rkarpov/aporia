export const fetchAnswers = (question_id) => {
    
    return $.ajax({
        method: `GET`,
        url: `/api/questions/${question_id}/answers`
    })
}

export const fetchAnswer = (id) => {
    return $.ajax({
        method: `GET`,
        url: `/api/answers/${id}`
    })
}

export const createAnswer = (answer) => {
    
    return $.ajax({
        method: `POST`,
        // url: `/api/questions/${answer.questionId}/answers`,  // is this correct instead?
        url: `/api/questions/${answer.question_id}/answers`,
        data: { answer }
    })
}

export const updateAnswer = (answer) => {
    
    return $.ajax({
        method: `PATCH`,
        url: `/api/answers/${answer.id}`,
        data: { answer }
    })
}

export const deleteAnswer = (id) => {
    return $.ajax({
        method: `DELETE`,
        url: `/api/answers/${id}`
    })
}
