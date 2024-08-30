var rand1=Math.floor(Math.random()*6)+1;
var rand2=Math.floor(Math.random()*6)+1;



if(rand1===1){
    document.querySelector(".dice1 .five").classList.add("visi");
}
else if(rand1===2){
    document.querySelector(".dice1 .three").classList.add("visi");
    document.querySelector(".dice1 .seven").classList.add("visi");
}
else if(rand1===3){
    document.querySelector(".dice1 .three").classList.add("visi");
    document.querySelector(".dice1 .five").classList.add("visi");
    document.querySelector(".dice1 .seven").classList.add("visi");
}
else if(rand1===4){
    document.querySelector(".dice1 .one").classList.add("visi");
    document.querySelector(".dice1 .three").classList.add("visi");
    document.querySelector(".dice1 .seven").classList.add("visi");
    document.querySelector(".dice1 .nine").classList.add("visi");
}
else if(rand1===5){
    document.querySelector(".dice1 .one").classList.add("visi");
    document.querySelector(".dice1 .three").classList.add("visi");
    document.querySelector(".dice1 .five").classList.add("visi");
    document.querySelector(".dice1 .seven").classList.add("visi");
    document.querySelector(".dice1 .nine").classList.add("visi");
}
else if(rand1===6){
    document.querySelector(".dice1 .one").classList.add("visi");
    document.querySelector(".dice1 .four").classList.add("visi");
    document.querySelector(".dice1 .seven").classList.add("visi");
    document.querySelector(".dice1 .three").classList.add("visi");
    document.querySelector(".dice1 .six").classList.add("visi");
    document.querySelector(".dice1 .nine").classList.add("visi");
}

if(rand2===1){
    document.querySelector(".dice2 .five").classList.add("visi");
}
else if(rand2===2){
    document.querySelector(".dice2 .three").classList.add("visi");
    document.querySelector(".dice2 .seven").classList.add("visi");
}
else if(rand2===3){
    document.querySelector(".dice2 .three").classList.add("visi");
    document.querySelector(".dice2 .five").classList.add("visi");
    document.querySelector(".dice2 .seven").classList.add("visi");
}
else if(rand2===4){
    document.querySelector(".dice2 .one").classList.add("visi");
    document.querySelector(".dice2 .three").classList.add("visi");
    document.querySelector(".dice2 .seven").classList.add("visi");
    document.querySelector(".dice2 .nine").classList.add("visi");
}
else if(rand2===5){
    document.querySelector(".dice2 .one").classList.add("visi");
    document.querySelector(".dice2 .three").classList.add("visi");
    document.querySelector(".dice2 .five").classList.add("visi");
    document.querySelector(".dice2 .seven").classList.add("visi");
    document.querySelector(".dice2 .nine").classList.add("visi");
}
else if(rand2===6){
    document.querySelector(".dice2 .one").classList.add("visi");
    document.querySelector(".dice2 .four").classList.add("visi");
    document.querySelector(".dice2 .seven").classList.add("visi");
    document.querySelector(".dice2 .three").classList.add("visi");
    document.querySelector(".dice2 .six").classList.add("visi");
    document.querySelector(".dice2 .nine").classList.add("visi");
}


if(rand1>rand2){
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
}
else if(rand1<rand2){
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML="🚩DRAW🚩";
}