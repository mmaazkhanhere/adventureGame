#! /usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
var playerHP = 100;
var enemyHP = 100;
var healthRegain = 3;
let enemiesList = ['Archer', 'Samurai', 'Ghoul', 'Bomberman'];
var enemyToFight = enemiesList[Math.floor(Math.random() * 4)];
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
async function userOptions() {
    do {
        console.log(`${enemyToFight} has arrived at the scene!`);
        let userOptions = await inquirer.prompt([{
                name: 'userOptions',
                type: 'list',
                message: 'Choose an action!',
                choices: ['Strike', 'Regain Health', 'Retreat']
            }]);
        switch (userOptions.userOptions) {
            case 'Strike':
                await strike();
                break;
            case 'Regain Health':
                await healthBoost();
                break;
            case 'Retreat':
                await Retreat();
                break;
        }
    } while (enemyHP > 0 && playerHP > 0);
}
async function strike() {
    if (enemyToFight == 'Archer') {
        let playerDamage = Math.ceil(Math.random() * 20);
        let enemyDamage = Math.ceil(Math.random() * 10);
        playerHP = playerHP - enemyDamage;
        enemyHP = enemyHP - playerDamage;
        if (enemyHP < 0) {
            console.log(`You have defeated ${enemyToFight}Player Health: ${playerHP}\nHealth Regain Drink:${healthRegain}`);
        }
        else {
            console.log(`Player Health: ${playerHP}\nEnemy Health:${enemyHP}`);
        }
    }
    else if (enemyToFight == 'Ghoul') {
        let playerDamage = Math.ceil(Math.random() * 19);
        let enemyDamage = Math.ceil(Math.random() * 12);
        playerHP = playerHP - enemyDamage;
        enemyHP = enemyHP - playerDamage;
        if (enemyHP < 0) {
            console.log(`You have defeated ${enemyToFight}Player Health: ${playerHP}\nHealth Regain Drink:${healthRegain}`);
        }
        else {
            console.log(`Player Health: ${playerHP}\nEnemy Health:${enemyHP}`);
        }
    }
    else if (enemyToFight == 'Bomberman') {
        let playerDamage = Math.ceil(Math.random() * 18);
        let enemyDamage = Math.ceil(Math.random() * 14);
        playerHP = playerHP - enemyDamage;
        enemyHP = enemyHP - playerDamage;
        if (enemyHP < 0) {
            console.log(`You have defeated ${enemyToFight}Player Health: ${playerHP}\nHealth Regain Drink:${healthRegain}`);
        }
        else {
            console.log(`Player Health: ${playerHP}\nEnemy Health:${enemyHP}`);
        }
    }
    else if (enemyToFight == 'Samurai') {
        let playerDamage = Math.ceil(Math.random() * 17);
        let enemyDamage = Math.ceil(Math.random() * 16);
        playerHP = playerHP - enemyDamage;
        enemyHP = enemyHP - playerDamage;
        if (enemyHP < 0) {
            console.log(`You have defeated ${enemyToFight}Player Health: ${playerHP}\nHealth Regain Drink:${healthRegain}`);
        }
        else {
            console.log(`Player Health: ${playerHP}\nEnemy Health:${enemyHP}`);
        }
    }
}
async function healthBoost() {
    if (healthRegain == 0) {
        console.log(`Cannot add anymore health`);
    }
    else {
        --healthRegain;
        playerHP += 45;
        console.log(`Player Health: ${playerHP}\nHealth Regain Drink left: ${healthRegain}`);
    }
}
async function Retreat() {
    enemyToFight = enemiesList[Math.floor(Math.random() * 4)];
    console.log(`${enemyToFight} has arrived at the scene!`);
}
//animationDisplay();
userOptions();
