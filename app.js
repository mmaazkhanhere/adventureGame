#! /usr/bin/env node
import chalkAnimation from "chalk-animation";
function animationStop() {
    return new Promise((res) => {
        setTimeout(res, 2500);
    });
}
async function animationDisplay() {
    let title = chalkAnimation.pulse('Adventure Game');
    await animationStop();
    let secondTitle = chalkAnimation.rainbow('Welcome to the Dungeon');
    await animationStop();
    secondTitle.stop();
}
animationDisplay();
