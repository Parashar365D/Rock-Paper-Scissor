const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscore = document.querySelector("#user-score");
const botscore = document.querySelector("#bot-score");

userScore = 0;
botScore = 0;

const getbotchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again";
    msg.style.backgroundColor = "#ADCAD6";
}

const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        userscore.innerText = userScore;
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "green";
    }else {
        botScore++;
        botscore.innerText = botScore;
        msg.innerText = "You Lose.";
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userchoice) => {
    const bothoice = getbotchoice();
    if(userchoice===bothoice){
        drawGame();
    }else {
        let userWin = true;
        if(userchoice==="rock"){
            userWin = bothoice === "paper" ? false : true;
        }else if (userchoice==="paper") {
            userWin = bothoice === "scissors" ? false : true;
        }else{
            userWin = bothoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});