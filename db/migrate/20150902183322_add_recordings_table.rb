class AddRecordingsTable < ActiveRecord::Migration
  def change
    create_table :recordings do |t|
      t.string :url
      t.timestamps
    end
  end
end
