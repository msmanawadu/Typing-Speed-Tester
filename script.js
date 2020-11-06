const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

var timer = [0,0,0,0];

// Add leading zero to 0-9 numbers (using helper function to augment content of runTimer()):
function leadingZero(time){
    if(time <= 9){
        time = "0" + time;
    }
    return time;
}

// Run a standard minute/second/hundredths timer:
function runTimer(){
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    theTimer.innerHTML = currentTime;
    timer[3]++;

    // Math calculation
    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}

// Match the text entered with the provided text on the page:
function spellCheck(){
    let textEntered = testArea.value;
    // Get a copy of each entered word at a time
    let originTextMatch = originText.substring(0, textEntered.length); 

    if(textEntered == originText){
        // if entire string matches
        testWrapper.style.borderColor = "#429890"; // Green
    } else {
        if(textEntered == originTextMatch){
            //if a word matches at a time
            testWrapper.style.borderColor = "#65CCf3"; // Blue
        } else {
            testWrapper.style.borderColor = "#E95D0F" // Orange
        }
    }
}

// Start the timer:
function start(){
    let textEnteredLength = testArea.value.length;
    if(textEnteredLength === 0){
        setInterval(runTimer, 10);
    }

}

// Reset everything:
function reset(){
    console.log("Timer was resetted !")
}

// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);