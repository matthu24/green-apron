@recipes.each do |recipe|
  json.set! recipe.id do
    json.extract! recipe, :id, :title,:description,:image_file_name,:ingredients
  end
end
