var recipes = {Gungus: "3 eaping Spoons of Gungus Powder-- That's it!"}

function updateObjectWithKeyAndValue(){
  delete recipes.Gungus
  return Object.assign({}, recipes, {prop: 1}, {prop2: 2})
}

function destructivelyUpdateObjectWithKeyAndValue(recipes){
  delete recipes.Gungus
  recipes.prop = 1
  recipes.prop2 = 2
  return recipes
}

function deleteFromObjectByKey(recipes){
recipes = {prop: 1}
recipes2 = Object.assign({}, recipes)
delete recipes.prop
return recipes
}

function destructivelyDeleteFromObjectByKey(){
  
}