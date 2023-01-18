#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"
import chalkAnimation from "chalk-animation"

var playerHP:number=100;
var enemyHP:number=100;
var healthRegain=3;

let enemiesList:string[]=['Archer','Samurai','Ghoul','Bomberman'];
var enemyToFight=enemiesList[Math.floor(Math.random()*4)]

function animationStop(){
    return new Promise((res)=>{
        setTimeout(res,2500);
    })
}

async function animationDisplay(){
    let title=chalkAnimation.pulse('Adventure Game');
    await animationStop();
    let secondTitle=chalkAnimation.rainbow('Welcome to the Dungeon');
    await animationStop();
    secondTitle.stop();
}

async function userOptions(){
    
    console.log(`\n${enemyToFight} has arrived at the scene!\n`);

    do{
    let userOptions= await inquirer.prompt([{
        name:'userOptions',
        type:'list',
        message:'Choose an action!',
        choices:['Strike','Regain Health','Retreat']
    }]);
    switch(userOptions.userOptions){
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
    }while(enemyHP>=0 && playerHP>=0)
}

async function strike(){
    if(enemyToFight=='Archer'){
        let playerDamage:number=Math.ceil(Math.random()*20);
        let enemyDamage:number=Math.ceil(Math.random()*10);

        playerHP=playerHP-enemyDamage;
        enemyHP=enemyHP-playerDamage;

        if(enemyHP<0){
            console.log(`You have defeated ${enemyToFight}\nPlayer Health: ${playerHP}\n`)
        }
        else if(playerHP<0){
            console.log(`You have been defeated.\n`)
        }
        else{
            console.log(`Player Health: ${playerHP}\nEnemy Health: ${enemyHP}\nHealth Regain Drink: ${healthRegain}\n`)
        }
    }

    else if(enemyToFight=='Ghoul'){
        let playerDamage:number=Math.ceil(Math.random()*19);
        let enemyDamage:number=Math.ceil(Math.random()*12);

        playerHP=playerHP-enemyDamage;
        enemyHP=enemyHP-playerDamage;

        if(enemyHP<0){
            console.log(`You have defeated ${enemyToFight}\nPlayer Health: ${playerHP}\n`)
        }
        else if(playerHP<0){
            console.log(`You have been defeated.\n`)
        }
        else{
            console.log(`Player Health: ${playerHP}\nEnemy Health: ${enemyHP}\nHealth Regain Drink: ${healthRegain}\n`)
        }
    }

    else if(enemyToFight=='Bomberman'){
        let playerDamage:number=Math.ceil(Math.random()*18);
        let enemyDamage:number=Math.ceil(Math.random()*14);

        playerHP=playerHP-enemyDamage;
        enemyHP=enemyHP-playerDamage;

        if(enemyHP<0){
            console.log(`You have defeated ${enemyToFight}\nPlayer Health: ${playerHP}\n`)
        }
        else if(playerHP<0){
            console.log(`You have been defeated.\n`)
        }
        else{
            console.log(`Player Health: ${playerHP}\nEnemy Health: ${enemyHP}\nHealth Regain Drink: ${healthRegain}\n`)
        }
    }
    else if(enemyToFight=='Samurai'){
        let playerDamage:number=Math.ceil(Math.random()*17);
        let enemyDamage:number=Math.ceil(Math.random()*16);

        playerHP=playerHP-enemyDamage;
        enemyHP=enemyHP-playerDamage;

        if(enemyHP<0){
            console.log(`You have defeated ${enemyToFight}\nPlayer Health: ${playerHP}\n`)
        }
        else if(playerHP<0){
            console.log(`You have been defeated.\n`)
        }
        else{
            console.log(`Player Health: ${playerHP}\nEnemy Health: ${enemyHP}\nHealth Regain Drink: ${healthRegain}\n`)
        }
    }
}

async function healthBoost(){
    if(healthRegain==0){
        console.log(`Cannot add anymore health\n`)
    }
    else{
        --healthRegain;
        playerHP += 45
        console.log(`Player Health: ${playerHP}\nHealth Regain Drink left: ${healthRegain}\n`)
    }
}

async function Retreat(){
    enemyToFight=enemiesList[Math.floor(Math.random()*4)];
    console.log(`\n${enemyToFight} has arrived at the scene!`);
    enemyHP=100;
}

//animationDisplay();
userOptions();