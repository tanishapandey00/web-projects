let timerobj = {
    minutes: 0,
    seconds: 0,
    timerId: 0
}
function sonudAlarm() {
    let amount = 3;
    let audio = new Audio("Timer_Sound_Effect.mp3");
    function playSound() {
        audio.pause();
        audio.currentTime = 0;
        audio.play();
    }
    for (let i = 0; i < amount; i++) {
        setTimeout(playSound, 1200 * i);
    }
}
function updateValue(key, value) {
    if (value < 0) {
        value = 0;
        console.log("Positive Numbers Only");
    }
    if (key == "seconds") {
        if (value < 10) {
            value = "0" + value;
        }
        if (value > 59) {
            value = 59;
        }
    }
    $("#" + key).html(value || 0);
    timerobj[key] = value;
}
//self calling Function 
(function detectChanges(key) {
    let input = "#" + key + "-input";
    $(input).change(function () {
        updateValue(key, $(input).val());
    });
    $(input).keyup(function () {
        updateValue(key, $(input).val());
    });
    return arguments.callee;

})("minutes")("seconds");
//Instead of writing this 
// function enxample(){

// }
// enxample();

function startTimer() {
    //First thingh we want to do is when we click start we qwill undisable other two buttons and disable the start button
    buttonManager(["start", false], ["stop", true], ["pause", true]);
    freezeInputs();
    timerobj.timerId = setInterval(function () {
        timerobj.seconds--;
        if (timerobj.seconds < 0) {
            if (timerobj.minutes == 0) {
                sonudAlarm();
                return stopTimer();
            }
            timerobj.seconds = 59;
            timerobj.minutes--;
        }
        updateValue("minutes", timerobj.minutes);
        updateValue("seconds", timerobj.seconds);
    }, 1000);
}
function stopTimer() {
    clearInterval(timerobj.timerId);
    buttonManager(["start", true], ["stop", false], ["pause", false]);
    unfreezeInputs();
    updateValue("minutes", $("#minutes-input").val());
    let seconds = $("#seconds-input").val() || "0";
    updateValue("seconds", seconds);
}
function pauseTimer() {
    buttonManager(["start", true], ["stop", true], ["pause", false]);
    clearInterval(timerobj.timerId);
}
//For being able to diable other two button when we click on one button we are creating this fuction
// ... these three dots are call Rest operators it basically helps you pass in as many arguments as you want
function buttonManager(...buttonsArray) {
    for (let i = 0; i < buttonsArray.length; i++) {
        let button = "#" + buttonsArray[i][0] + "-button";
        if (buttonsArray[i][1]) {
            $(button).removeAttr("disabled");
        }
        else {
            $(button).attr("disabled", "disabled");
        }
    }
}
//In this section we are ginging to freez the inputs
//to freez the input we the timer is playing
function freezeInputs() {
    $("#minutes-input").attr("disabled", "disabled");
    $("#seconds-input").attr("disabled", "disabled");
}
function unfreezeInputs() {
    $("#minutes-input").removeAttr("disabled");
    $("#seconds-input").removeAttr("disabled");
}