json.partial! '/api/questions/question', question: @question 

answerAuthorIds = []
@question.answers.each do |answer|
  answerAuthorIds << answer.author_id 
end 

json.answerAuthorIds answerAuthorIds
json.topicIds @topicIds