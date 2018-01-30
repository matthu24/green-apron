@custom_recipes.each do |custom_recipe|
  json.set! custom_recipe.id do
    json.extract! custom_recipe, :id, :user_id, :title, :description, :ingredients, :directions, :image_file_name

  end
end
