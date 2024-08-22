 //Constants
 const options=["Rock","Paper","Scissors"];
 var userScore =0;
 var computerScore =0;
 const userScoreBoard = document.querySelector("#userScore");
 const computerScoreBoard = document.querySelector("#computerScore");
 const resultBoard = document.querySelector("#result");
 updateScore();

 //Event Listners
 const rockBtn = document.querySelector("#rockBtn");
 rockBtn.addEventListener("click",()=>handleClick(options[0]));

 const paperBtn = document.querySelector("#paperBtn");
 paperBtn.addEventListener("click",()=>handleClick(options[1]));

 const scissorsBtn = document.querySelector("#scissorsBtn");
 scissorsBtn.addEventListener("click",()=>handleClick(options[2]));

 const resetBtn = document.querySelector("#resetBtn");
 resetBtn.addEventListener("click",resetGame);

 //Handlers
 function handleClick(userChoice)
 {
     console.log("You Chose ="+userChoice);
     const computerChoice = Math.floor(Math.random() * 3);
     console.log("Computer Chose = "+options[computerChoice]);
     compute(userChoice, options[computerChoice]);
 }

 //Function
 function compute(userChoice, computerChoice)
 {
     let result = 0;
     if ( userChoice === computerChoice )
     {
         console.log("Same Choice");
     }
     else if ( userChoice === "Rock" )
     {
         console.log("Rock & "+computerChoice);
         if ( computerChoice == "Scissors" )
         {
             userScore+=1;
             result=1;
         }
         else if (computerChoice =="Paper")
         {
             computerScore+=1;
             result=-1;
         }
     }
     else if ( userChoice === "Paper" )
     {
         console.log("Paper & "+computerChoice);
         if ( computerChoice == "Rock" )
         {
             userScore+=1;
             result=1;
         }
         else if (computerChoice =="Scissors")
         {
             computerScore+=1;
             result=-1;
         }
     }
     else if ( userChoice === "Scissors" )
     {
         console.log("Scissors & "+computerChoice);
         if ( computerChoice == "Paper" )
         {
             userScore+=1;
             result=1;
         }
         else if (computerChoice =="Rock")
         {
             computerScore+=1;
             result=-1;
         }
     }
     updateScore();
     updateResult(result, computerChoice);
 }

 function updateScore()
 {
     userScoreBoard.innerHTML=userScore;
     computerScoreBoard.innerHTML=computerScore;
 }

 function updateResult(result, computerChoice)
 {
     switch(result)
     {
         case 0: resultBoard.innerHTML="Computer chose ``"+computerChoice+"``<br/><span style='color:orange'> It was a tie</span>";break;
         case 1: resultBoard.innerHTML="Computer chose ``"+computerChoice+"``</br><span style='color:green'> You Won !</span>"; break;
         case -1: resultBoard.innerHTML="Computer chose ``"+computerChoice+"``</br><span style='color:red'> You Lost !</span>"; break;
         defualt: resultBoard.innerHTML="Something went wrong";
     }
 }

 function resetGame(){
     userScore=0;
     computerScore=0;
     updateScore();
     resultBoard.innerHTML="";
 }
