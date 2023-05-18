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

//Created a function called findFireBreathers that takes in a parameter
//This parameter is speaking to the argument of allDragons which contains the dragon array of objects.
function findFireBreathers(dragonArray) {
//created a new variable called newFire array that would hold the new array of agressive dragons. 
  var newFireArray = []
  for (var i = 0; i < dragonArray.length; i++) {
    //This for loop will go through the aray of dragon objects.
      if (dragonArray[i].temperment.includes('aggressive')) {
      //If an object in the dragon array has a temperment of aggrassive
      //should be included in the new array
         newFireArray.push(dragonArray[i])
      //The new Fire array should have any dragon object with an aggressive temperment pushed 
      //into it. 
      }
    }  return newFireArray
    //return the new array of aggessive dragons
  }
  

 
module.exports = {
  createDragon, 
  greetRider, 
  eat, 
  findFireBreathers
}