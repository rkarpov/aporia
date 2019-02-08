class QuestionTopic < ApplicationRecord
    belongs_to :question,
        foreign_key: :question_id,
        class_name: 'Question'

    belongs_to :topic,
        foreign_key: :topic_id,
        class_name: 'Topic'
end
