/*----- constants -----*/
const PLAYER = "PLAYER";
const TILE_IMAGES = "TILE_IMAGES";
const MAX_GUESSES = "MAX_GUESSES";
const IMG_LIST = [
  "https://imgur.com/t/cat/YF3CZcZ",
  "https://imgur.com/t/cat/uOB6y3P",
  "https://imgur.com/t/cat/bCfyCpH",
  "https://imgur.com/t/cat/dkLt6kH",
  "https://imgur.com/t/cat/UbJPvdn",
  "https://imgur.com/t/cat/qIGSfwA",
  "https://imgur.com/t/cat/Tpl3kek",
  "https://imgur.com/t/cat/r8VcaJR",
];
const TILE_NUMBER = "TILE_NUMBER";

/*----- app's state (variables) -----*/
let playerChoice;
let tilePositions;
let guesses;
let tileProperties;

/*----- cached element references -----*/
const TILES = document.querySelectorAll(".tile");
const BUTTON = document.getElementById("actionButton");

// /*----- model functions -----*/

function populateBoard() {
  tilePositions = [];
  for (let i = 0; i < TILES.length; i++) {
    let propertiesObject = {
      id: TILES[i].id,
      state: "0",
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

function buttonClickHandler(evt) {
  
  // for (const tile of TILES) {
  //   const randomImgIndex = Math.floor(Math.random()* IMG_LIST.length);
  //   tile.innerText = randomImgIndex
  // }

  let imgList16 = []
  for (const img of IMG_LIST) {
    imgList16.push(img)
    imgList16.push(img)
  }
  console.log(imgList16)

  function shuffle(array) {
    let currentIndex = array.length;
    while (currentIndex !=0) {
      let randomIndex = Math.floor(Math.random() * imgList16.length);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
    }
  }

  shuffle(imgList16);
  console.log(imgList16)

}

let firstPick = 8;
function boardClickHandler(evt) {
  //   evt.preventDefault();
  //   if (evt.target.tagName !== "DIV") {
  //     return;
  //   }
  const clickedTileID = evt.target.id;
  const clickedTile = tilePositions.find((tile) => tile.id === clickedTileID);
  console.log(clickedTile);

  currentClickedTile = clickedTile.state = "1";
  console.log(
    "after click TILE ID " + clickedTileID + " state changed to",
    currentClickedTile);


}

// *----- view functions -----*/
