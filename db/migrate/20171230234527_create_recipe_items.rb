class CreateRecipeItems < ActiveRecord::Migration[5.1]
  def change
    create_table :recipe_items do |t|
      t.string :item_image_file_name
      t.string :item_title
      t.string :item_description
      t.timestamps
    end
  end
end
