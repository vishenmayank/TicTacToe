let boxes = document.querySelectorAll(".box");
let resetbtn= document.querySelector("#resetbtn");
let newGamebtn= document.querySelector("#newbtn");
let msgContainer= document.querySelector(".msg-container");
let msg= document.querySelector("#msg");
let turn0= true;

const winpattrns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
const resetGame =()=>{
    turn0= true;
    enableBoxes();
    msgContainer.classList.add("hide");

}

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        if(turn0){
            box.innerText= "0";
            turn0=false;
        }else{
            box.innerText="X";
            turn0= true;
        }
        box.disabled=true;

        checkWinner();
    })

})
const disableBoxes= ()=>{
    for(let box of boxes){
        box.disabled= true;
    }
}
const enableBoxes= ()=>{
    for(let box of boxes){
        box.disabled= false;
        box.innerText= "";
    }
}
const showWinner = (winner)=>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner= ()=>{
    for(let paterns of winpattrns){
        let pos1Val = boxes[paterns[0]].innerText;
        let pos2Val = boxes[paterns[1]].innerText;
        let pos3Val = boxes[paterns[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if (pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);

            }
        }

    }
}
newGamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);