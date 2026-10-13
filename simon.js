let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let btns = ["yellow", "red", "purple", "green"];
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
    if (!started) {
        console.log("game started ");
        started = true;
        levelup();
    }
})

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(() => {
        btn.classList.remove("userFlash");
    }, 250);
}

function levelup() {
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);//class ka naam select kiya h
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    // btnFlash(randBtn)
    gameFlash(randBtn);
    //random btn choose

}

function checkAns(idx) {
    //console.log("curr level :", level); 
    // let idx=level-1;
    if (userSeq[idx] == gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b>,<br> Press any key to restart.</br>`;
        reset();
        document.body.classList.add("game-over");

        setTimeout(() => {
            document.body.classList.remove("game-over");
        }, 200);
    }
}
function btnPress() {
    let btn = this;
    userFlash(btn);
    // console.log(this); 

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    gameSeq = [];
    userSeq = [];
    started = false;
    level = 0;
}
