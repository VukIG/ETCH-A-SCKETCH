const board=document.querySelector(".wholething");
const btn=document.querySelector(".test");
const buttons=document.querySelectorAll("button");


buttons.forEach(button => {
    button.addEventListener("click",function () {
        let i=button.innerHTML;
        draw(i);
    })
});

function draw(num) {
    board.style.gridTemplateColumns=`repeat(${num},1fr)`;
    board.style.gridTemplateRows=`repeat(${num},1fr)`;
    for (let i = 0; i < Math.pow(num,2); i++) {
        let block = document.createElement("div");
        block.classList.add("jovan");
        block.style="background-color:blue";
        board.insertAdjacentElement("beforeend",block) 
    }
}