@recipes.each do |recipe|

  json.set! recipe.id do
    json.extract! recipe, :id, :title,:description,:image_file_name,:ingredients
    favorites = recipe.favorites
    json.favorites do
      if favorites
        favorites.each do |favorite|
          json.set! favorite.id do
            json.extract! favorite, :user_id, :recipe_id
          end
        end
      end
    end
  end














end
