json.vote do 
    json.questionId @question.id
    json.votes @question.vote_count
end 