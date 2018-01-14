class Api::RecipeItemsController < ApplicationController
  def index
    @recipe_items = RecipeItem.all
  end

  def create
    @recipe_item = RecipeItem.new(recipe_item_params)
    # @recipe_item.recipe_id=params[:recipe_id]
    if @recipe_item.save!
      render '/api/recipe_items/show'
    else
      render json: @recipe_item.errors.full_messages
    end
  end

  def show
    @recipe_item = RecipeItem.find(params[:id])
  end

  def recipe_item_params
    params.require(:recipe_item).permit(:item_title,:item_description,:item_image_file_name)
  end
end
