# RockPaperScissors

## Project description
This is the third project I've made in JavaScript. I made this when I was still learning the basics. I really wanted to challenge myself. Because I already had experience programming in C and C#, I already had some insight regarding programming. This helped me a lot when writing the code for this assignment. As a result, I often looked at my C# Rock Paper Scissors code when making this assignment.

## Installation
You can "install" this web page by downloading it and running it on a live server. You could use an external application such as XAMPP for this purpose. IDEs like Visual Studio Code have this feature built in.

When using XAMPP it is important to put the project in the htdocs folder. Then you can click on the Apache module. When you go to your browser and type in localhost/project name, it should open.

In case you have Visual Studio Code installed, you can open the project in there. Clicking on the 'Go Live' button in the status bar will open a live server where you should be able to see the project.

## Usage
If you go to my [school-website](https://i481695.hera.fhict.nl/projects/development%20projects/webpagina's/RockPaperScissors/index.php), you can use the project without installing it.

In this game you play rock paper scissors against the computer. First, you can choose an option by clicking on one of the three buttons: Rock, Paper or Scissors. Then the computer will also choose an option. Next, the hands will play stone paper scissors against each other using your and the computer's weapon of choice. The rules of this game are as follows:
- Rock wins from scissors
- Scissors wins from paper
- Paper wins from stone

After the two hands have played the game against each other, there will be shown whether you have won or lost. The score is kept at the top left and right of the screen.

## Architecture
In the HTML, there are three buttons. Each of these buttons has a function associated with it. ChoiceIsRock(); for when the player's choice is rock, ChoiceIsPaper(); for when the player's choice is paper, and ChoiceIsScissors(); for when the player's choice is scissors. Since these are really just three of the same functions, I could have solved this better in retrospect by writing one function and giving it a parameter. However, when I wrote this I was not experienced enough with JavaScript to do this. 

Each function simply consists of a random number, and a switch that maps each number to a result. For example, at 0 the computer chooses stone, at 1 paper, and at 2 scissors. 

To display the scores, I created two elements in HTML. After that I extended the selection function with variables to store the wins of the player and the wins of the computer. These are added to 1 each time the player or the computer wins. These variables are shown by innerHTML on the web page. 
