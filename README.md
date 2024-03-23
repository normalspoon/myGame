

# Daniel's concentration memory game

## Description
The game will have 4x4 squares (at least initially) and everytime a tile is clicked, it will flip and display an image. 

As soon as a tile is clicked a countdown timer will start from 5 seconds.

A second tile needs to be clicked before the timer runs out.

If the timer runs out, the number of guesses counts up, and the clicked tile will flip over

If the second tile flipped doesn't match the first, then both tiles remain open until the timer runs out, or until the player clicks another tile




## Wireframes
![wireframe](../code/myGame/images/wireframe1.png)

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
[] Basic game (player vs computer)
[] Keep track of number of guesses
[] Timer


## TODO
[] Setup HTML
[] Setup CSS
[] Review HTML and CSS
[] Define Model variables and functions
[] Implement timer
[] Define Controller funcitons

