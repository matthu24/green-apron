# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Recipe.destroy_all

r1=Recipe.create!(title: "Vegetable Fried Rice", description: "with Torgarashi Peanuts",image_file_name:"https://s3.us-east-2.amazonaws.com/greenapron/Fried+Rice.png",ingredients:"Jasmine rice, Carrots, Baby bok choy, Broccoli, Eggs, Hoisin Sauce")
r2=Recipe.create!(title: "General Tso's Chicken", description: "with Bok Choy and Jasmine Rice",image_file_name:"https://s3.us-east-2.amazonaws.com/greenapron/General+Tso's.png", ingredients: "Chicken breast, Bok choy, Jasmine rice, Garlic, Rice vinegar")
r3 = Recipe.create!(title: "Mushroom and Goat Cheese Quiche", description: "with Green Leaf Lettuce Salad", image_file_name:"https://s3.us-east-2.amazonaws.com/greenapron/Quiche.png", ingredients: "Garlic, Lemon, Eggs, Mushrooms, Lettuce, Pie crusts")
r4=Recipe.create!(title: "Seared Salmon", description: "with Roasted Red Onion Vinaigrette",image_file_name:"https://s3.us-east-2.amazonaws.com/greenapron/Salmon.png",ingredients:"Salmon fillet,Dried dates,Carrots,Red Onion, Cabbage")


ri1 = RecipeItem.create!(recipe_id: r1.id, item_title:"Prepare and roast the broccoli", item_description: "Remove the honey from the refrigerator to bring to room temperature. Place an oven rack in the center of the oven, then preheat to 450°F. Wash and dry the fresh produce. Cut off and discard the bottom 1/2 inch of the broccoli stem; cut the broccoli into small pieces, keeping the florets intact. Place on a sheet pan. Drizzle with olive oil and season with salt, pepper, and half the togarashi seasoning; toss to coat. Arrange in an even layer. Roast 15 to 17 minutes, or until browned and tender when pierced with a fork. Remove from the oven.", item_image_file_name: "https://s3.us-east-2.amazonaws.com/greenapron/FriedRice1.png")
ri2 = RecipeItem.create!(recipe_id: r1.id, item_title:"Cook the rice", item_description: "While the broccoli roasts, in a small pot, combine the rice, a big pinch of salt, and 1 1/2 cups of water. Heat to boiling on high. Once boiling, cover and reduce the heat to low. Cook 12 to 14 minutes, or until the water has been absorbed and the rice is tender. Turn off the heat and fluff with a fork. Cover to keep warm.", item_image_file_name: "https://s3.us-east-2.amazonaws.com/greenapron/FriedRice2.png")
