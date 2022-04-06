let number = 1, chessboard = "", size = 8
do {
  // If current position is even, put a sharp sign, when it isn't put a space
  chessboard += number % 2 === 0 ? "#" : " "

  // When reach the 8th position in a row, do a line jump
  chessboard += chessboard.length % size === 0 ? "\n" : ""
  
  // Increment position by one
  number++
} while (number <= (size * size))

console.log(chessboard)