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