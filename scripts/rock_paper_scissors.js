const weaponsEnum = Object.freeze({
    "ROCK": {
        name: "rock",
        value: 1
    }, 
    "PAPER": {
        name: "paper",
        value: 2
    },
    "SCISSORS": {
        name: "scissors",
        value: 3
    }
});

const winnerEnum = Object.freeze({
    "DRAW": {
        name: "draw",
        value: 1
    },
    "PLAYER": {
        name: "player",
        value: 2
    },
    "COMPUTER": {
        name: "computer",
        value: 3
    }
});


document.getElementById("rock").onclick = function() {
    rockPaperScissorsBattle(weaponsEnum.ROCK);
}

document.getElementById("paper").onclick = function() {
    rockPaperScissorsBattle(weaponsEnum.PAPER);
}

document.getElementById("scissors").onclick = function() {
    rockPaperScissorsBattle(weaponsEnum.SCISSORS);
}

document.getElementById("play_again").onclick = function() {
    toggleWeaponsOn();
}

function rockPaperScissorsBattle(playersWeapon) {
    const computerWeaponAsNumber = Math.floor(Math.random() * 3) + 1;
    const computerWeapon = getWeaponFromNumber(computerWeaponAsNumber);
    let winner;
    let winningWeapon;
    let losingWeapon;
    switch (((computerWeapon.value - playersWeapon.value) + 3) % 3) {
        case 0:
            winner = winnerEnum.DRAW;
            winningWeapon = null;
            losingWeapon = null;
            break;
        case 1:
            winner = winnerEnum.COMPUTER;
            winningWeapon = computerWeapon;
            losingWeapon = playersWeapon;
            break;
        case 2:
            winner = winnerEnum.PLAYER;
            winningWeapon = playersWeapon;
            losingWeapon = computerWeapon;
            break;
        default:
            console.log("Invalid battle result");
    }
    publishVictor(winner, winningWeapon, losingWeapon);
}

function getWeaponFromNumber(number) {
    for (let weaponIndex in weaponsEnum) {
        if (weaponsEnum[weaponIndex].value == number) {
            return weaponsEnum[weaponIndex];
        }
    }
    console.log("Error: gotWeaponFromNumber: " + number);
    return null;
}

function publishVictor(winner, winningWeapon, losingWeapon) {
    let headingText;
    let subheadingText;
    if (winner == winnerEnum.DRAW) {
        headingText = "Draw.";
        subheadingText = "Please play again.";
    } else {
        headingText = capitalizeFirstLetter(winner.name) + " wins!";
        subheadingText = capitalizeFirstLetter(winningWeapon.name) + " beats " + losingWeapon.name + ".";
    }

    displayResults(headingText, subheadingText);
}

function displayResults(headingText, subheadingText) {
    const battleDiv = document.getElementById("battle_result");
    battleDiv.textContent = "";
    toggleWeaponsOff();
    const battleResultHeading = document.createElement("h1");
    battleResultHeading.appendChild(document.createTextNode(headingText));
    const battleResultSubheading = document.createElement("h3");
    battleResultSubheading.appendChild(document.createTextNode(subheadingText));
    battleDiv.appendChild(battleResultHeading);
    battleDiv.appendChild(battleResultSubheading);
}

function toggleWeaponsOff() {
    const weapon_buttons = document.getElementsByClassName("weapon_option_button");
    for (let weapon_button of weapon_buttons) {
        weapon_button.classList.add("hidden");
    }
    const play_again_button = document.getElementById("play_again");
    play_again_button.classList.remove("hidden");

}

function toggleWeaponsOn() {
    const battleDiv = document.getElementById("battle_result");
    battleDiv.textContent = "";
    const weapon_buttons = document.getElementsByClassName("weapon_option_button");
    for (let weapon_button of weapon_buttons) {
        weapon_button.classList.remove("hidden");
    }
    const play_again_button = document.getElementById("play_again");
    play_again_button.classList.add("hidden");
}

function capitalizeFirstLetter(string) {
    return string.replace(/^\w/, function(char) {
        return char.toUpperCase();
    });
}