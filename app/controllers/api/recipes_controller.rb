class Api::RecipesController < ApplicationController
  def index
    @recipes = Recipe.all
  end

  def create
    @recipe = Recipe.new(recipe_params)
    if @recipe.save!
      render '/api/recipes/show'
    else
      render json: @recipe.errors.full_messages
    end
  end

  def show
    @recipe = Recipe.find(params[:id])
  end

  def recipe_params
    params.require(:recipe).permit(:title,:description,:image_file_name,:ingredients)
  end
end
