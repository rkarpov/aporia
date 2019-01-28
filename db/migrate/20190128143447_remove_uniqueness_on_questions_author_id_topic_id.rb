class RemoveUniquenessOnQuestionsAuthorIdTopicId < ActiveRecord::Migration[5.1]
  def change
    remove_index :questions, :author_id
    add_index :questions, :author_id
  end
end
