class CreateProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :products do |t|
      t.string :name, index: true, null: false
      t.text :description
      t.float :price, index: true, null: false

      t.timestamps
    end
  end
end
