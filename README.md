

# Daniel's concentration memory game

## Description
The aim of the game is to turn 2 tiles over per turn. The player tries to remember what the underlying image looks like before it flips over again. If they are matching, they remain opend until the player can match everything. 

It's a great way to train your visual spatial memory!

## Game rules


## Wireframes
![wireframe](<../Users/danielpoon/code/myGame/images/wireframe1.png>)

## Technologies used
JavaScript, HTML, CSS

## Stories
As a player, I want to see a board of 4x4 hidden cards with underlying hidden pictures (2 of a kind)

I want to choose the matching tiles using my memory and by guessing. When I choose a tile, it will remain open. When I chose the 2nd tile that doesn't match, it will remain open for 1.5 seconds and flip back unless they match, where they will remain open for the remainder of the game. 

As a player I want to see that I win when all tiles are flipped over. 

As a player I want to choose all the tiles within a fixed number of guesses. If my guesses reaches the maximum allowed guesses, then I will get a "GAME OVER"

As a player I will see a countdown timer start when I press start. If I don't complete the objective, then I will get a "GAME OVER". 

As a player I will see a feedback of a Tick or a Cross, depending on whether the guess was correct or wrong respectively. 


## Roadmap
- [ ] Basic game (1 player). Play until win once
- [ ] Basic game, play until win or start again any time
- [ ] Keep track of number of guesses
- [ ] Timer
- [ ] Lose condition, when timer or guesses are maxed out 


## TODO
- [x] Setup HTML
- [x] Setup CSS
- [ ] Review HTML and CSS
- [x] Define Model variables and functions
- [ ] Define Controller funcitons 
- [x] Assign object properties to each tile
- [ ] Change object properties when tile is clicked
- [ ] Assign random pictures to the tiles
- [ ] Assign 2 of a kind random pictures to the tiles
- [ ] When 2 tiles are clicked, return to original position if incorrect
- [ ] When 2 tiles are clicked, remain flipped if matching IMG

- [ ] Implement timer

## Pseudocode


## Getting Started: 
Insert link here

## Next Steps
- [ ] Implement difficulty levels ranging from (1-10)


