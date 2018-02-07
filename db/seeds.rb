# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Recipe.destroy_all
RecipeItem.destroy_all
Favorite.destroy_all
CustomRecipe.destroy_all
u1 = User.create!(username: "Guest", password: "password")

r1=Recipe.create!(title: "Vegetable Fried Rice", description: "with Torgarashi Peanuts",image_file_name:"https://s3.us-east-2.amazonaws.com/greenapron/Fried+Rice.png",ingredients:"Jasmine rice, Carrots, Baby bok choy, Broccoli, Eggs, Hoisin Sauce")
r2=Recipe.create!(title: "General Tso's Chicken", description: "with Bok Choy and Jasmine Rice",image_file_name:"https://s3.us-east-2.amazonaws.com/greenapron/General+Tso's.png", ingredients: "Chicken breast, Bok choy, Jasmine rice, Garlic, Rice vinegar")
r3 = Recipe.create!(title: "Mushroom and Goat Cheese Quiche", description: "with Green Leaf Lettuce Salad", image_file_name:"https://s3.us-east-2.amazonaws.com/greenapron/Quiche.png", ingredients: "Garlic, Lemon, Eggs, Mushrooms, Lettuce, Pie crusts")
r4=Recipe.create!(title: "Seared Salmon", description: "with Roasted Red Onion Vinaigrette",image_file_name:"https://s3.us-east-2.amazonaws.com/greenapron/Salmon.png",ingredients:"Salmon fillet,Dried dates,Carrots,Red Onion, Cabbage")
r5=Recipe.create!(title: "Chicken and Orange-Kale Salad", description: "with Spicy Tahini Dressing",image_file_name:"https://s3.us-east-2.amazonaws.com/greenapron/Chicken+and+Orange-Kale+Salad.png",ingredients:"Boneless Chicken, Radishes, Kale, Avocado")
r6=Recipe.create!(title: "Orange-Glazed Meatballs", description: "with Bok Choy & Jasmine Rice",image_file_name:"https://s3.us-east-2.amazonaws.com/greenapron/Orange+Glazed+Meatballs.png",ingredients:"Ground Beef, Baby Bok Choy, Garlic, Carrots, Jasmine Rice")


ri1 = RecipeItem.create!(recipe_id: r1.id, item_title:"Prepare and roast the broccoli", item_description: "Remove the honey from the refrigerator to bring to room temperature. Place an oven rack in the center of the oven, then preheat to 450°F. Wash and dry the fresh produce. Cut off and discard the bottom 1/2 inch of the broccoli stem; cut the broccoli into small pieces, keeping the florets intact. Place on a sheet pan. Drizzle with olive oil and season with salt, pepper, and half the togarashi seasoning; toss to coat. Arrange in an even layer. Roast 15 to 17 minutes, or until browned and tender when pierced with a fork. Remove from the oven.", item_image_file_name: "https://s3.us-east-2.amazonaws.com/greenapron/FriedRice1.png")
ri2 = RecipeItem.create!(recipe_id: r1.id, item_title:"Cook the rice", item_description: "While the broccoli roasts, in a small pot, combine the rice, a big pinch of salt, and 1 1/2 cups of water. Heat to boiling on high. Once boiling, cover and reduce the heat to low. Cook 12 to 14 minutes, or until the water has been absorbed and the rice is tender. Turn off the heat and fluff with a fork. Cover to keep warm.", item_image_file_name: "https://s3.us-east-2.amazonaws.com/greenapron/FriedRice2.png")
ri3 = RecipeItem.create!(recipe_id: r1.id, item_title:"Prepare the remaining ingredients and make the sauce", item_description: "While the rice cooks, roughly chop the peanuts. Peel the carrots; thinly slice on an angle. Peel and finely chop the ginger. Cut off and discard the root end of the bok choy; roughly chop. Crack the eggs into a bowl; season with salt and pepper and beat until smooth. In a separate bowl, whisk together the hoisin sauce, vinegar, honey (kneading the packet before opening), and as much of the sriracha as you’d like, depending on how spicy you’d like the dish to be.", item_image_file_name: "https://s3.us-east-2.amazonaws.com/greenapron/FriedRice3.png")
ri4 = RecipeItem.create!(recipe_id: r1.id, item_title:"Make the togarashi peanuts", item_description: "In a large pan (nonstick, if you have one), heat 2 teaspoons of olive oil on medium-high until hot. Add the chopped peanuts and remaining togarashi seasoning. Cook, stirring constantly, 1 to 2 minutes, or until coated and fragrant. Transfer to a plate; immediately season with salt and pepper. Rinse and wipe out the pan.", item_image_file_name: "https://s3.us-east-2.amazonaws.com/greenapron/FriedRice4.png")
ri5 = RecipeItem.create!(recipe_id: r1.id, item_title:"Cook the vegetables and eggs", item_description: "In the same pan, heat 2 teaspoons of olive oil on medium-high until hot. Add the sliced carrots and chopped ginger; season with salt and pepper. Cook, stirring occasionally, 3 to 4 minutes, or until lightly browned and slightly softened. Add the chopped bok choy; season with salt and pepper. Cook, stirring frequently, 1 to 2 minutes, or until slightly softened. Using a spoon, move the vegetables to one side of the pan. Add 1 teaspoon of olive oil and the beaten eggs to the other side. Cook, constantly stirring the eggs, 30 seconds to 1 minute, or until cooked through. Stir the vegetables and eggs to combine. Transfer to a large bowl. Wipe out the pan.", item_image_file_name: "https://s3.us-east-2.amazonaws.com/greenapron/FriedRice5.png")
ri6 = RecipeItem.create!(recipe_id: r1.id, item_title:"Finish and serve", item_description: "In the same pan, heat 1 tablespoon of olive oil on medium-high until hot. Add the cooked rice in an even layer and cook, without stirring, 3 to 4 minutes, or until slightly crispy. Add the sauce and cook, stirring constantly, 30 seconds to 1 minute, or until combined. Transfer to the bowl of cooked vegetables and eggs. Add the roasted broccoli. Stir to thoroughly combine; season with salt and pepper to taste. Garnish the finished rice with the togarashi peanuts. Enjoy!", item_image_file_name: "https://s3.us-east-2.amazonaws.com/greenapron/FriedRice6.png")

f1 = Favorite.create!(user_id: u1.id, recipe_id: r1.id);

cr1 = CustomRecipe.create!(user_id: u1.id, title: "Safeway microwavable", description: "It's the best", ingredients: "the box", directions: "Microwave two minutes", image_file_name: "https://s3.us-east-2.amazonaws.com/greenapron/Fried+Rice.png")
# ri3 = RecipeItem.create!(recipe_id: r2.id, item_title: "chicken item", item_description: "asdfaf", item_image_file_name: "asdf")
