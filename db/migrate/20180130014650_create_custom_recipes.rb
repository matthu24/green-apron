class CreateCustomRecipes < ActiveRecord::Migration[5.1]
  def change
    create_table :custom_recipes do |t|
      t.integer :user_id
      t.string :title
      t.string :description
      t.string :image_file_name
      t.string :ingredients
      t.string :directions
      t.timestamps
    end
  end
end
