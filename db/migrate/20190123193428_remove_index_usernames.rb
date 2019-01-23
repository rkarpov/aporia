class RemoveIndexUsernames < ActiveRecord::Migration[5.1]
  def change
      remove_index :users, :first_name
      remove_index :users, :last_name
  end
end
