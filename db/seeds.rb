# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Recipe.destroy_all

r1=Recipe.create!(title: "Vegetable Fried Rice", description: "with Torgarashi Peanuts",image_file_name:"https://s3.us-east-2.amazonaws.com/greenapron/Fried+Rice.png",ingredients:"Jasmine rice, Carrots, Baby bok choy, Broccoli, Eggs, Hoisin Sauce")
r2=Recipe.create!(title: "Seared Salmon", description: "with Roasted Red Onion Vinaigrette",image_file_name:"https://s3.us-east-2.amazonaws.com/greenapron/Salmon.png",ingredients:"Salmon fillet,Dried dates,Carrots,Red Onion, Cabbage")
r3 = Recipe.create!(title: "Mushroom and Goat Cheese Quiche", description: "with Green Leaf Lettuce Salad", image_file_name:"https://s3.us-east-2.amazonaws.com/greenapron/Quiche.png", ingredients: "Garlic, Lemon, Eggs, Mushrooms, Lettuce, Pie crusts")
