var knapp_EL = document.querySelector("#knappID");
var input_EL = document.querySelector("#inputID");
var feedback_EL = document.querySelector("#feedback");
var restart_EL = document.querySelector("#restart")

var random_num = Math.floor(Math.random() * 100) + 1;
var attempts = 5;
var score = 0;
var playing = true;


function restart(){
    attempts = 5;
    score = 0;
    random_num = Math.floor(Math.random() * 100) + 1;
    playing = true;
}

function check_attempts(){
    if (attempts <= 0) {
        feedback_EL.innerHTML = "You have no more attempts left. Restart.";
        playing = false;

    }
}

function sjekkTall(){
    if (playing == true){
        console.log(input_EL.value);
        guessed_num = input_EL.value;
        attempts--;

        if (guessed_num == random_num){
            feedback_EL.innerHTML = "Congratulations you win";
            score++;
            playing = false;

        } else if (guessed_num < random_num ){
            feedback_EL.innerHTML = "The number you guessed was too low";
            check_attempts()
            
        } else if ( guessed_num > random_num) {
            feedback_EL.innerHTML = "The number you guessed was too high";
            check_attempts()
        }

    } // end if playing
} // end sjekktall function
knapp_EL.addEventListener("click", sjekkTall);
restart_EL.addEventListener("click", restart);



window.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        checkNumber()
    }
}