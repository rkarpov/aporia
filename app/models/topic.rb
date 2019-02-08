class Topic < ApplicationRecord
    validates :description, presence: true

    has_many :question_topics,
        foreign_key: :topic_id,
        class_name: 'QuestionTopic'

    has_many :questions,
        through: :question_topics,
        source: :question
end
