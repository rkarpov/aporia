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