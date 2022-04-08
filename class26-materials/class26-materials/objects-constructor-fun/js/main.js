//Create a constructor with 4 properties and 3 methods
//Create a pizza object that has four properties and three methods

function PizzaMachine (sauce, crust, topping, size){
    this.sauce = sauce //this.sauce is binding property to that object, sauce is just the parameter
    this.crust = crust
    this.topping = topping
    this.size = size
    this.estimatedDeliveryTime = function(){
        console.log('Calculating...');
    }
    this.burnMouth = function(){
        console.log('FUUUU');
    }
    this.frisbee = function(){
        console.log('Yeet!');
    }
}
  
let pizza = new PizzaMachine('white', 'deep dish', ['spinach','garlic'], 'large')