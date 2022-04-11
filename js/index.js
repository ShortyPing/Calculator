let buttons = document.getElementsByClassName("button");
let input = document.getElementById("input")
let currentInput = ""

for(let button of buttons) {
    button.addEventListener("click", () => {
        let func = button.getAttribute("value")

        evalInput(func)

    })
}

function evalInput(func) {
    if(func === "AC") {
        updateCurrentInput("")
        return;
    }

    if(func === "DEL") {
        let arr = currentInput.split("")
        arr.pop()
        currentInput = arr.join("")

        updateCurrentInput(currentInput)
        return;
    }

    if(func === "EQU") {
        calculate()
        return;
    }

    updateCurrentInput(currentInput + func)
}

document.addEventListener("keyup", (key) => {
    console.log(key.key)
    switch (key.key) {
        case "0":
            updateCurrentInput(currentInput + "0")
            break;
        case "1":
            updateCurrentInput(currentInput + "1")
            break;
        case "2":
            updateCurrentInput(currentInput + "2")
            break;
        case "3":
            updateCurrentInput(currentInput + "3")
            break;
        case "4":
            updateCurrentInput(currentInput + "4")
            break;
        case "5":
            updateCurrentInput(currentInput + "5")
            break;
        case "6":
            updateCurrentInput(currentInput + "6")
            break;
        case "7":
            updateCurrentInput(currentInput + "7")
            break;
        case "8":
            updateCurrentInput(currentInput + "8")
            break;
        case "9":
            updateCurrentInput(currentInput + "9")
            break;
        case "*":
            updateCurrentInput(currentInput + "*")
            break;
        case "/":
            updateCurrentInput(currentInput + "/")
            break;
        case "+":
            updateCurrentInput(currentInput + "+")
            break;
        case "-":
            updateCurrentInput(currentInput + "-")
            break;
        case "^":
            updateCurrentInput(currentInput + "**")
            break;
        case "Delete":
            evalInput("AC")
            break;
        case "Backspace":
            evalInput("DEL")
            break;
        case "Dead":
            evalInput("^")
            break;
        case "Enter":
            evalInput("EQU")
            break

    }
})

function calculate() {
    currentInput = currentInput.replace(/\^/g, "**")
    currentInput = currentInput.replace(/PI/g, "Math.PI")
    currentInput = currentInput.replace(/π/g, "Math.PI")

    input.innerHTML = eval(currentInput)

}

function updateCurrentInput(value) {
    value = value.replace(/\*\*/g, "^")
    value = value.replace(/Math\.PI/g, "π")
    value = value.replace(/PI/g, "π")
    currentInput = value;

    input.innerHTML = currentInput;

}