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

let gTilePositions;
let gGuesses;
let gTileProperties;
let gPreviousClickedTile = null;
let gClickedTile = null;
let gTimer;

const TILES = document.querySelectorAll(".tile");
const BUTTON = document.getElementById("actionButton");
const guessesDisplay = document.getElementById("attempts");
const countDownDisplay = document.getElementById("timer");
const MODAL_BUTTON = document.querySelector(".btn");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

function modalButtonStart() {
  buttonClickHandler();
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

function openYouWinModal() {
  modal.classList.remove("hidden");
  overlay.classList.add("hidden");
  const gameOverHeading = document.querySelector("h3");
  const gameOverText = document.querySelector("p");
  gameOverHeading.innerText = "CONGRATS You Won!";
  gameOverText.innerText = "Click START to play again!";
}

function openGameOverModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  const gameOverHeading = document.querySelector("h3");
  const gameOverText = document.querySelector("p");
  gameOverHeading.innerText = "You Lost!";
  gameOverText.innerText = "Click START to try again!";
}

function populateBoard() {
  gTilePositions = [];
  for (let i = 0; i < TILES.length; i++) {
    let propertiesObject = {
      id: TILES[i].id,
      state: "false",
      img: "",
    };

    gTilePositions.push(propertiesObject);
  }
}

populateBoard();

TILES.forEach((tile) => {
  tile.addEventListener("click", boardClickHandler);
});

BUTTON.addEventListener("click", buttonClickHandler);
MODAL_BUTTON.addEventListener("click", modalButtonStart);

function resetGame() {
  for (i = 0; i < 16; i++) {
    gGuesses = 0;
    const TILES = document.querySelectorAll(".tile");
    guessesDisplay.innerText = `GUESSES: ${gGuesses}`;
    gTilePositions[i].state = false;
    TILES.forEach((TILE) => {
      TILE.style.backgroundImage = "";
    });
    clearInterval(gTimer);
  }
}

let imgList16 = [];
function buttonClickHandler(evt) {
  imgList16 = [];
  for (const img of IMG_LIST) {
    imgList16.push(img);
    imgList16.push(img);
  }
  shuffle(imgList16);
  for (i = 0; i < 16; i++) {
    gTilePositions[i].img = imgList16.shift();
  }
  resetGame();

  let count = 60;
  gTimer = setInterval(function () {
    count--;
    countDownDisplay.innerText = `TIMER: ${count}`;
    if (count === 0) {
      clearInterval(gTimer);
      openGameOverModal();
    }
  }, 1000);
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

gGuesses = 0;
function boardClickHandler(evt) {
  evt.preventDefault();
  if (evt.target.tagName !== "DIV") {
    return;
  }

  if (gClickedTile && gPreviousClickedTile) {
    return;
  }
  const clickedTileID = evt.target.id;
  const clickedTile = gTilePositions.find((tile) => tile.id === clickedTileID)

  if (clickedTile.state === true) {
    return;
  }

  function addGuessNumber() {
    gGuesses += 0.5;
    return gGuesses;
  }
  gGuesses = addGuessNumber();
  const guessesInt = Math.trunc(gGuesses);
  guessesDisplay.innerText = `GUESSES: ${guessesInt}`;
 
  
  gClickedTile = clickedTile;
  gClickedTile.state = true;

  const TILE_EL = document.getElementById(gClickedTile.id);

  if (gClickedTile.img !== null) {
    TILE_EL.style.backgroundImage = `url(${gClickedTile.img})`;
  }

  if (gPreviousClickedTile !== null) {
    const PREV_TILE_EL = document.getElementById(gPreviousClickedTile.id);
    if (
      gClickedTile.img === gPreviousClickedTile.img &&
      gClickedTile.id !== gPreviousClickedTile.id
    ) {
      gPreviousClickedTile.state = true;
      gClickedTile.state = true;
      gPreviousClickedTile = null;
      gClickedTile = null;
    } else {
      const WRONG_DISPLAY = document.getElementById("wrong");
      WRONG_DISPLAY.innerText = "WRONG";
      setTimeout(() => {
        gPreviousClickedTile.state = false;
        gClickedTile.state = false;
        gPreviousClickedTile = null;
        gClickedTile = null;
        TILE_EL.style.backgroundImage = "";
        PREV_TILE_EL.style.backgroundImage = "";
        WRONG_DISPLAY.innerText = "";
      }, 1000);
    }
  } else {
    gPreviousClickedTile = gClickedTile;
    gClickedTile = null;
  }

  let everyTileMatches = true;
  for (i = 0; i < 16; i++) {
    if (gTilePositions[i].state !== true) {
      everyTileMatches = false;
      break;
    }
  }
  if (everyTileMatches) {
    openYouWinModal();
    clearInterval(gTimer);
  }
  if (gGuesses === 16.5) {
    resetGame();
    openGameOverModal();
  }
}
