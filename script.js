const currentButton = document.querySelectorAll("#btn");
const display = document.querySelector(".display");
const userInput = document.querySelector(".user-input")
const clear = document.querySelector(".clear");
const removeLast = document.querySelector(".delete")

// refresh page
clear.addEventListener('click',()=>{
     window.location.reload()
})
// will show selected button on the user-input screen
let currentSelectedButton = currentButton.forEach(currentButton =>{
    currentButton.addEventListener('click',()=>{
     let currentElement = currentButton.innerText;
    userInput.innerText += currentElement
    })
})

// remove last element
function lastElement(){
    userInput.innerText = userInput.innerText.slice(0,-1)
    return userInput.innerText
}

removeLast.addEventListener('click',lastElement)

// add function
function add(a,b){
    return a+b;
}

// subtract function
function subtract(a,b){
    return a-b;
}


// multiply function
function multiply(a,b){
    return a * b;
}

// divide funciton
function divide(a,b){
    return a/b;
}

function operate(a,b,operator){
    a = Number(a);
    b = Number(b);

    for(let i =0; i <  userInput.innerText;i++){
        if(userInput.innerText[i].includes(operator)){
            a = userInput.innerText.slice(0,operator-1)
            b = userInput.innerText.slice(operator + 1,userInput.length);
            console.log(a);
            console.log(b)
        }
    }

    switch(operator){
        case '+':
            return add(a,b)
        case '-':
            return subtract(a,b)
        case '*':
            return multiply(a,b)
        case '/':
            if(b===0){
                return null 
            }else {
                return divide(a,b);
            }
    }
}
