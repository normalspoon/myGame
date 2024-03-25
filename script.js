/*----- constants -----*/
const PLAYER = "PLAYER";
const TILE_IMAGES = "TILE_IMAGES";
const MAX_GUESSES = "MAX_GUESSES";
//const TILE_NUMBER = "TILE_NUMBER";

/*----- app's state (variables) -----*/
let playerChoice;
let tilePosition;
let tileState; //where 0 is face down. 1 is face up.
let guesses;
let flippedTiles;

/*----- cached element references -----*/
const BOARD_EL = document.querySelectorAll("#tile");
const BUTTON_EL = document.getElementById('actionButton')

/*----- event listeners -----*/
BOARD_EL.addEventListener('click', boardClickHandler);
BUTTON_EL.addEventListener('click', buttonClickHandler);


/*----- functions -----*/


/*----- model functions -----*/

/*----- controller functions -----*/


/*----- view functions -----*/
