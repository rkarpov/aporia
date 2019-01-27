json.question do
    json.partial! '/api/questions/question', question: @question 
    json.questionId @question.author.pluck(:id)
end