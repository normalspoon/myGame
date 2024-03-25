/*----- constants -----*/
const PLAYER = "PLAYER";
const TILE_IMAGES = "TILE_IMAGES";
const MAX_GUESSES = "MAX_GUESSES";
//const TILE_NUMBER = "TILE_NUMBER";

/*----- app's state (variables) -----*/
let playerChoice;
let tilePositions;
let tileState; //where 0 is face down. 1 is face up.
let guesses;
let flippedTiles;

/*----- cached element references -----*/
const TILES = document.querySelectorAll("#tile");
const BUTTON = document.getElementById("actionButton");

/*----- event listeners -----*/
TILES.forEach((tile) => {
  tile.addEventListener("click", boardClickHandler);
});

// BUTTON_EL.addEventListener('click',buttonClickHandler)

// /*----- model functions -----*/
function initBoard() {
  tilePositions = [];
  for (let i = 0; i < 16; i++) {
    tilePositions.push("");
  }
  tileState = 0;
  guesses = 0;
  flippedTiles = 0;

  render()
}

// /*----- controller functions -----*/

function boardClickHandler(evt) {
  evt.preventDefault();
  if (evt.target.tagName !== "DIV") {
    return;
  }
  console.log("I am flipped");
}

// }

// function buttonClickHandler(evt) {
//    console.log("button clicked")
// }

// *----- view functions -----*/


