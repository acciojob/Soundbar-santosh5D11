const buttons = document.querySelectorAll(".btn");
const stopButton = document.querySelector(".stop");

let audio;

buttons.forEach(function (button) {
    button.addEventListener("click", function () {

        // Stop previous sound
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }

        // Get button text
        const soundName = button.innerText;

        // Create audio
        audio = new Audio(`./sounds/${soundName}.mp3`);

        // Play audio
        audio.play();
    });
});

stopButton.addEventListener("click", function () {
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
});