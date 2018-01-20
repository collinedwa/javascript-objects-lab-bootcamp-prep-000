var recipes = {Gungus: "3 Heaping Spoons of Gungus Powder"}

function updateObjectWithKeyAndValue(){
  recipes.Hungulus = "Sprungulus' Delight!"
  Object.assign({}, recipes, {Dirt: "Just find some outside, alright?"})
  return recipes
}