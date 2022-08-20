const board=document.querySelector(".wholething");
const btn=document.querySelector(".test");


function draw(num) {
    for (let i = 0; i < Math.pow(num,2); i++) {
        let block = document.createElement("div");
        block.style="background-color:blue";
        board.insertAdjacentElement("beforeend",block) 
    }
}

btn.addEventListener("click",function () {
    board.style.gridTemplateColumns="repeat(16,1fr)";
    board.style.gridTemplateRows="repeat(16,1fr)";
    draw(16);
})
