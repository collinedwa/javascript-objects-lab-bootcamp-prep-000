var recipes = {Gungus: "Three heaping spoonfuls of Gungus Powder-- That's it!"}

function updateObjectWithKeyAndValue(){
  delete recipes.Gungus
  Object.assign({}, recipes, {prop: 1})
  Object.assign({}, recipes, {prop2: 2})
  return recipes
}

function destructivelyUpdateObjectWithKeyAndValue(){
  delete recipes.Gungus
}