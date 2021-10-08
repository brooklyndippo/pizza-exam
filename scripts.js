//-----------------------------------------------
// SELECT INPUTS/OUTPUTS FROM HTML DOC

//const item = document.querySelector('#id')

// Define variables for three sections
const input = document.querySelector('#input')
const output = document.querySelector('#output')
const visual = document.querySelector('#visual')

// Define varibales for input, range, and selector
const fnameInput = document.querySelector('#name')
const diameterInput = document.querySelector('#diameter')
const toppingsInput = document.querySelector('#toppings')

// Define variables for the display output
const nameOutput = document.querySelector('#name-output')
const diameterOutput = document.querySelector('#diameter-output')
const typeOutput = document.querySelector('#type-output')
const costOutput = document.querySelector('#cost-output')


// Define variable for the visualizer
const pizza = document.querySelector('#pizza')



//-----------------------------------------------
// ADD EVENT LISTENERS

//item.addEventListener('change', functionName)

fnameInput.addEventListener('change', handlePizza) 
diameterInput.addEventListener('change', handlePizza)
toppingsInput.addEventListener('change', handlePizza)


//-----------------------------------------------
// FUNCTION TO HANDLE PIZZA MAKING!

function handlePizza(e) {

    //collect the inputs for all of the values
    const fname = fnameInput.value
    const diameter = parseInt(diameterInput.value)
    const toppings = toppingsInput.value
    const pizzaSize = diameter*2

    console.log (fname, diameter, toppings)

    //use the diameter to calculate the area of the pizza
    const radius = diameter/2
    console.log (`radius: ${radius}`)
    const area = radius * radius * Math.PI

    console.log (`area: ${area}`)

    // use the pizza type to determine the cost per square inch
    let perInch = 0.33
    if (toppings == "Cheese") {
        perInch = 0.25
    } 

    console.log(`cost per square inch: ${perInch}`)

    // use the cost per inch and area to calculate the total cost
    let cost = (area * perInch)
    cost = cost.toFixed(2)
    console.log(`total cost: ${cost}`)


    //display the output values
    nameOutput.innerHTML = `${fname}`
    diameterOutput.innerHTML = `${diameter} inches`
    typeOutput.innerHTML =`${toppings} Pizza`
    costOutput.innerHTML =`$${cost}`


    //display the PIZZA!
    let pizzaImage = "images/cheese.jpeg"
    
    if (toppings == "Pepperoni") {
        pizzaImage = "images/peperoni.jpeg"
    }
    else if (toppings == "Sausage") {
        pizzaImage = "images/sausage.jpeg"
    }
    else if (toppings == "Onion") {
        pizzaImage = "images/onions.jpeg"
    }
    else if (toppings == "Tomato") {
        pizzaImage = "images/tomatoes.jpeg"
    }

    pizza.innerHTML = `<img src="${pizzaImage}" height="${pizzaSize}px" width="${pizzaSize}px">`


}

