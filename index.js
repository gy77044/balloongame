
const gameArea = document.getElementById("game-area");
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let missedBalloon = 0
let gameOver = false;
let speed = 1500;
function createBalloon(){
     if (gameOver) return;
    // random letters
    const randomLetters = 
        letters[Math.floor(Math.random()* letters.length)];
     
    // create balloon 
    const balloon = document.createElement("div");
    //add class
    balloon.classList.add("balloon");
    //add text inside balloon
    balloon.innerText = randomLetters;
    //random left position
    balloon.style.left = Math.random()* 90 + "%";
    // save letter in attribute 
    balloon.setAttribute("data-letter", randomLetters);
    gameArea.appendChild(balloon);
    //click balloon
    balloon.addEventListener("click", function(){
        balloon.remove();
    }) 
    balloon.addEventListener("animationend", function(){
        if(balloon.parentNode){
            balloon.remove();
            missedBalloon++;
            if(missedBalloon>=10){
                gameOver= true;
                setTimeout(() => {

        alert("GAME OVER");

        location.reload();

    }, 100);
            }
        }
    })

}

document.addEventListener("keydown", function(event){
    const pressedKey = event.key.toUpperCase();
    const balloon = document.querySelector(`[data-letter="${pressedKey}"]`);
    if(balloon){
        balloon.remove();
    }
})

setInterval(createBalloon,1000);