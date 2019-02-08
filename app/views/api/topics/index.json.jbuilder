@topics.each do |topic|
    topicQuestionIds = []
    topic.questions.each do |question| 
        topicQuestionIds << question.id 
    end 
    
    json.set! topic.id do 
        json.partial! '/api/topics/topic', topic: topic
    end
end