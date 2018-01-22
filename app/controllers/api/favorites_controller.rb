class Api::FavoritesController < ApplicationController
  def show
    @favorite = Favorite.find_by(user_id: params[:userId], recipe_id: params[:recipeId]);

  end

  def index
    @favorites = Favorite.all
  end


  def create
    @favorite = Favorite.new(favorite_params);
    if @favorite.save!
      render :show
    else
      render json: @favorite.errors.full_messages
    end

  end


  def destroy
    @favorite = Favorite.find_by(user_id: params[:userId], recipe_id: params[:recipeId]);
    @favorite.destroy
  end


  def favorite_params
    params.require(:favorite).permit(:user_id, :recipe_id)
  end
end
