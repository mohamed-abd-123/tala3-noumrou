"use strict"

// console.log(document.getElementById("bt"))
// console.log(document.querySelector(".btn-again"))
// console.log(document.querySelector(".btn-again").textContent)
// console.log(document.querySelector("input").value)


////// initial values ::


// let secretNumber = Math.trunc((Math.random()*20)+1) //// between 1 and 20 ...


// let score = 20 ;

// let highScore = 0 ;

// // document.querySelector(".logo").textContent = secretNumber


// const dispalyMessage=function(message){
//   document.querySelector(".start-title").textContent=message
// }


// // start guessing
// document.querySelector(".btn-check").addEventListener("click",function(){

// // let secretNumber = Math.trunc((Math.random()*20)+1) //// between 1 and 20 ...

// // let score = 20 ;

// // let highScore = 0 ;

// // document.querySelector(".logo").textContent = secretNumber

// var Nomber= Number(document.querySelector("input").value)
// if(!Nomber){
//   dispalyMessage("⛔not a number")

// }else if(Nomber==secretNumber){
//   dispalyMessage("🎉win")
//   document.querySelector("body").style.backgroundColor = "greenyellow";
//   score++
//   document.querySelector(".score").textContent= score
//   document.querySelector(".logo").textContent = secretNumber
//   secretNumber = Math.trunc((Math.random()*20)+1)
//   document.querySelector("input").value=""
//   if(score>highScore){
//     highScore=score
//     document.querySelector(".highscore").textContent=score
//   }

 
// } else if(score>0){
//   if(Nomber>secretNumber){
//   document.querySelector(".logo").textContent = "?";
//   document.querySelector("body").style.backgroundColor = "rgb(48, 46, 46)"; 
//   dispalyMessage("is Higher")
//   score--
//   document.querySelector(".score").textContent= score
//   document.querySelector("input").value=""
//   }else if(Nomber<secretNumber){
//   document.querySelector(".logo").textContent = "?";
//   document.querySelector("body").style.backgroundColor = "rgb(48, 46, 46)";
//   dispalyMessage("is lower")
//   score--
//   document.querySelector(".score").textContent= score
//   document.querySelector("input").value=""
//   }
//  }
//  else{
//   dispalyMessage("you loose the game 🔥")
// }
// })

// document.querySelector(".btn-again").addEventListener("click",function(){
//   score=20
//   document.querySelector(".score").textContent= score
//   highScore=0
//   document.querySelector(".highscore").textContent=highScore
//   dispalyMessage("Start Guessing ...")
//   document.querySelector(".logo").textContent = "?";
//   document.querySelector("body").style.backgroundColor = "rgb(48, 46, 46)";
//   document.querySelector("input").value=""
// })





                     // méthode 2
 let secretNumber=Math.trunc((Math.random()*20)+1)   ///////between 1 et 20
 let score=20
 let highScore=0
  // document.querySelector(".logo").textContent=secretNumber
 const dispalyMessage=function(message){
 document.querySelector(".start-title").textContent=message
 }
 document.querySelector(".btn-check").addEventListener("click",function(){
  
  var Nomber=Number(document.querySelector("input").value)
  if(!Nomber){
    dispalyMessage(" ⛔ Not a number")
  }else if(Nomber==secretNumber){
    dispalyMessage("🎉 win")
  score++
   document.querySelector(".score").textContent=score
   document.querySelector("body").style.backgroundColor="greenyellow";
   document.querySelector(".logo").textContent=secretNumber
   document.querySelector("input").value=""
   secretNumber=Math.trunc((Math.random()*20)+1)
   if(score>highScore){
    highScore=score
    document.querySelector(".highscore").textContent=highScore
   }

  }else if(score>0){

    if(Nomber>secretNumber){
    dispalyMessage(" to higher")
    score --
   document.querySelector(".score").textContent=score 
   document.querySelector("body").style.backgroundColor="rgb(48, 46, 46)";
   document.querySelector(".logo").textContent="?"
   document.querySelector("input").value=""
  }else if(Nomber<secretNumber){
    dispalyMessage(" to low ")
    score --
   document.querySelector(".score").textContent=score 
   document.querySelector("body").style.backgroundColor="rgb(48, 46, 46)";
   document.querySelector(".logo").textContent="?"
   document.querySelector("input").value=""
  }
  }
else{
  dispalyMessage("you loose the game 🔥")
  document.querySelector("input").value=""
}
 })

 document.querySelector(".btn-again").addEventListener("click",function(){
  score=20
  document.querySelector(".score").textContent=score 
  highScore=0
  document.querySelector(".highscore").textContent=highScore
  dispalyMessage("Start Guessing ...")
  document.querySelector("body").style.backgroundColor="rgb(48, 46, 46)";
  document.querySelector("input").value=""
  document.querySelector(".logo").textContent="?"
 })