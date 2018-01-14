@recipe_items.each do |recipe_item|
  json.set! recipe_item.id do
    json.extract! recipe_item, :id, :recipe_id, :item_image_file_name, :item_title, :item_description
  end
end
