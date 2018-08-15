const browsers = Object.freeze({
    "FIREFOX": {
        name: "firefox",
        value: 0
    },
    "SAFARI": {
        name: "safari",
        value: 1
    },
    "SEAMONKEY": {
        name: "seamonkey",
        value: 2
    },
    "EXPLORER": {
        name: "explorer",
        value: 3
    }
});


let scroller1, scroller2, scroller3;
// let spriteID;
let subspriteID;
let stopScrolling = false;
let scroller1Sprite;
let scroller2Sprite;
let scroller3Sprite;


function stopAnimation() {
    clearInterval(spriteID);
}

document.getElementById("play_game").onclick = function () {
    toggleGameButtonsToGameOn();
    roll(scroller1Sprite, scroller1, "scroller1", 200);
    roll(scroller2Sprite, scroller2, "scroller2", 150);
    roll(scroller3Sprite, scroller3, "scroller3", 100);
}

document.getElementById("end_game").onclick = function () {
    stopScrolling = true;
    toggleGameButtonsToGameFinished();
}

document.getElementById("new_game").onclick = function() {
    toggleGamesButtonToNewGame();
}

function roll(sprite, scroller, id, interval) {
    let subposition = 175;
    const subinterval = interval / 5;
    const diff = 175 / 5;


    sprite = setInterval(() => {
        document.getElementById(id).style.backgroundPosition = `-8px +${subposition}px`;

        if (subposition == 175 * 1) {
            scroller = browsers.FIREFOX;
            if (stopScrolling) {
                clearInterval(sprite);
            }
        } else if (subposition == 175 * 2) {
            scroller = browsers.SAFARI;
            if (stopScrolling) {
                clearInterval(sprite);
            }
        } else if (subposition == 175 * 3) {
            scroller = browsers.SEAMONKEY;
            if (stopScrolling) {
                clearInterval(sprite);
            }
        } else if (subposition == 175 * 4) {
            scroller = browsers.EXPLORER;
            if (stopScrolling) {
                clearInterval(sprite);
            }
        }


        if (subposition < 839) {
            subposition += diff;
        } else {
            subposition = 175;
        }
    }, subinterval);


}

function toggleGameButtonsToGameOn() {
    document.getElementById("play_game").classList.add("hidden");
    document.getElementById("end_game").classList.remove("hidden");
}

function toggleGameButtonsToGameFinished() {
    document.getElementById("new_game").classList.remove("hidden");
    document.getElementById("end_game").classList.add("hidden");
}

function toggleGamesButtonToNewGame() {
    document.getElementById("play_game").classList.remove("hidden");
    document.getElementById("new_game").classList.add("hidden");
    stopScrolling = false;
}