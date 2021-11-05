<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link href="style.css" rel="stylesheet">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Rock Paper Scissors</title>
</head>
<body>
<div class="score">
    <div class="scoreplayer">
        <h1>PLAYER</h1>
        <p id="winsplayer">0</p>
    </div>
    <div class="scorecomputer">
        <h1>COMPUTER</h1>
        <p id="winscomputer">0</p>
    </div>
</div>

<div class="winnaar">
    <h1 id="uitslag">CHOOSE AN OPTION</h1>
</div>
<div class="buttons">
    <input onclick="ChoiceIsRock()" type="submit" id="buttonrock" class="btn btn-dark button" value="ROCK">
    <input onclick="ChoiceIsPaper()" type="submit" id="buttonpaper" class="btn btn-dark button" value="PAPER">
    <input onclick="ChoiceIsScissor()" type="submit" id="buttonscissors" class="btn btn-dark button" value="SCISSORS">
</div>

<div class="content">
    <img src="img/playerfist.png" alt="player" id="choiceplayer" class="img">
    <img src="img/enemyfist.png" alt="computer" id="choicecomputer" class="img">
</div>

</body>
<script src="script.js"></script>
</html>