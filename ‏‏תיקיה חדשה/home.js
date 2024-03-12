document.querySelector("#stage1").addEventListener("click",stage_1);
document.querySelector("#stage2").addEventListener("click",stage_2);
let stage=0;

function stage_1(){
    stage=1;
    localStorage.setItem('stage',1);
}
function stage_2(){
   stage=2;
   localStorage.setItem('stage',2);
}
