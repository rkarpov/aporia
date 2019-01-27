class RemoveTopicsidFromQuestions < ActiveRecord::Migration[5.1]
  def change
    remove_index :questions, :topic_id
    remove_column :questions, :topic_id, :integer
  end
end
