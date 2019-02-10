json.partial! '/api/topics/topic', topic: @topic

    # questionIds = []
    # @topic.questions.each do |question| 
    #     questionIds << question.id 
    # end 
    
    # json.set! @topic.id do 
    #     json.partial! '/api/topics/topic', topic: @topic
    #     json.questionIds questionIds
    # end
