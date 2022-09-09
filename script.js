var knapp_EL = document.querySelector("#knappID");
var input_EL = document.querySelector("#inputID");
var feedback_EL = document.querySelector("#feedback");



function sjekkTall(){
    console.log(input_EL.value)
}

knapp_EL.addEventListener("click", sjekkTall);

