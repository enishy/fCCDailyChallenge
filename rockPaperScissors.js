function rockPaperScissors(player1, player2) {
    if (player1 === player2) return "Tie";
    if (player1 === "Rock" && player2 === "Scissors") return "Player 1 wins";
    if (player1 === "Paper" && player2 === "Rock") return "Player 1 wins";
    if (player1 === "Scissors" && player2 === "Paper") return "Player 1 wins";
    return "Player 2 wins";
}

rockPaperScissors("Rock", "Rock")
rockPaperScissors("Rock", "Paper")
rockPaperScissors("Scissors", "Paper")
rockPaperScissors("Rock", "Scissors")
rockPaperScissors("Scissors", "Scissors")
rockPaperScissors("Scissors", "Rock")
