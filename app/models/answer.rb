class Answer < ApplicationRecord
    validates :body, presence: true

    belongs_to :question,
        foreign_key: :question_id,
        class_name: 'Question'

    belongs_to :author,
        foreign_key: :author_id,
        class_name: 'User'

    has_many :comments,
        foreign_key: :answer_id,
        class_name: 'Comment'
end
