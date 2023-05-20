let turn = 0
let invisible = "‎";
const stat = document.getElementById("status")
let player = document.getElementById("player");
let btns = document.querySelectorAll("button");

let musicPlayer = document.getElementById("musicPlayer")

let playButtons = document.querySelectorAll("input")
playButtons[1].addEventListener("click", () => {
    playButtons[1].value = (playButtons[1].value === "Play Sound") ? "Stop Sound" : "Play Sound";
})


// let a = new Audio("happy.mp3") 
// a.play()

// musicPlayer.play()
// window.onload = function(){
//     musicPlayer.muted = false
// }

function playmusic() {
    if (musicPlayer.paused) {
        musicPlayer.play()
        musicPlayer.currentTime = 0
    } else {
        musicPlayer.pause()
    }

}
// function restart(){
//     location.reload()
//     playmusic()
// }

function restart() {
    turn = 0   
    // if(musicPlayer.is)
    if (musicPlayer.paused) {
        musicPlayer.pause()
        musicPlayer.currentTime = 0
    } else {
        musicPlayer.play()
    }

    btns.forEach(btn => btn.disabled = false)
    btns.forEach(btn => btn.innerText = invisible)
    stat.innerText = "Player X Turn"
    // location.reload()
}



let soundPlayer = document.getElementById("soundPlayer")


btns.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.innerText = (turn % 2 == 0) ? "X" : "O"
        player.innerText = (turn % 2 != 0) ? "X" : "O"
        btn.disabled = "disabled"
        turn++;
        grid();

    })
})

function checkDraw() {
    let bool = true
    for (let i = 0; i < btns.length; i++) {
        console.log(btns[i].disabled !== "disabled");
        if (btns[i].innerText === invisible) {
            bool = false
            console.log("checking...");
            break
        }
    }
    if (bool) {
        stat.innerText = "DRAW"
        console.log("draw");
    }
}

function check(a, b, c) {
    if ((btns[a].innerText == btns[b].innerText) && (btns[b].innerText == btns[c].innerText)) {
        if (btns[a].innerText != invisible) {
            stat.innerText = (btns[a].innerText + " won")
            btns.forEach(btn => btn.disabled = "disabled")
            musicPlayer.pause()
            musicPlayer.currentTime = 0
            soundPlayer.play()
        }
    }
    checkDraw()
}
function grid() {
    // for(let i = 0; i < 9; i+=3){
    //     check(i,i+1,i+2)
    // }
    for (let i = 0; i < 3; i++) {
        check(i, i + 3, i + 6)
        check(3 * i, 3 * i + 1, 3 * i + 2)
    }
    check(0, 4, 8)
    check(2, 4, 6)
}

localStorage.setItem("name", "chetank")