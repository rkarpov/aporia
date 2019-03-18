json.extract! topic, :id, :description

questionIds = []
topic.questions.each do |question|
    questionIds << question.id 
end
json.questionIds questionIds