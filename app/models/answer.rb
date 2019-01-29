class Answer < ApplicationRecord
    validates :body, presence: true

    belongs_to :question,
        foreign_key: :question_id,
        class_name: 'Question'

    belongs_to :author,
        foreign_key: :author_id,
        class_name: 'User'

    # has_one :author,          # => question author's id, not answer author id?
    #     through: :question,
    #     source: :author
end
