
// console.log("yes it is working");
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let turnO = true; //player 1 and player 2
let message=document.querySelector(".message");
let newGame=document.querySelector(".new-game-btn");
let mescontainer=document.querySelector(".mes-container");
let drawgame=document.querySelector(".drawgame");

let count=0;

let winningPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [6, 7, 8],
    [2, 5, 8],
    [1, 4, 7],
    [3, 4, 5],
    [0, 4, 8],
    [2, 4, 6]
];

const resetGame=()=>{
    turnO=true;
    count=0;
    enableBoxes();
    mescontainer.classList.add("hide");
    drawgame.classList.add("hide2"); 


};

boxes.forEach((box) => {

    box.addEventListener("click", () => {

        if (turnO) {
            box.innerHTML = "O";
            turnO = false;
            box.disabled=true;
            count++;
        }
        else {
            box.innerHTML = "X";
            turnO = true;
            box.disabled=true;
            count++
        }
       
        // console.log("box was clicked");
        if(count===9)
            {
                drawGame();
                count=0;
            }
        checkWinner();



    });
});


const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML="";
    }
};  

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const showWinner=(winner)=>{

    message.innerHTML=`Congratulation, winner is ${winner}`;
    mescontainer.classList.remove("hide");  //removing class hide
    
    drawgame.classList.add("hide2"); //removing hide 2
    disableBoxes();
};

const checkWinner = () => {
    for (let pattern of winningPatterns) {
        let pat1 = boxes[pattern[0]].innerHTML;
        let pat2 = boxes[pattern[1]].innerHTML;
        let pat3 = boxes[pattern[2]].innerHTML;

        if (pat1 != "" && pat2 != "" && pat3 != "") {
            if (pat1 === pat2 && pat2 === pat3) {
                // console.log("winner",pat1);
                
                showWinner(pat1);
               

            };

        };
    };

};

const drawGame=()=>{

    drawgame.classList.remove("hide2"); 
}
resetBtn.addEventListener("click",resetGame);

newGame.addEventListener("click",resetGame);


