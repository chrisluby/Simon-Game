//colored square selectors
let green = document.getElementById('green')
let red = document.getElementById('red')
let yellow = document.getElementById('yellow')
let blue = document.getElementById('blue')

let userAnswer = [];

function randomColor() {
    var min = 1;
    var max = 1000;
    var number = Math.floor(Math.random() * (+max - +min)) + +min;
    if (number > 0 && number <= 250) {
        let number = "g";
        return number
    } else if (number >= 250 && number <= 500) {
        let number = "r";
        return number
    } else if (number >= 500 && number <= 750) {
        let number = "y";
        return number
    } else {
        let number = "b";
        return number
    }
}

//generate array of random colors
let colors = [];
for (i = 0; i < 40; i++) {
    colors.push(randomColor())
}
console.log(colors)

//TODO: refactor

//shows userclick and pushes the color to userAnswer array
//* GREEN -----
green.addEventListener("mousedown", function () {
    setTimeout(function () {
        green.style.backgroundColor = "green"
    }, 150);

    green.style.backgroundColor = "#00800085"; //flash color  //todo: adjust colors
    userAnswer.push("green");
    console.log(userAnswer)
});

//* RED -----
red.addEventListener("mousedown", function () {
    setTimeout(function () {
        red.style.backgroundColor = "red"
    }, 150);

    red.style.backgroundColor = "#920000"; //flash color
    userAnswer.push("red");
    console.log(userAnswer)
});

//* YELLOW -----
yellow.addEventListener("mousedown", function () {
    setTimeout(function () {
        yellow.style.backgroundColor = "yellow"
    }, 150);

    yellow.style.backgroundColor = "#7f8000"; //flash color  //todo: adjust colors
    userAnswer.push("yellow");
    console.log(userAnswer)
});

//* BLUE -----
blue.addEventListener("mousedown", function () {
    setTimeout(function () {
        blue.style.backgroundColor = "blue"
    }, 150);

    blue.style.backgroundColor = "#000079"; //flash color  //todo: adjust colors
    userAnswer.push("blue");
    console.log(userAnswer)
});

// console.log(colors)








//show the buttons being pressed
function greenPressed() {
    setTimeout(function () {
        green.style.backgroundColor = "green"
    }, 600);

    green.style.backgroundColor = "#00800085"; //flash color  
    userAnswer.push("green");
}

function redPressed() {
    setTimeout(function () {
        red.style.backgroundColor = "red"
    }, 600);

    red.style.backgroundColor = "#920000"; //flash color
    userAnswer.push("red");
}

function yellowPressed() {
    setTimeout(function () {
        yellow.style.backgroundColor = "yellow"
    }, 600);

    yellow.style.backgroundColor = "#7f8000"; //flash color  
    userAnswer.push("yellow");
}

function bluePressed() {
    setTimeout(function () {
        blue.style.backgroundColor = "blue"
    }, 600);

    blue.style.backgroundColor = "#000079"; //flash color  
    userAnswer.push("blue");
}







