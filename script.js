var knapp_EL = document.querySelector("#knappID");
var input_EL = document.querySelector("#inputID");
var feedback_EL = document.querySelector("#feedback");

var random_num = Math.floor(Math.random() * 100) + 1;

function sjekkTall(){
    console.log(input_EL.value);
    guessed_num = input_EL.value;

    if (guessed_num == random_num){
        feedback_EL.innerHTML = "Congratulations you win"
    } else if (guessed_num < random_num ){
        feedback_EL.innerHTML = "The number you guessed was too low"
    } else if ( guessed_num > random_num) {
        feedback_EL.innerHTML = "The number you guessed was too high"
    }
}

knapp_EL.addEventListener("click", sjekkTall);

