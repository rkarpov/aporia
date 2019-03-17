# if !@question.nil?

#     json.topic do 
#         json.partial! '/api/topics/topic', topic: @topic
#     end 

#     json.question do 
#         topicIds = []
#         @question.topics.each do |topic|
#             topicIds << topic.id 
#         end 
#         json.topicIds topicIds
#         json.id @question.id
#     end
# elsif !@questions.nil?
    
#         json.partial! '/api/topics/topic', topic: @topic
    
        
#         json.questions do
#             questions = []
#             @questions.each do |question|
#                 questionId = question.id
#                 json.set! question.id do 
#                     part = json.partial! '/api/questions/question', question: question
#                     questions << part
#                 end 
#             end 
#         end

# else 
    # json.topic do 
    #     json.partial! '/api/topics/topic', topic: @topic
    # end
# end

json.topic do 
    json.partial! '/api/topics/topic', topic: @topic
end    

json.questions do
    questions = []
    @questions.each do |question|
        questionId = question.id
        json.set! question.id do 
            part = json.partial! '/api/questions/question', question: question
            questions << part
        end 
    end 
end
