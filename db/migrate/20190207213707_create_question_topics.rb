class CreateQuestionTopics < ActiveRecord::Migration[5.1]
  def change
    create_table :question_topics do |t|
      t.integer :question_id, null: false
      t.integer :topic_id, null: false
      t.timestamps
    end
    add_index :question_topics, :topic_id
    add_index :question_topics, :question_id
  end
end
