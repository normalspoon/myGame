/*----- constants -----*/
const PLAYER = "PLAYER";
const TILE_IMAGES = "TILE_IMAGES";
const MAX_GUESSES = "MAX_GUESSES";
const IMG_LIST = [
  "https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_1280.jpg",
  "https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg",
  "https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/02/15/12/12/cat-2068462_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/08/07/16/36/cat-2605502_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_1280.jpg",
  "https://cdn.pixabay.com/photo/2019/11/08/11/56/kitten-4611189_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/09/21/17/05/european-shorthair-8267220_1280.jpg",
];
const TILE_NUMBER = "TILE_NUMBER";

/*----- app's state (variables) -----*/
let playerChoice;
let tilePositions;
let guesses;
let tileProperties;
let previousClickedTile = null;
let clickedTile = null;
/*----- cached element references -----*/
const TILES = document.querySelectorAll(".tile");
const BUTTON = document.getElementById("actionButton");
const guessesDisplay = document.getElementById("attempts");

// /*----- model functions -----*/

function populateBoard() {
  tilePositions = [];
  for (let i = 0; i < TILES.length; i++) {
    let propertiesObject = {
      id: TILES[i].id,
      state: "false",
      img: "",
    };
    // properties.forEach(function (property) {
    //   propertiesObject[property] = "";
    // });
    // propertiesObject["id"] = (i +1);
    // propertiesObject["state"] = "0";
    // propertiesOBjects["img"] = Math.floor(Math.random()* IMG_LIST.length)
    tilePositions.push(propertiesObject);
  }
}
// let properties = ["state", "img", "id"];
populateBoard();
console.log(tilePositions);

/*----- event listeners -----*/
TILES.forEach((tile) => {
  tile.addEventListener("click", boardClickHandler);
});

BUTTON.addEventListener("click", buttonClickHandler);

/*----- controller functions -----*/
let imgList16 = [];
function buttonClickHandler(evt) {
  imgList16 = [];
  for (const img of IMG_LIST) {
    imgList16.push(img);
    imgList16.push(img);
  }
  shuffle(imgList16);
  console.log(imgList16);
  for (i = 0; i < 16; i++) {
    tilePositions[i].img = imgList16.shift();
  }
  //reset Game
  function resetGame() {
    for (i = 0; i < 16; i++) {
      const TILES = document.querySelectorAll(".tile");
      tilePositions[i].state = false;
      TILES.forEach((TILE) => {
        TILE.style.backgroundImage = "";
      });
    }
  }
  resetGame();
}

function shuffle(array) {
  let currentIndex = array.length;
  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * imgList16.length);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}

buttonClickHandler();

guesses = 0;
function boardClickHandler(evt) {
  evt.preventDefault();
  if (evt.target.tagName !== "DIV") {
    return;
  }

  if (clickedTile && previousClickedTile) {
    return;
  }

  function addGuessNumber() {
    guesses += 0.5;
    return guesses;
  }
  guesses = addGuessNumber();
  const guessesInt = Math.trunc(guesses);
  guessesDisplay.innerText = `GUESSES: ${guessesInt}`;

  const clickedTileID = evt.target.id;
  clickedTile = tilePositions.find((tile) => tile.id === clickedTileID);
  console.log(clickedTile);

  clickedTile.state = "true";

  console.log(
    "after click TILE ID " + clickedTileID + " state changed to",
    clickedTile.state
  );

  // if (clickedTile.img !== "") {
  //   return;
  // } else {
  //   clickedTile.img = imgList16.shift();
  // }

  // console.log(
  //   "after click Tile Img " + clickedTileID + "inserted " + clickedTile.img
  // );
  console.log(tilePositions);
  console.log(tilePositions[clickedTileID - 1]);
  console.log(clickedTile.state);

  // *----- view functions -----*/

  // Get the corresponding div element by ID
  const TILE_EL = document.getElementById(clickedTile.id);
  // console.log(TILE_EL)
  if (clickedTile.img !== "") {
    // Set the background image of the div to the image URL
    TILE_EL.style.backgroundImage = `url(${clickedTile.img})`;
  }

  if (previousClickedTile !== null) {
    //2nd stage
    const PREV_TILE_EL = document.getElementById(previousClickedTile.id);
    if (clickedTile.img === previousClickedTile.img) {
      //2nd stage both matching
      previousClickedTile.state = true;
      clickedTile.state = true;
      previousClickedTile = null;
      clickedTile = null;
    } else {
      //2nd stage not matching
      setTimeout(() => {
        previousClickedTile.state = false;
        clickedTile.state = false;
        previousClickedTile = null;
        clickedTile = null;
        TILE_EL.style.backgroundImage = "";
        PREV_TILE_EL.style.backgroundImage = "";
      }, 1000);
    }
  } else {
    //first stage
    previousClickedTile = clickedTile;
    clickedTile = null;
  }
}
