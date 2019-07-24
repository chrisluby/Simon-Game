//colored square selectors
let green = document.getElementById('green')
let red = document.getElementById('red')
let yellow = document.getElementById('yellow')
let blue = document.getElementById('blue')
//------------------------
let userAnswer = [];

function randomColor() {
    var min = 1; 
    var max = 100
    var number = Math.floor(Math.random() * (+max - +min)) + +min;
    if (number > 0 && number <= 25) {
        let number = "green"
        return number
    } else if (number >= 25 && number <= 50) {
        let number = "red"
        return number
    } else if (number >= 50 && number <= 75) {
        let number = "yellow"
        return number
    } else {
        let number = "blue"
        return number
    }
    
}

//generate array of 100 random colors
let colors = [];
for (i=0; i < 100; i++) {
    colors.push(randomColor())
}

//game ready-------------------------------------------------------------------------------
