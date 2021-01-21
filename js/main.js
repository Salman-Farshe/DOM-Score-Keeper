let one = document.querySelector(".one");
let two = document.querySelector(".two");
let reset = document.querySelector(".reset");

let playerOne = document.querySelector(".playerOne");
let playerTwo = document.querySelector(".playerTwo");
let scoreOne = 0;
let scoreTwo = 0;

let inputNumber = document.querySelector("input[type = 'number']");
let outputNumber = document.querySelector(".numbers");

let gameOver = false;
let winingScore = 5;

// input section
inputNumber.addEventListener("change", function(){
    allreset();
    outputNumber.textContent = inputNumber.value;
    winingScore = Number(inputNumber.value);
});
// player one button
one.addEventListener("click", function(){
    if(!gameOver){
        scoreOne++;
        if(scoreOne === winingScore){
            gameOver = true;
            one.style.background = "green";
            playerOne.style.color = "green";
        }
        playerOne.textContent = scoreOne;
    }
});
// player two button
two.addEventListener("click", function(){
    if(!gameOver){
        scoreTwo++;
        if(scoreTwo === winingScore){
            gameOver = true;
            two.style.background = "green";
            playerTwo.style.color = "green";
        }
        playerTwo.textContent = scoreTwo;
    }
});

// reset button
reset.addEventListener("click", function(){
    allreset();
});

function allreset(){
    scoreOne = 0;
    scoreTwo = 0;
    playerOne.textContent = 0;
    playerTwo.textContent = 0;
    one.style.background = "none";
    two.style.background = "none";
    playerOne.style.color = "black";
    playerTwo.style.color = "black";
    outputNumber.textContent = 0;
    inputNumber.textContent = 0;
    gameOver = false;
}
