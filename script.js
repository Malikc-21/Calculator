function add(a, b) {
    return a + b;
  };

function subtract(a, b) {
    return a - b;
  };

let clear = true
let type;
let num1;
let num2;
let array = []
let gone = false

const results = document.querySelector("#results")

const operator = document.querySelector("#func")
const which = operator.querySelectorAll("#add")

which.forEach((button) => {

    button.addEventListener("click", () => {
    if (clear == true){
    num1 = parseInt(array.join(""))
    }
    type = button.textContent
    array = []
})
})

let equal = document.querySelector("#equal")

equal.addEventListener("click", () => {
    
    num2 = parseInt(array.join(""))
    array = []
    operate()
})


function operate(){
    clear = false

    if(type == "+"){
        
        console.log (add(num1, num2))
    num1 = add(num1, num2)
    

    } else if (type == "-") {
        
        console.log(subtract(num1, num2))
        num1 = subtract(num1, num2)
    }
    
    
    
}


const nums = document.querySelector("#num")
const number = nums.querySelectorAll("#number")

number.forEach((button) => {

        button.addEventListener('click', () => {
            array.push(button.textContent)
            
    })
})

let erase = document.querySelector("#erase")


        erase.addEventListener("click", () => {
    clear = true
    num1 = undefined
    num2 = undefined
})











