let winsEnemy = 0;
let winsPlayer = 0;
let uitslag = document.getElementById("uitslag");
let buttonPaper = document.getElementById("buttonpaper");
let buttonScissors = document.getElementById("buttonscissors");
let buttonElements = document.getElementsByClassName("button");
let objectWinsEnemy = document.getElementById("winscomputer");
let objectWinsPlayer = document.getElementById("winsplayer");
let photoComputer = document.getElementById("choicecomputer");
let photoPlayer = document.getElementById("choiceplayer");

function ChoiceIsRock() {
    AddAnimation();
    DisableButtons();
    setTimeout(() => {
        RemoveAnimation();
        photoPlayer.src = "img/playerfist.png";
        let choiceEnemy = Math.floor(Math.random() * 3 + 1);
        switch (choiceEnemy) {
            case 1: //rock
                photoComputer.src = "img/enemyfist.png";
                NobodyWon();
                break;
            case 2: //paper
                photoComputer.src = "img/enemypaper.png";
                EnemyWon();
                break;
            case 3: //scissors
                photoComputer.src = "img/enemyscissor.png";
                PlayerWon();
                break;
        }
        EnableButtons();
    }, 2000)
}

function ChoiceIsPaper() {
    AddAnimation();
    DisableButtons();
    setTimeout(() => {
        RemoveAnimation();
        photoPlayer.src = "img/playerpaper.png";
        let choiceEnemy = Math.floor(Math.random() * 3 + 1);
        switch (choiceEnemy) {
            case 1: //rock
                photoComputer.src = "img/enemyfist.png";
                PlayerWon();
                break;
            case 2: //paper
                photoComputer.src = "img/enemypaper.png";
                NobodyWon();
                break;
            case 3: //scissors
                photoComputer.src = "img/enemyscissor.png";
                EnemyWon();
                break;
        }
        EnableButtons();
    }, 2000)
}

function ChoiceIsScissor() {
    AddAnimation();
    DisableButtons();
    setTimeout(() => {
        RemoveAnimation();
        photoPlayer.src = "img/playerscissor.png";
        let choiceEnemy = Math.floor(Math.random() * 3 + 1);
        switch (choiceEnemy) {
            case 1: //rock
                photoComputer.src = "img/enemyfist.png";
                EnemyWon();
                break;
            case 2: //paper
                photoComputer.src = "img/enemypaper.png";
                PlayerWon();
                break;
            case 3: //scissors
                photoComputer.src = "img/enemyscissor.png";
                NobodyWon();
                break;
        }
        EnableButtons();
    }, 2000)
}

function EnemyWon() {
    uitslag.innerHTML = "COMPUTER WON!";
    winsEnemy++;
    objectWinsEnemy.innerHTML = winsEnemy;
    setTimeout(() => {
        ResetText();
    }, 2000);
}

function PlayerWon() {
    uitslag.innerHTML = "YOU WON!";
    winsPlayer++;
    objectWinsPlayer.innerHTML = winsPlayer;
    setTimeout(() => {
        ResetText();
    }, 2000);
}

function NobodyWon() {
    uitslag.innerHTML = "IT'S A TIE!";
    setTimeout(() => {
        ResetText();
    }, 2000);
}

function ResetText(){
    uitslag.innerHTML = "CHOOSE AN OPTION";
}

function AddAnimation() {
    photoPlayer.src = "img/playerfist.png";
    photoComputer.src = "img/enemyfist.png";
    photoPlayer.style.animation = "shake 2s ease";
    photoComputer.style.animation = "shake 2s ease";
}

function RemoveAnimation() {
    photoPlayer.style.animation = "";
    photoComputer.style.animation = "";
}

buttonPaper.addEventListener("mouseover", function () {
    photoPlayer.src = "img/playerpaper.png";
})

buttonScissors.addEventListener("mouseover", function () {
    photoPlayer.src = "img/playerscissor.png";
})

for (let i = 0; i < buttonElements.length; i++) {
    buttonElements[i].addEventListener('mouseleave', function () {
        photoPlayer.src = "img/playerfist.png";
    });
}

function DisableButtons(){
    for (let i = 0; i < buttonElements.length; i++) {
        buttonElements[i].setAttribute('disabled','')
        console.log(buttonElements[i] + " = disabled")
    }
}

function EnableButtons(){
    for (let i = 0; i < buttonElements.length; i++) {
        buttonElements[i].removeAttribute('disabled','');
    }
}







