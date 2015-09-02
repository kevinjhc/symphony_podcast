class AddTitleToRecordings < ActiveRecord::Migration
  def change
    add_column :recordings, :title, :string
  end
end
