"use strict"

// console.log(document.getElementById("bt"))
// console.log(document.querySelector(".btn-again"))
// console.log(document.querySelector(".btn-again").textContent)
// console.log(document.querySelector("input").value)


////// initial values ::


// let secretNumber = Math.trunc((Math.random()*20)+1) //// between 1 and 20 ...


// let score = 20 ;

// let highScore = 0 ;

// document.querySelector(".logo").textContent = secretNumber




// start guessing
document.querySelector(".btn-check").addEventListener("click",function(){

let secretNumber = Math.trunc((Math.random()*20)+1) //// between 1 and 20 ...

let score = 20 ;

let highScore = 0 ;

document.querySelector(".logo").textContent = secretNumber

var Nomber= (document.querySelector("input").value)
if(!Nomber){
  document.querySelector(".start-title").textContent="⛔not a number"
}else if(Nomber>secretNumber){
  document.querySelector(".start-title").textContent="is Higher"
}else if(Nomber<secretNumber){
  document.querySelector(".start-title").textContent="is lower"
}else{
  document.querySelector(".start-title").textContent="🎉win"
}
 
// score
if(!Nomber){
  document.querySelector(".score").textContent= 20
}else if(Nomber>secretNumber){
  document.querySelector(".score").textContent= 20 - 1
}else if(Nomber<secretNumber){
  document.querySelector(".score").textContent= 20 - 1
}else{
  document.querySelector(".score").textContent= 20 + 1
}

})

