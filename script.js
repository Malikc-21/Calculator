function add(a, b) {
    return a + b;
  };

function subtract(a, b) {
    return a - b;
  };

let type;
let num1;
let num2;
let array = []

const operator = document.querySelector("#func")
const which = operator.querySelectorAll("#add")

which.forEach((button) => {
    button.addEventListener("click", () => {
    num1 = parseInt(array.join(""))
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
    if(type == "+"){
    console.log(add(num1, num2))
    } else if (type == "-") {
        console.log(subtract(num1, num2))
    }
    
    
}


const nums = document.querySelector("#num")
const number = nums.querySelectorAll("#number")

number.forEach((button) => {

        button.addEventListener('click', () => {
            array.push(button.textContent)
            
    })
})









