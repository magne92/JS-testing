var knapp_EL = document.querySelector("#knappID");
var input_EL = document.querySelector("#inputID");
var feedback_EL = document.querySelector("#feedback");
var restart_EL = document.querySelector("#restart")
var timer_EL = document.querySelector("#timer");
var score_EL = document.querySelector("#score");

var random_num = Math.floor(Math.random() * 100) + 1;
var attempts = 5;
var score = 0;
var playing = false;
var new_game = true;
var max_time = 30
var time_left = max_time;

function restart(){
    attempts = 5;
    score = 0;
    random_num = Math.floor(Math.random() * 100) + 1;
    new_game = true;
    playing = false
    time_left = max_time
    timer_EL.innerHTML = "Time left: " + time_left; 
    feedback_EL.innerHTML = "Guess a number above";
    console.log(new_game)
    console.log(playing)
}

function check_attempts(){
    if (attempts <= 0) {
        feedback_EL.innerHTML = "You have no more attempts left. Correct number was: "+ random_num +" Restart.";
        new_game = true;
        playing = false;
        timer_EL.innerHTML = "Time left: " + time_left; 
    }
}

function sjekkTall(){
    if (new_game){
        playing = true;
        new_game = false;
    }
    if (playing){
        console.log(input_EL.value);
        guessed_num = input_EL.value;
        attempts--;

        if (guessed_num == random_num){
            feedback_EL.innerHTML = "Congratulations you win";
            score++;
            score_EL.innerHTML = "Score: " + score;
            playing = false;

        } else if (guessed_num < random_num ){
            feedback_EL.innerHTML = guessed_num + " was too low";
            check_attempts()
            
        } else if ( guessed_num > random_num) {
            feedback_EL.innerHTML = guessed_num + " was too high";
            check_attempts()
        }

    } // end if playing
} // end sjekktall function

timer_EL.innerHTML = "Time left: " + time_left; 
feedback_EL.innerHTML = "Guess a number above";
score_EL.innerHTML = "Score: " + score;

knapp_EL.addEventListener("click", sjekkTall);
restart_EL.addEventListener("click", restart);

window.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        checkNumber()
    }
})

var timer = setInterval(myTimer, 1000); // kjører funksjonen myTimer 1 gang i sekundet

function myTimer(){ 
    if (playing){
        time_left--; // reduserer time_left var med 1
        timer_EL.innerHTML = "Time left: " + time_left; // setter tallet i time_left inn i HTML tag, timer_EL
    }
}