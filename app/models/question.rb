class Question < ApplicationRecord
    validates :body, presence: true
    validates :body, length: {minimum: 5, maximum: 250}, allow_blank: true
    # validates an associated entry in question topics table  (cannot create question if topic id is null in joins table)

    belongs_to :author,
        foreign_key: :author_id,
        class_name: 'User'

    # belongs_to :topic,
    #     foreign_key: :topic_id,
    #     class_name: 'Topic'

    # has_many :topics,
    #     through topic assoc table.
    #     need has many topic tags? (foreign key to topic id and to question id. question topics table does this

    #         -has topic association with topic as a validation to create new question 
end
