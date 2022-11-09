/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

//Global Variables
let decimalPlaces = 3
const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const decPlaceEl = document.getElementById("dec-place-input")
const units = [
    {
        resultEl: "result-len-ft"
        ,inputAmountEl: "amt-len-ft"
        ,conversion: 3.281
        ,single: "foot"
        ,multi: "feet"
    }
    ,{
        resultEl: "result-len-m"
        ,inputAmountEl: "amt-len-m"
        ,conversion: 0.305
        ,single: "meter"
        ,multi: "meters"
    }
    ,{
        resultEl: "result-vol-gal"
        ,inputAmountEl: "amt-vol-gal"
        ,conversion: 0.264
        ,single: "gallon"
        ,multi: "gallons"
    }
    ,{
        resultEl: "result-vol-l"
        ,inputAmountEl: "amt-vol-l"
        ,conversion: 3.788
        ,single: "liter"
        ,multi: "liters"
    }
    ,{
        resultEl: "result-mass-lb"
        ,inputAmountEl: "amt-mass-lb"
        ,conversion: 2.204
        ,single: "pound"
        ,multi: "pounds"
    }
    ,{
        resultEl: "result-mass-kg"
        ,inputAmountEl: "amt-mass-kg"
        ,conversion: 0.454
        ,single: "kilogram"
        ,multi: "kilograms"
    }
]


if (convertBtn) {
    
    convertBtn.addEventListener("click", function() {
        
        let inputValue = document.getElementById("input-el").value
    
        if ((!inputValue) || (inputValue == 0)) {
            displayInput(1)
            convert(1)
        } else if (inputValue < 0){
            let correctedValue = Math.abs(inputValue)
            inputEl.value = correctedValue
            displayInput(correctedValue)
            convert(correctedValue)
        } else {
            displayInput(inputValue)
            convert(inputValue)
        }
    })
}


if (decPlaceEl) {
    
    decPlaceEl.addEventListener("change", function () {
        
        decimalPlaces = decPlaceEl.value
    })
}


function displayInput(inputValue) {
    
    if (inputValue == 1) {
        for (let i = 0; i < units.length; i++) {
            updateDisplay(units[i].inputAmountEl, inputValue, units[i].single)
        }       
    } else {
        for (let i = 0; i < units.length; i++) {
            updateDisplay(units[i].inputAmountEl, inputValue, units[i].multi)
        }
    }
}


function convert(inputValue) {
    
    if (inputValue) {
        for (let i = 0; i < units.length; i++) {
            let convertedValue = (inputValue * units[i].conversion).toFixed(decimalPlaces)
            if (convertedValue == 1) {
                updateDisplay(units[i].resultEl, convertedValue, units[i].single)
            } else {
                updateDisplay(units[i].resultEl, convertedValue, units[i].multi)
            }
        }
    }
}

/*
I wasn't sure if it was better practice to have the updating of DOM content in a separate function.
I had it in the other functions in one line before like this, for example:
    document.getElementById(units[i].inputAmountEl).textContent = `${inputValue} ${units[i].single}`
I moved it to its own function thinking that the more modular the better but I'm curious to hear what is recommended.
*/

function updateDisplay(elToUpdate, displayNum, displayUnit) {
    
    document.getElementById(elToUpdate).textContent = `${displayNum} ${displayUnit}`
}