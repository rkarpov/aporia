class Comment < ApplicationRecord
    validates :body, presence: true 

    belongs_to :answer,
        foreign_key: :answer_id,
        class_name: 'Answer'

    belongs_to :author,
        foreign_key: :author_id,
        class_name: 'User'
        
end
