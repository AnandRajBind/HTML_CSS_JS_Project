// Select the html element 
let decrementButton = document.getElementById("decrementButton");
let displayValue = document.getElementById("displayValue");
let incrementButton = document.getElementById("incrementButton");
let resetButton = document.getElementById("resetButton");

// add event listner on the decrement button and create the arrow function 
decrementButton.addEventListener("click", () => {
    let valueVariable = Number(displayValue.innerText);
    if (valueVariable > 0) {
        displayValue.innerText = valueVariable - 1;
    }
    else {
        alert("Negative Value is Not allow")
    }
}
);
// add event listner on the decrement button and create the arrow function 

incrementButton.addEventListener("click", () => {
    let valueVariable = Number(displayValue.innerText);
    if (valueVariable >= 10) {
        alert("It is maximum Value")
    }
    else {
        displayValue.innerText = valueVariable + 1;
    }
}
);
// reset button
resetButton.addEventListener("click",() =>{
    displayValue.innerText=0;
}
);