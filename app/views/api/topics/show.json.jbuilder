if !@question.nil?

    json.topic do 
        json.partial! '/api/topics/topic', topic: @topic
    end 

    json.question do 
        topicIds = []
        @question.topics.each do |topic|
            topicIds << topic.id 
        end 
        json.topicIds topicIds
        json.id @question.id
    end
else 
    json.partial! '/api/topics/topic', topic: @topic
end
    # questionIds = []
    # @topic.questions.each do |question| 
    #     questionIds << question.id 
    # end 
    
    # json.set! @topic.id do 
    #     json.partial! '/api/topics/topic', topic: @topic
    #     json.questionIds questionIds
    # end
