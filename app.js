let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".button");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let newGameBtn=document.querySelector("#new-btn");
let turn =true;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

]
boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        if(turn){
        box.innerText="o";
        turn=false;

        }else{
            box.innerText="x";
            turn=true;

        }
        box.disabled=true;
        checkWinner();
        
        
    });
});
const newGame =()=>{
    boxEnabled();
    msgContainer.classList.add("hide")
}
const boxEnabled=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const boxDisabled=()=>{
    for(box of boxes){
        box.disabled=true;
        
    }
}
const showSWinner=(pos1val) =>{
    msg.innerText=`Congratulation, winner is ${pos1val}`;
    msgContainer.classList.remove("hide");
    boxDisabled();

}
const checkWinner = ()=> {
    for(let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val != "" && pos2val !="" && pos3val !=""){
            if(pos1val===pos2val && pos2val===pos3val){
                showSWinner(pos1val);
                
            }
        }

    }
}
newGameBtn.addEventListener("click",newGame);
resetBtn.addEventListener("click",newGame);

