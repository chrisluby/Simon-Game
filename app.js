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

//TODO: refactor
//shows userclick and pushes the color to userAnswer array
//* GREEN -----
green.addEventListener("mousedown", function() { 
    setTimeout(function(){ 
    green.style.backgroundColor = "green"}, 150);

    green.style.backgroundColor = "#00800085"; //flash color  //todo: adjust colors
    userAnswer.push("green"); 
    console.log(userAnswer)
});

//* RED -----
red.addEventListener("mousedown", function() { 
    setTimeout(function(){ 
    red.style.backgroundColor = "red"}, 150);

    red.style.backgroundColor = "#920000"; //flash color
    userAnswer.push("red"); 
    console.log(userAnswer)
});

//* YELLOW -----
yellow.addEventListener("mousedown", function() { 
    setTimeout(function(){ 
    yellow.style.backgroundColor = "yellow"}, 150);

    yellow.style.backgroundColor = "#7f8000"; //flash color  //todo: adjust colors
    userAnswer.push("yellow"); 
    console.log(userAnswer)
});

//* BLUE -----
blue.addEventListener("mousedown", function() { 
    setTimeout(function(){ 
    blue.style.backgroundColor = "blue"}, 150);

    blue.style.backgroundColor = "#000079"; //flash color  //todo: adjust colors
    userAnswer.push("blue"); 
    console.log(userAnswer)
});

console.log(colors)
//* game state








