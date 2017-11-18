class CreateGroceries < ActiveRecord::Migration[5.1]
  def change
    create_table :groceries do |t|
      t.string :item
      t.integer :qty
      t.boolean :purchased

      t.timestamps
    end
  end
end
