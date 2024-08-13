// console.log('hello world')

// window.alert("this is an alert")

// document.getElementById("thep").textContent = "HEllo"

const display = document.getElementById("display")

function appendtodisplay(input){
    display.value += input
}

function clearall(){
    display.value = "";
}

function calculate(){
    try{
        
    display.value = eval(display.value)
    }
    catch(error){
        display.value = "Error"
    }
}