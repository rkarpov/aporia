class RemoveUniqueIndexOnCommentsAnswerIdAuthorId < ActiveRecord::Migration[5.1]
  def change
    remove_index :comments, :author_id
    add_index :comments, :author_id
    remove_index :comments, :answer_id
    add_index :comments, :answer_id
  end
end
