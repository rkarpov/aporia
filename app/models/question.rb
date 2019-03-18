class Question < ApplicationRecord
    validates :body, presence: true
    # validates :body, length: {minimum: 5, maximum: 250}, allow_blank: true

    belongs_to :author,
        foreign_key: :author_id,
        class_name: 'User'

    has_many :answers,
        foreign_key: :question_id,
        class_name: 'Answer'

    has_many :question_topics,
        foreign_key: :question_id,
        class_name: 'QuestionTopic'

    has_many :topics,
        through: :question_topics,
        source: :topic

    has_many :votes, as: :votable
    
end
