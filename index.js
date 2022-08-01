var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;
$(document).keypress(function(){
    if(!started){
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

$(".btn").on("click",function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);    
    checkAnswer(userClickedPattern.length-1);
});


function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.ceil(Math.random() * 3);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
  
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  
    playSound(randomChosenColour)
    animatePress(randomChosenColour);
  }
//$("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length){
          setTimeout(function () {
            nextSequence();
          }, 1000);
        }
  
      } 
    else {
        playSound("wrong");
  
        $("body").addClass("game-over");
        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);
  
        $("#level-title").text("Game Over, Press Any Key to Restart");
  
        //2. Call startOver() if the user gets the sequence wrong.
        startOver();
      }
}

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function  animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColour).removeClass('pressed');
    }, 100);
}
