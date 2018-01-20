var recipes = {Gungus: "3 eaping Spoons of Gungus Powder-- That's it!"}

function updateObjectWithKeyAndValue(){
  delete recipes.Gungus
  Object.assign({}, recipes, {prop: 1})
  return Object.assign({}, recipes, {prop2: 2})
}

function destructivelyUpdateObjectWithKeyAndValue(){
  delete recipes.Gungus
}