function createDragon(name, rider, temperment) {
  return {
    name:name,
    rider:rider,
    temperment: temperment,
    timesEaten: 0,
    hungry: true
  }
}

function greetRider(dragon) {
return `Hi, ${dragon.rider}!`
}

function eat(dragon) {
  dragon.timesEaten++
  if (dragon.timesEaten >= 3) {
    dragon.hungry = false 
  }
  return dragon
}

function findFireBreathers(allDragons) {
  //Create an array of dragons. Start with empty array.
  //Check each dragon. If aggressive, put on list. 
  //If not aggressive, don't put on list.
  //Return new array of aggressive dragons.
return allDragons
}

module.exports = {
  createDragon, 
  greetRider, 
  eat, 
  findFireBreathers
}