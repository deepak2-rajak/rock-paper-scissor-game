let userScore=0;
let compScore=0;
let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let userpara=document.querySelector("#userscore");
let comppara=document.querySelector("#compscore");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        //console.log("btn was click");
        const userChoice=choice.getAttribute("id");
       // console.log(userChoice);
       playgame(userChoice);
    });
});
const genCompchoice=()=>{
    const option=["rock","paper","scissor"];
    const randidx=Math.floor(Math.random()*3);
    return option[randidx];
};
const drawgame=()=>{
    console.log("game was draw");
    msg.innerText="game was draw play  again";
    msg.style.backgroundColor="grey";
}
const showinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userpara.innerText=userScore;
        msg.style.backgroundColor="green"; 
    msg.innerText=`you are win ${userChoice} beats ${compChoice}`;
        //console.log("you ar win");
    }else{
        compScore++;
        comppara.innerText=compScore;
        msg.style.backgroundColor="red";
        msg.innerText=`you are lose ${compChoice} beats ${userChoice} `;
        
    }
}

const playgame=(userChoice)=>{
    const compChoice=genCompchoice();
    if(userChoice===compChoice){
drawgame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
          userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissor"?false:true;
        }else{
            userWin=compChoice==="rock"?false:true;
        }
        showinner(userWin,userChoice,compChoice);
    }
   };
