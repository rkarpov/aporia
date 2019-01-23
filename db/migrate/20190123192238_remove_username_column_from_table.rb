class RemoveUsernameColumnFromTable < ActiveRecord::Migration[5.1]
  def change
    remove_index :users, :username
    remove_column :users, :username, :string
    add_column :users, :first_name, :string, null: false
    add_column :users, :last_name, :string, null: false
    add_index :users, :first_name
    add_index :users, :last_name
  end
end
