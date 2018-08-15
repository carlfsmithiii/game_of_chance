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


const scrollerValues = [browsers.FIREFOX, browsers.FIREFOX, browsers.FIREFOX];
let stopScrolling = false;
let scroller1Sprite;
let scroller2Sprite;
let scroller3Sprite;

const scroller1Node = document.getElementById("scroller1");
const scroller2Node = document.getElementById("scroller2");
const scroller3Node = document.getElementById("scroller3");


document.getElementById("play_game").onclick = function () {
    toggleGameButtonsToGameOn();
    roll(scroller1Sprite, 1, scroller1Node, 225);
    roll(scroller2Sprite, 2, scroller2Node, 150);
    roll(scroller3Sprite, 3, scroller3Node, 100);
}

document.getElementById("end_game").onclick = function () {
    stopScrolling = true;
    toggleGameButtonsToGameFinished();
    let paragraph = document.getElementById("feedback");
    if (scrollerValues[0] === scrollerValues[1] && scrollerValues[1] === scrollerValues[2]) {
        paragraph.appendChild(document.createTextNode("You win!"));
    } else {
        paragraph.appendChild(document.createTextNode("You lose!"));
    }
}

document.getElementById("new_game").onclick = function() {
    toggleGamesButtonToNewGame();
}

function roll(sprite, scrollerNumber, node, interval) {
    let subposition = 175;
    const subinterval = interval / 5;
    const diff = 175 / 5;

    sprite = setInterval(() => {
        node.style.backgroundPosition = `-8px +${subposition}px`;

        if (subposition == 175 * 1) {
            if (stopScrolling) {
                clearInterval(sprite);
            }
        } else if (subposition == 175 * 2) {
           node
            if (stopScrolling) {
                clearInterval(sprite);
            }
        } else if (subposition == 175 * 3) {
            if (stopScrolling) {
                clearInterval(sprite);
            }
        } else if (subposition == 175 * 4) {
            if (stopScrolling) {
                clearInterval(sprite);
            }
        }


        if (subposition < 839) {
            subposition += diff;
        } else {
            subposition = 175;
        }
        
        if (subposition > 175 * 4) {
            scrollerValues[scrollerNumber - 1] = browsers.FIREFOX;
        } 
        else if (subposition > 175 * 3) {
            scrollerValues[scrollerNumber - 1] = browsers.EXPLORER;
        }
        else if (subposition > 175 * 2) {
            scrollerValues[scrollerNumber - 1] = browsers.SEAMONKEY;
        }
        else if (subposition > 175) {
            scrollerValues[scrollerNumber - 1] = browsers.SAFARI;
        } else {
            scrollerValues[scrollerNumber - 1] = browsers.FIREFOX;
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
    let paragraph = document.getElementById("feedback");
    paragraph.textContent = "";
    stopScrolling = false;

    scroller1Node.style.backgroundPosition = 'bottom';
    scroller2Node.style.backgroundPosition = 'bottom';
    scroller3Node.style.backgroundPosition = 'bottom';
}

