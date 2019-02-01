# debugger
@answers.each do |answer|
    json.set! answer.id do 
        json.extract! answer, :id, :author_id, :question_id, :body
        json.date answer.created_at.strftime("%b %d, %y")
        json.update answer.updated_at.strftime("%b %d, %y")
        json.authorFirstName answer.author.first_name
        json.authorLastName answer.author.last_name
        # json.body answer.body
        # json.id answer.id
        # json.questionAuthorFN answer.author.first_name
        # json.questionAuthorLN answer.author.last_name
        # json.question_id answer.question.id
    end 
end

# json.question @question do
#     json.id @question.id
# end