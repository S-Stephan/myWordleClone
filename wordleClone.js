
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
  document.addEventListener("keyup")
}

