var recipes = {Gungus: "3 Heaping Spoons of Gungus Powder"}

function updateObjectWithKeyAndValue(){
  delete recipes.Gungus
  Object.assign({}, recipes, {prop: 1})
  Object.assign({}, recipes, {prop2: 2})
  return recipes
}

function destructivelyUpdateObjectWithKeyAndValue(){
  delete recipes.Gungus
}