var recipes = {Gungus: "3 Heaping Spoons of Gungus Powder"}

function updateObjectWithKeyAndValue(){
  delete recipes.Gungus
  recipes.prop = 1
  recipes.prop2 = 2
  return recipes
}