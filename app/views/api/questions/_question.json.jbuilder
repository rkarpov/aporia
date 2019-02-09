# json.extract! question, :id, :body, :author_id#, :updated_at

    json.body question.body
    json.authorFirstName question.author.first_name
    json.authorLastName question.author.last_name
    json.authorId question.author.id
    json.email question.author.email
    json.id question.id
    json.date question.created_at.strftime("%b %d, %y")
    json.answerIds []
    json.answerAuthorIds []
    json.topicIds question.topics # look up pluck method