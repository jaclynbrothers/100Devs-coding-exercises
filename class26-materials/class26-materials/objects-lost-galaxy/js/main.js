//Create a pizza object that has four properties and three methods

let pizza = {}

pizza.sauce = 'heavy'
pizza.crust = 'stuffed'
pizza.topping = ['spinach', 'onion', 'jalapenos', 'banana peppers', 'garlic']
pizza.size = 'large'

pizza.estimatedDeliveryTime = function(){
  console.log(`Calculating...`)
}

pizza.burnMouth = function(){
    console.log(`FFFUUUU`)
  }

pizza.frisbee = function(){
    console.log(`Yeet!`)
  }