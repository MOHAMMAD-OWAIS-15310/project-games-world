let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#abc");
let newbtn=document.querySelector("#hi");
let topheading=document.querySelector(".toph1");
let hideit=document.querySelector(".top");


let turn0=true;
const winpatters=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6],

];


boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box is clixked");
        if(turn0){
            box.innerText="X";
            box.classList.add("x");
            turn0=false;
        }
        else{
            box.innerText="O"
            box.classList.remove("x");
            box.classList.add("o");
            turn0=true; 
        }
        box.disabled=true;
        checkwinner();
    })
})

const resetgame=()=>{
    turn0=true;
    enableboxes();
    hideit.classList.add("hide");
}
const enableboxes =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const disableboxes =()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showwinner=(winner)=>{
    topheading.innerText=`winner is ${winner}`;
    hideit.classList.remove("hide");
    disableboxes();
}

const checkwinner=()=>{
    for(let pattern of winpatters){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val !="" && pos3val !=""){
            if(pos1val == pos2val && pos2val==pos3val){
                console.log("winner");
                let ele=document.createElement("div");
                showwinner(pos1val);
                
            }
        }
    }
}

resetbtn.addEventListener("click",resetgame);
newbtn.addEventListener("click",resetgame);
