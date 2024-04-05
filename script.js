
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


let playerChoice;
let tilePositions;
let guesses;
let tileProperties;
let previousClickedTile = null;
let clickedTile = null;
let timer;

const TILES = document.querySelectorAll(".tile");
const BUTTON = document.getElementById("actionButton");
const guessesDisplay = document.getElementById("attempts");
const countDownDisplay = document.getElementById("timer");
const MODAL_BUTTON = document.querySelector(".btn")
const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")



function modalButtonStart() {
buttonClickHandler()
modal.classList.add("hidden")
overlay.classList.add("hidden")
}

function openYouWinModal() {
  modal.classList.remove("hidden")
  overlay.classList.add("hidden")
  const gameOverHeading = document.querySelector("h3") 
  const gameOverText = document.querySelector("p")
  gameOverHeading.innerText = "CONGRATS You Won!"
  gameOverText.innerText = "Click START to play again!"
}

function openGameOverModal() {
  modal.classList.remove("hidden")
  overlay.classList.remove("hidden")
  const gameOverHeading = document.querySelector("h3") 
  const gameOverText = document.querySelector("p")
  gameOverHeading.innerText = "You Lost!"
  gameOverText.innerText = "Click START to try again!"
}

function populateBoard() {
  tilePositions = [];
  for (let i = 0; i < TILES.length; i++) {
    let propertiesObject = {
      id: TILES[i].id,
      state: "false",
      img: "",
    };
  
    tilePositions.push(propertiesObject);
  }
}

populateBoard();



TILES.forEach((tile) => {
  tile.addEventListener("click", boardClickHandler);
});

BUTTON.addEventListener("click", buttonClickHandler);
MODAL_BUTTON.addEventListener("click", modalButtonStart)



function resetGame() {
  for (i = 0; i < 16; i++) {
    const TILES = document.querySelectorAll(".tile");
    guesses = 0 
    guessesDisplay.innerText = `GUESSES: ${guesses}`;
    tilePositions[i].state = false;
    TILES.forEach((TILE) => {
      TILE.style.backgroundImage = "";
    });
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
    tilePositions[i].img = imgList16.shift();
  }
  resetGame();
 

  clearInterval(timer)
  let count = 60;
  timer = setInterval(function() {
    count --;
    countDownDisplay.innerText = `TIMER: ${count}`;
    if (count === 0) {
      clearInterval(timer);
      openGameOverModal()
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
  

  clickedTile.state = "true";

  const TILE_EL = document.getElementById(clickedTile.id);

  if (clickedTile.img !== null) {
   
    TILE_EL.style.backgroundImage = `url(${clickedTile.img})`;
  }

  if (previousClickedTile !== null) {
 
    const PREV_TILE_EL = document.getElementById(previousClickedTile.id);
    if (clickedTile.img === previousClickedTile.img && clickedTile.id !== previousClickedTile.id ) {

      previousClickedTile.state = true;
      clickedTile.state = true;
      previousClickedTile = null;
      clickedTile = null;

    } else {
      const WRONG_DISPLAY = document.getElementById("wrong")
      WRONG_DISPLAY.innerText = "WRONG"
      setTimeout(() => {
        
        previousClickedTile.state = false;
        clickedTile.state = false;
        previousClickedTile = null;
        clickedTile = null;
        TILE_EL.style.backgroundImage = "";
        PREV_TILE_EL.style.backgroundImage = "";
        WRONG_DISPLAY.innerText = "";
      }, 1000);
    }
  } else {
    previousClickedTile = clickedTile;
    clickedTile = null;
  }

  let everyTileMatches = true
  for (i = 0; i < 16; i++) {
    if (tilePositions[i].state !== true) {
      everyTileMatches = false;
      break;
    } 
  }
  if (everyTileMatches) {
    openYouWinModal()
    clearInterval(timer)
  }
  if (guesses === 16.5) {
    resetGame()
    openGameOverModal()
  }
}




