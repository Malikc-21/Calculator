function add(a, b) {
    return a + b;
  };

function subtract(a, b) {
    return a - b;
  };

function multiply(a, b) {
    return a * b;
  };

function divide(a, b) {
    return a / b;
  };


next = false
let neg = false
let full = false
let clear = true
let type;
let num1;
let num2;
let array = []
continuing = false

const results = document.querySelector("#results")
const operator = document.querySelector("#func")
const which = operator.querySelectorAll("#extra")

which.forEach((button) => {

    
    button.addEventListener("click", () => {
    if (clear == true && continuing == false){
    num1 = parseFloat(array.join(""))
    continuing = true
    }
    if (type != null && continuing == true) {
    clear = false
    num2 = parseFloat(array.join(""))
    neg = false
    next = false
    operate()
    }
    type = button.textContent
    array = []
    next = true 
    
})
})

let equal = document.querySelector("#equal")

equal.addEventListener("click", () => {
    
    num2 = parseFloat(array.join(""))
    array = []
    neg = false
    next = false
    operate()
})


function operate(){
    full = true
    clear = false
    
    if (num2 == 0 && type == "÷"){
        results.textContent = ('ERROR')

    } else if(type == "+") {
    console.log (add(num1, num2))
    results.textContent = (add(num1, num2))
    num1 = add(num1, num2)
    type = null
    

    } else if (type == "-") {
        
        console.log(subtract(num1, num2))
        results.textContent = (subtract(num1, num2))
        num1 = subtract(num1, num2)
        type = null
        
        
    } else if (type == "x") {
        
        console.log(multiply(num1, num2))
        results.textContent = (multiply(num1, num2))
        num1 = multiply(num1, num2)
        type = null
        
        
    } else if (type == "÷") {
        
        console.log(divide(num1, num2))
        results.textContent = (divide(num1, num2))
        num1 = divide(num1, num2)
        type = null
    }

}


const nums = document.querySelector("#num")
const number = nums.querySelectorAll("#number")

number.forEach((button) => {

        button.addEventListener('click', () => {
            array.push(button.textContent)
            if (full == true && type == null) {
                results.textContent = ""
                clear = true 
                full = false
                
                type = null
                continuing = false
            }
        full = false
        
            
    })
})

let erase = document.querySelector("#erase")

    

    erase.addEventListener("click", () => {
        array = []
        clear = true
        num1 = undefined
        num2 = undefined
        full = false
        neg = false
        type = null
        continuing = false
        destroy()
})

number.forEach((button) => {

    button.addEventListener('click', () => {
        const tree = document.createElement('p')
        tree.className = "ints"
        tree.textContent = button.textContent
        results.appendChild(tree)

        
        
})
})

which.forEach((button) => {

    button.addEventListener('click', () => {
        const tree = document.createElement('p')
        tree.className = "ops"
        tree.textContent = button.textContent
        results.appendChild(tree)
    
})
})

function destroy(){
    
    results.textContent = ""
    const res = document.querySelector("#results")

    const child = res.querySelectorAll(".ops")

    child.forEach((child) => {
        res.removeChild(child)
    })

}



negative = document.querySelector("#negative")

negative.addEventListener('click', () => {
    
if (next == true){

    if (neg == false) {
        
        array.splice(0, 0, "-")
        neg = true
        const before = document.querySelector(".ops")
        before.insertAdjacentText('beforeend', " -")

    } else if (neg == true) {
        array.shift()
        neg = false
        const before = document.querySelector(".ops")
        let str = before.textContent
        str = str.replace("-", "")
        before.textContent = str
        
    }
    
}



    if (next == false) {

        if (neg == false) {
        
            array.splice(0, 0, "-")
            neg = true
            const before = document.querySelector(".ints")
            before.insertAdjacentText('afterbegin', "-")
        
        } else if (neg == true) {
            array.shift()
            neg = false
            const before = document.querySelector(".ints")
            let str = before.textContent
            str = str.replace("-", "")
            before.textContent = str
    }

}


})













