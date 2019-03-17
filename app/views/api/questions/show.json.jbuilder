json.partial! '/api/questions/question', question: @question 
    answerAuthorIds = []
    @question.answers.each do |answer|
      answerAuthorIds << answer.author_id 
    end 

  # topicIds = []
  # @question.topics.each do |topic|
  #   topicIds << topic.id 
  # end 
  json.answerAuthorIds answerAuthorIds
  json.topicIds @topicIds