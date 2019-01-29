json.answers @answers.each do |answer|
    json.body answer.body
    json.id answer.id
    json.questionAuthorFN answer.author.first_name
    json.questionAuthorLN answer.author.last_name
    json.question_id answer.question.id
end

json.question @question do
    json.id @question.id
end