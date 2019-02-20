class AddVoteCountToQuestions < ActiveRecord::Migration[5.1]
  def change
    add_column :questions, :vote_count, :integer,
    default: 0
  end
end
