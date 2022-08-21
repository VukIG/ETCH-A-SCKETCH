const board=document.querySelector(".wholething");
const btn=document.querySelector(".test");
const buttons=document.querySelectorAll("button");
const binput=document.querySelector(".buttons");
const cinput=document.querySelector(".b");
const submitcolor=document.querySelector(".submit");
const smth=board.getBoundingClientRect();

let color;
let size;

submitcolor.addEventListener("click",function () {
    color=cinput.value;
    console.log(color);
});

function draw(num) {
    size=Math.floor(smth.width/num);
    console.log(size)
    board.style.gridTemplateColumns=`repeat(${num},1fr)`;
    board.style.gridTemplateRows=`repeat(${num},1fr)`;
    for (let i = 0; i < Math.pow(num,2); i++) {
        let block = document.createElement("div");
        block.classList.add("jovan");
        block.style=`width:${size}px`;
        //KOJIKURACJEBOTEZASTO
        block.style.height=block.style.width;
        console.log(block.style.height)
        board.insertAdjacentElement("beforeend",block) 
    }
    let blocks=document.querySelectorAll('.jovan');
    blocks.forEach(block => {
        block.addEventListener("mouseover",function () {
        block.style=`background-color: ${color}`
        });
    });
}



buttons.forEach(button => {
    button.addEventListener("click",function () {
        let i=button.innerHTML;
        binput.style="display:none";
        draw(i); 
    });
});

