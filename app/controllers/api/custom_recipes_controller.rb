class Api::CustomRecipesController < ApplicationController
  def index
    @custom_recipes = CustomRecipe.all
  end

  def show
    @custom_recipes = CustomRecipe.find(params[:id])
  end

  def create
    if !current_user
      @custom_recipe = CustomRecipe.new(custom_recipe_params)
      guest_id = User.where("username = 'Guest'")[0].id
      @custom_recipe.user_id = guest_id
    else
      @custom_recipe = current_user.custom_recipes.new(custom_recipe_params)
      @custom_recipe.user_id = params[:user_id]
    end
    if @custom_recipe.save!
      render :show
    else
      render json: @custom_recipe.errors.full_messages, status: 401
    end
  end

  def destroy
    @custom_recipe = CustomRecipe.find(params[:id])
    @custom_recipe.destroy
    render :show

  end


  def custom_recipe_params
    params.require(:custom_recipe).permit(:ingredients, :directions, :description, :title  )
  end
end
