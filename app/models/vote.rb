class Vote < ApplicationRecord
    validates :user_id, :votable_id, :votable_type, :vote, presence: true

    belongs_to :votable, polymorphic: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: 'User'





end
