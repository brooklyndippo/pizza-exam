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
    const fname = fnameInput.value
    const diameter = parseInt(diameterInput.value)
    const toppings = toppingsInput.value

    console.log (fname, diameter, toppings)


}


//-----------------------------------------------
// CONSOLE LOG TO CHECK THE THING





//-----------------------------------------------
// PUSH OUTPUT VALUES TO DISPLAY