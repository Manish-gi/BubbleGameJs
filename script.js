console.log('Ok Sab sahi chal rha hai mtlb');

var score=0;
var hit=0; 

function makeBubble(){
    var clutter = " ";

for (var i = 1; i <=143; i++) {
        var rn =Math.floor(Math.random()*10);     
        clutter += `<div class="bubble">${rn}</div> `;
    }
    document.querySelector(".bubbleGroup").innerHTML = clutter;
}



var hits = document.getElementById("hitVals");

function hitNumb(){
    hit = Math.floor(Math.random()*10);
    hits.innerHTML =hit ;
}

function increaseScore(){
    score+=10;
    document.querySelector("#scoreVal").textContent=score;
 
}
 

const element = document.getElementById("timmer");
var timer=60;
function runtime(){
    var timerint = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }else{
            clearInterval(timerint);
            document.querySelector(".bubbleGroup").innerHTML = "";

        }
    },1000);
}
// setInterval(function() {
// if(time>=0){
// element.innerHTML=time--
// }
// }, 1000);

document.querySelector(".whiteBox").addEventListener("click", (value)=>{
    var clickNum = Number(value.target.textContent);
    console.log(clickNum);
    if(clickNum === hit){
        increaseScore();
        hitNumb();
        makeBubble();
    }
    
});


hitNumb();
makeBubble();
runtime();