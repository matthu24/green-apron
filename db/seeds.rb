# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


r1=Recipe.create!(title: "Lasagna", description: "very very tasty",image_file_name:"asdf",ingredients:"pasta,tomato sauce,cheese")
r2=Recipe.create!(title: "Pasta", description: "Really incredible",image_file_name:"asdf",ingredients:"pasta,tomato sauce,cheese")
