Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users,only: [:create,:index,:update,:show] do
      resources :custom_recipes, only: [:create, :update, :index]
    end
    resources :recipes, only: [:create,:show,:update,:index] do
      resources :recipe_items, only: [:create, :update,:index]
    end
    resource :session, only: [:create, :destroy]
    resources :recipe_items, only: [:destroy, :show]
    resources :custom_recipes, only: [:destroy, :show]
    resources :favorites, only: [:show, :create, :destroy, :index]
  end
end
