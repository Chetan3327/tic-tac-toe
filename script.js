let turn = 0
let invisible = "‎";
const stat = document.getElementById("status")
let player = document.getElementById("player");
let btns = document.querySelectorAll("button")
btns.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.innerText = (turn%2 == 0)?"X":"O"
        player.innerText = (turn%2 != 0)?"X":"O"
        btn.disabled = "disabled"
        turn++;
        grid();

    })
})

function checkDraw(){
    let bool = true
    for(let i =0; i<btns.length; i++){
        console.log(btns[i].disabled !== "disabled");
        if(btns[i].innerText === invisible){
            bool = false
            console.log("checking...");
            break
        }
    }
    if(bool){
        stat.innerText = "DRAW"
        console.log("draw");
    }
}

function check(a,b,c){
    if((btns[a].innerText == btns[b].innerText)&&(btns[b].innerText == btns[c].innerText)){
        if(btns[a].innerText != invisible){
            stat.innerText = (btns[a].innerText + " won")
            btns.forEach(btn => btn.disabled = "disabled")
        }
    }
    checkDraw()
}
function grid(){
    // for(let i = 0; i < 9; i+=3){
    //     check(i,i+1,i+2)
    // }
    for(let i = 0; i < 3; i++){
        check(i,i+3,i+6)
        check(3*i,3*i+1,3*i+2) 
    }
    check(0,4,8)
    check(2,4,6)   
}

localStorage.setItem("name", "chetank")