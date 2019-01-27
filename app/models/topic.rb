class Topic < ApplicationRecord
    validates :description, presence: true

    has_many: :questions,
        foreign_key: :topic_id,
        class_name: 'Question'

end
