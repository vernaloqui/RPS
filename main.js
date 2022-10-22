let roundTracker = 0;
let player;


function startGame() {
    player = document.getElementById("playerName").value;
    document.getElementById("outputName").innerText = player;
    
    
    if ( player.length > 0) {
        document.getElementById("roundNum").innerText = "Round 1";
        document.getElementById("logIn").style.display ="none";
        document.getElementById("game").style.display ="block";
    }
    else{
        alert("Please make sure you've entered a name and chosen how many rounds you'd like to play.");
    }
}



const compareChoice = function(n) {
    roundTracker ++;
    player = document.getElementById("playerName").value;
    let playerChoice = n;
    let botArray = ["rock", "paper", "scissors"];
    let botChoice = botArray[Math.floor(Math.random() *3)];
    let botScore = Number(document.getElementById("scoreboardBot").innerText);
    let playerScore = Number(document.getElementById("scoreboardP1").innerText);
    document.getElementById("roundNum").innerText = "Round " + roundTracker;
    addTableData(playerChoice, botChoice);
    
    
    if (botScore < 5 && playerScore < 5) {
    // if (roundTracker < 10){
        if (botChoice === playerChoice){
            document.getElementById("winner").innerText = "It's a tie!";
            switch (botChoice){
                case "rock":
                    document.getElementById("PlayerChoice").innerHTML = "&#9994";
                    document.getElementById("BotChoice").innerHTML = "&#9994";
                    break;
                case "paper":
                    document.getElementById("PlayerChoice").innerHTML = "&#9995";
                    document.getElementById("BotChoice").innerHTML = "&#9995";
                    break;
                case "scissors":
                    document.getElementById("PlayerChoice").innerHTML = "&#9996";
                    document.getElementById("BotChoice").innerHTML = "&#9996";
                    break;
            }
            botScore = botScore;
            playerScore = playerScore;
            document.getElementById("scoreboardP1").innerHTML = playerScore;
            document.getElementById("scoreboardBot").innerHTML = botScore;
        }
        else if (botChoice === "rock" && playerChoice === "paper"){
            document.getElementById("winner").innerText = "Yey! You earned this round!";
            document.getElementById("BotChoice").innerHTML = "&#9994";
            document.getElementById("PlayerChoice").innerHTML = "&#9995";
            playerScore = playerScore + 1;
            document.getElementById("scoreboardP1").innerHTML = playerScore;
            document.getElementById("scoreboardBot").innerHTML = botScore;
        }
        else if (botChoice === "rock" && playerChoice === "scissors"){
            document.getElementById("winner").innerText = "Uh-oh! You've got beaten this round!";
            document.getElementById("PlayerChoice").innerHTML = "&#9996";
            document.getElementById("BotChoice").innerHTML = "&#9994";
            botScore = botScore  + 1;
            document.getElementById("scoreboardP1").innerHTML = playerScore;
            document.getElementById("scoreboardBot").innerHTML = botScore;
        }
        else if (botChoice === "paper" && playerChoice === "scissors"){
            document.getElementById("winner").innerText = "Yey! You earned this round!";
            document.getElementById("PlayerChoice").innerHTML = "&#9996";
            document.getElementById("BotChoice").innerHTML = "&#9995";
            playerScore = playerScore + 1;
            document.getElementById("scoreboardP1").innerHTML = playerScore;
            document.getElementById("scoreboardBot").innerHTML = botScore;
        }
        else if (botChoice === "paper" && playerChoice === "rock"){
            document.getElementById("winner").innerText = "Uh-oh! You've got beaten this round!";
            document.getElementById("PlayerChoice").innerHTML = "&#9994";
            document.getElementById("BotChoice").innerHTML = "&#9995";
            botScore = botScore + 1;
            document.getElementById("scoreboardP1").innerHTML = playerScore;
            document.getElementById("scoreboardBot").innerHTML = botScore;
        }
        else if (botChoice === "scissors" && playerChoice === "paper"){
            document.getElementById("winner").innerText = "Uh-oh! You've got beaten this round!";
            document.getElementById("PlayerChoice").innerHTML = "&#9995";
            document.getElementById("BotChoice").innerHTML = "&#9996";
            botScore = botScore + 1;
            document.getElementById("scoreboardP1").innerHTML = playerScore;
            document.getElementById("scoreboardBot").innerHTML = botScore;
        }
        else if (botChoice === "scissors" && playerChoice === "rock"){
            document.getElementById("winner").innerText = "Yey! You earned this round!";
            document.getElementById("PlayerChoice").innerHTML = "&#9994";
            document.getElementById("BotChoice").innerHTML = "&#9996";
            playerScore = playerScore + 1;
            document.getElementById("scoreboardP1").innerHTML = playerScore;
            document.getElementById("scoreboardBot").innerHTML = botScore;
        }
    }
    else {
        document.getElementById("choices").style.display ="none";
        document.getElementById("matchHistory").style.display ="block";
        document.getElementById("winner").style.display = "none";
        if (botScore > playerScore){
            document.getElementById("roundNum").innerText = "You lost";
        }
        else {
            document.getElementById("roundNum").innerText = "Congrats " + player +", you won!";
        }
    }
    
}

const resetGame = function(){
    roundTracker = 1;
    location.reload()
}

const viewMatchHistory = function(){
    player = document.getElementById("playerName").value;
    document.getElementById("winner").style.display = "none";
    document.getElementById("arena").style.display = "none";
    document.getElementById("matchHistory").style.display ="none";
    document.getElementById("matchSummary").style.display ="block";
    let botScore = Number(document.getElementById("scoreboardBot").innerText);
    let playerScore = Number(document.getElementById("scoreboardP1").innerText);
    if (botScore > playerScore){
        document.getElementById("roundNum").innerText = "You lost";
    }
    else if(botScore == playerScore){
        document.getElementById("roundNum").innerText = "It's a draw. You can try again, " + player +".";
    }
    else {
        document.getElementById("roundNum").innerText = "Congrats " + player +", you won!";
    }
}

const addTableData = function(a, b){
    let table = document.getElementById("Summary");
    let row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = roundTracker;
    cell2.innerHTML = a;
    cell3.innerHTML = b;
    
    if (a === "rock"){
        if (a == b){
            cell4.innerHTML = "Draw";
        }
        else if (b =="paper"){
            cell4.innerHTML = "Lost";
        }
        else if (b =="scissors"){
            cell4.innerHTML = "Won";
        }
    }
    else if (a === "paper"){
        if (a == b){
            cell4.innerHTML = "Draw";
        }
        else if (b =="rock"){
            cell4.innerHTML = "Won";
        }
        else if (b =="scissors"){
                cell4.innerHTML = "Lost";
        }
    }
    else if (a === "scissors"){
        if (a == b){
            cell4.innerHTML = "Draw";
        }
        else if (b =="paper"){
            cell4.innerHTML = "Won";
        }
        else if (b =="rock"){
            cell4.innerHTML = "Lost";
        }
    }
}

    