var recipes = {Gungus: "3 Heaping Spoons of Gungus Powder"}

function updateObjectWithKeyAndValue(){
  delete recipes.Gungus
  Object.assign({}, recipes, {prop: 1})
  Object.assign({,})
  return recipes
}

function destructivelyUpdateObjectWithKeyAndValue