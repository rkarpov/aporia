# questions = @topic.questions
json.extract! topic, :id, :description
    # json.questions @topic
    questionIds = []
    topic.questions.each do |question|
        questionIds << question.id 
    end
    json.questionIds questionIds