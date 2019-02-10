export const fetchTopics = () => {
    return $.ajax({
        method: `GET`,
        url: `/api/topics`
    })
}

export const fetchTopic = (id) => {
    return $.ajax({
        method: `GET`,
        url: `/api/topics/${id}`
    })
}

export const createTopic = (topic) => {
    return $.ajax({
        method: `POST`,
        url: `/api/topics`,
        data: { topic }
    })
}

export const updateTopic = (topic) => {
    return $.ajax({
        method: `PATCH`,
        url: `/api/topics/${topic.id}`,
        data: { topic }
    })
}

// export const deleteTopic = (id) => {
//     return $.ajax({
//         method: `DELETE`,
//         url: `/api/topics/${id}`
//     })
// }
export const deleteTopic = ({topic_id, question_id}) => {
    debugger
    return $.ajax({
        method: `DELETE`,
        // url: `/api/topics/${({topic_id, question_id})}`
       url: `/api/questions/${question_id}/topics/${topic_id}`
    })
}