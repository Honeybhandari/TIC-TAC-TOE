let btn=document.querySelectorAll(".btn");
let reset=document.querySelector(".reset");
let winner=document.querySelector(".winner");
let turnO= true;
let count=0;
const winPattern=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
btn.forEach((val)=>{
    val.addEventListener("click",()=>{
        if(val.innerText===""){
        if(turnO==true){
            val.classList.add("btn1");
            val.classList.remove("btn");
            val.innerText="O";
            turnO=false;
        }else{
            val.classList.add("btn");
            val.classList.remove("btn1");
            val.innerText="X"
            turnO=true;
        }}
        count++;
        checkWinner();
        if(count==9){
            winner.innerText="Match Tie";
        }
    })
})
const resetGame=()=>{
    turnO=true;
    for(let box of btn){
        box.innerText="";
        box.disabled=false;
    }
    count=0;
    winner.innerText="";
}
const checkWinner=()=>{
    for(let btns of winPattern){
        let pos1=btn[btns[0]].innerText;
        let pos2=btn[btns[1]].innerText;
        let pos3=btn[btns[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1=="X" && pos1==pos2 && pos2==pos3){
                winner.innerText="Congratulations! Player X won!"
                count=0;
                for( let box of btn){
                    box.disabled=true;
                }
            }else if(pos1=="O" && pos1==pos2 && pos2==pos3){
                winner.innerText="Congratulations! Player O won!" 
                count=0;
                for( let box of btn){
                    box.disabled=true;
                }
            }
        }
    }
}
 reset.addEventListener("click",resetGame);