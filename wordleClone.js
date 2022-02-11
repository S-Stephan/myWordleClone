// IMPROVEMENTS TO BE MADE: 
// 1. Use an array of words or a word API and use Math.random to choose a random answer
// 2. Check to see if the guess is a valid word, alert and clear if not
// 3. Check if the guessed letter appears again or not (ex. if guess is books and answer is bolts, the second "o" in the guess should be gray, not blue as it would be with the current code)
// 4. Show a guessed letter keyboard so player can keep track more easily

const height = 6; //number of guesses
const width = 5; //letters per word

let row = 0; //current attempt number
let col = 0; //current letter for that attempt

let gameOver = false;
let word = "SQUID"; // could create an array of letters and use Math.random to choose or could use a word API here

window.onload = function() {
  initialize();
}

function initialize() {
  // create the game board
  for (r = 0; r < height; r++) {
    for (c = 0; c < width; c++) {
      //this creates <span id="0-0(etc.)" class="tile">P</span> for as many as the numbers set by width and height variables (in this case, a 6x5 grid)
      let tile = document.createElement("span");
      tile.id = r.toString() + "-" + c.toString();
      tile.classList.add("tile");
      tile.innerText = "";
      //this adds the actual tile variable as defined above to the board id in our html file
      document.getElementById("board").appendChild(tile);
    }
  }
  // listen for key press
  document.addEventListener("keyup", (e) => {
    if (gameOver) return;

    //alert(e.code); tells you what key was pressed
    if ("KeyA" <= e.code && e.code <= "KeyZ") {
      if (col < width) {
        let currTile = document.getElementById(row.toString() + "-" + col.toString());
        if (currTile.innerText === "") {
          currTile.innerText = e.code[3];
          col += 1;
        }
      }
    }
    else if (e.code === "Backspace") {
      if (0 < col <= width) {
        col -= 1;
      }
      let currTile = document.getElementById(row.toString() + "-" + col.toString());
      currTile.innerText = "";
    }
    else if (e.code === "Enter") {
      update();
      row += 1; // start new row
      col = 0; // start at col 0 for new row
    }
    // if you've used all of your attempts, set gameOver to true and reveal the answer
    if (!gameOver && row == height) {
      gameOver = true;
      document.getElementById("answer").innerText = word;
    }
  })
}

// tells it what to do when you enter a guess
function update() {
  let correct = 0;
  for (let c = 0; c < width; c++) {
    let currTile = document.getElementById(row.toString() + "-" + c.toString());
    let letter = currTile.innerText
    
    //is it in the correct position?
    if (word[c] == letter) {
      currTile.classList.add("correct");
      correct += 1;
    } // if not, is it in the word at all?
    else if (word.includes(letter)) {
      currTile.classList.add("present");
    } // if not in the word
    else {
      currTile.classList.add("absent");
    }
  }
  // if you guess all 5 letters, game over
  if (correct == width) {
    gameOver = true;
  }
}



