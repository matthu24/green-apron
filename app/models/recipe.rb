class Recipe < ApplicationRecord
  has_many :recipe_items

  has_many :favorites
end
