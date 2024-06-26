

# Daniel's concentration memory game

## Description
The aim of the game is to turn 2 tiles over per turn. The player tries to remember what the underlying image looks like before it flips over again. If they are matching, they remain opend until the player can match everything. 

It's a great way to train your visual spatial memory!

## Screenshots
![intro](/images/intro.png)
![wrong](/images/wrong.png)
![lose](/images/lose.png)

## Game rules
Click the tiles to flip them up. 
Flip up two tiles at a time. If the pictures match, well done they stay open. 
If they don't match they flip back down. 
Match all tiles within 16 guesses, or when the time runs out or else you'll lose!
Train your memory!

## Wireframes
![wireframe](/images/wireframe1.png)

## Technologies used
JavaScript, HTML, CSS

## Stories
As a player, I want to see a board of 4x4 hidden cards with underlying hidden pictures (2 of a kind)

I want to choose the matching tiles using my memory and by guessing. When I choose a tile, it will remain open. When I chose the 2nd tile that doesn't match, it will remain open for 1 second and flip back unless they match, where they will remain open for the remainder of the game. 

As a player I want to see feedback if my guess is wrong.

As a player I want to see that I win when all tiles are flipped over. 

As a player I want to choose all the tiles within a fixed number of guesses. If my guesses reaches the maximum allowed guesses (16), then I will get a "GAME OVER"

As a player I will see a countdown timer start when I press start. If I don't complete the objective in the time limit (60seconds), then I will get a "GAME OVER". 



## Roadmap
- [x] Basic game (1 player). Play until win once
- [x] Basic game, play until win or start again any time
- [x] Keep track of number of guesses
- [x] Timer
- [x] Lose condition, when timer or guesses are maxed out 


## TODO
- [x] Setup HTML
- [x] Setup CSS
- [x] Review HTML and CSS
- [x] Define Model variables and functions
- [x] Define Controller funcitons 
- [x] Assign object properties to each tile
- [x] Change object properties when tile is clicked
- [x] Assign random pictures to the tiles
- [x] Assign 2 of a kind random pictures to the tiles
- [x] When 2 tiles are clicked, return to original position if incorrect
- [x] When 2 tiles are clicked, remain flipped if matching IMG
- [x] Implement timer 


## Getting Started: 
Follow the link below to play the game. Instructions will begin when you click the link.
(https://normalspoon.github.io/myGame/)

## Next Steps (if have time)
- [] make more squares
- [] make levels



