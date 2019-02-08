# questions = @topic.questions
json.extract! topic, :id, :description
    # json.questions @topic
    json.questionIds []