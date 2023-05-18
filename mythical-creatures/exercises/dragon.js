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

//Created a function called findFireBreathers that takes in a paramter
//This parameter 
function findFireBreathers(dragonArray) {
  var newFireArray = []
  for (var i = 0; i < dragonArray.length; i++) {
      if (dragonArray[i].temperment.includes('aggressive')) {
         newFireArray.push(dragonArray[i])
      }
    }  return newFireArray
  }
  

 
module.exports = {
  createDragon, 
  greetRider, 
  eat, 
  findFireBreathers
}