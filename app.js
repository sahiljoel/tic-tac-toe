let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#reset-button")
let newbutton = document.querySelector("#new-button")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")
let turn = true;


let count =0;
const winPtattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const restGame = () => {

    turn = true;
    count = 0;
    enableboxes();
    msgContainer.classList.add("hide")
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if (turn) {
            box.innerText = "X";
            turn =false;
        } else {
            box.innerText = "y"

            turn = true;
        }
        box.disable = true;
        count++;

        let isWinner = checkWinner();
        if(count ===9 &&  !isWinner){
            gameDraw();
        }
    });
});
const gameDraw = () =>{
    msg.innerText = `Game  was a Draw`
    msgContainer.classList.remove("hide");
    disabledboxes();

}
const disabledboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableboxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (Winner) =>  {
    msg.innerText = `congratulation,Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disabledboxes();
};


const checkWinner = () => {
    for (pattern of winPtattern){
        let postval1 = boxes [pattern[0]].innerText;
        let postval2 = boxes [pattern[1]].innerText;
        let postval3 = boxes [pattern[2]].innerText;
        if (postval1 != "" && postval2 && postval3 !="") {
            if(postval1 === postval2 && postval2 === postval3){
                showWinner(postval1);
                return true;
            }
        }
   }
};
newbutton.addEventListener("click",restGame)
resetBtn.addEventListener("click",restGame);
