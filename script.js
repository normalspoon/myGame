/*----- constants -----*/
const PLAYER = "PLAYER";
const TILE_IMAGES = "TILE_IMAGES";
const MAX_GUESSES = "MAX_GUESSES";
// const IMG_LIST = [
//     https://imgur.com/t/cat/YF3CZcZ,
//     https://imgur.com/t/cat/uOB6y3P,
//     https://imgur.com/t/cat/bCfyCpH,
//     https://imgur.com/t/cat/dkLt6kH,
//     https://imgur.com/t/cat/UbJPvdn,
//     https://imgur.com/t/cat/qIGSfwA,
//     https://imgur.com/t/cat/Tpl3kek,
//     https://imgur.com/t/cat/r8VcaJR
// ]
//const TILE_NUMBER = "TILE_NUMBER";

/*----- app's state (variables) -----*/
let playerChoice;
let tilePositions;
let guesses;
let tileProperties;

/*----- cached element references -----*/
const TILES = document.querySelectorAll(".tile");
const BUTTON = document.getElementById("actionButton");


/*----- event listeners -----*/
TILES.forEach((tile) => {
  tile.addEventListener("click", boardClickHandler);
});

// /*----- model functions -----*/


function populateBoard() {
  tilePositions = [];
  for (let i = 0; i < TILES.length; i++) {
    let propertiesObjects = {};
    properties.forEach(function (property) {
      propertiesObjects[property] = "";
    });
    propertiesObjects["id"] = (i +1);
    propertiesObjects["state"] = "0";
    // propertiesOBjects["img"] = Math.floor(Math.random()* IMG_LIST.length)
    tilePositions.push(propertiesObjects);
  }
  return tilePositions;
}
let properties = ["state", "img", "id"];
populateBoard()
console.log(tilePositions);




// tilePositions.forEach(function(tile, index){
    
// })
// /*----- controller functions -----*/

function boardClickHandler(evt) {
  evt.preventDefault();
  if (evt.target.tagName !== "DIV") {
    return;
  }
}
// }

// function buttonClickHandler(evt) {
//    console.log("button clicked")
// }

// *----- view functions -----*/
