@questions.each do |question|
  topicIds = []
  question.topics.each do |topic|
    topicIds << topic.id 
  end 

  answerAuthorIds = []
  question.answers.each do |answer|
    answerAuthorIds << answer.author_id 
  end 

  json.set! question.id do 
    json.partial! '/api/questions/question', question: question 
    json.answerAuthorIds answerAuthorIds
    json.topicIds topicIds
  end
end