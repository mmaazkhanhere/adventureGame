#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"
import chalkAnimation from "chalk-animation"

var playerHP:number=100; //health of player
var enemyHP:number=100; //health of enemy 
var healthRegain=3; //time health can be regained

let enemiesList:string[]=['Archer','Samurai','Ghoul','Bomberman']; //enemies list
var enemyToFight:string; //randomly selecting enemy

function animationStop(){ 
    return new Promise((res)=>{
        setTimeout(res,2500);
    })
}

async function animationDisplay(){ //function for animation display
    let title=chalkAnimation.pulse('Adventure Game');
    await animationStop();
    let secondTitle=chalkAnimation.rainbow('Welcome to the Dungeon');
    await animationStop();
    secondTitle.stop();
}

async function userOptions(){ //main function 
    
    do{
        enemyToFight=enemiesList[Math.floor(Math.random()*4)]; //randomly selecting enemy
        console.log(`\n${enemyToFight} has arrived at the scene!\n`); //name of enemy to face
        
        do{ //do at least once
        
        let userOptions= await inquirer.prompt([{
            name:'userOptions',
            type:'list',
            message:'Choose an action!',
            choices:['Strike','Regain Health','Retreat']
        }]);//user select an action

        switch(userOptions.userOptions){ //switching based on user choice
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
        }while(enemyHP>=0 && playerHP>=0) //continue unless either enemy of the player wins
        
        playerHP=100;
        enemyHP=100;

        var doAgain= await inquirer.prompt([{
            name:'doAgain',
            type:'list',
            message:'Do you want to play the game again?',
            choices:['Yes','No']
        }])
    }while(doAgain.doAgain=='Yes')
}

async function strike(){ //function to run if user choose to strike the enemy
    //player will recieve different damage depending on the enemy it faces, corresponding to the fact that not all enemies are equal

    if(enemyToFight=='Archer'){
        // will run if the player is facing archer as enemy

        let playerDamage:number=Math.ceil(Math.random()*20); //damage player will cause
        let enemyDamage:number=Math.ceil(Math.random()*10); //damage the enemy will cause

        playerHP=playerHP-enemyDamage; //damage recieved by the player
        enemyHP=enemyHP-playerDamage; //damage recieved by the enemy

        if(enemyHP<0){ //if enenmy health gets zero, the enemy has been defeated

            console.log(chalk.bgBlue(`You have defeated ${enemyToFight}\nPlayer Health: ${playerHP}\n`))
        }
        else if(playerHP<0){ //if player health gets zero, the player has been defeated
            console.log(chalk.bgRed(`You have been defeated.\n`))
        }
        else{ //display the health of both player and enemy if none of them is KO
            console.log(`Player Health: ${playerHP}\nEnemy Health: ${enemyHP}\nHealth Regain Drink: ${healthRegain}\n`)
        }
    } 

    else if(enemyToFight=='Ghoul'){
        // will run if the user is facing ghoul as an enemy


        let playerDamage:number=Math.ceil(Math.random()*19); //damage caused by player and enemy
        let enemyDamage:number=Math.ceil(Math.random()*12);

        playerHP=playerHP-enemyDamage; //damage recieved by player and enemy
        enemyHP=enemyHP-playerDamage;

        if(enemyHP<0){ //player wins if the enemy health becomes 0
            console.log(chalk.bgBlue(`You have defeated ${enemyToFight}\nPlayer Health: ${playerHP}\n`))
        }
        else if(playerHP<0){ //player loses if its health become 0
            console.log(chalk.bgRed(`You have been defeated.\n`))
        }
        else{ //display enemy and player health
            console.log(`Player Health: ${playerHP}\nEnemy Health: ${enemyHP}\nHealth Regain Drink: ${healthRegain}\n`)
        }
    }

    else if(enemyToFight=='Bomberman'){
        //will run if the user is facing bomberman as an enemy

        let playerDamage:number=Math.ceil(Math.random()*18); //damage caused by player and enemy
        let enemyDamage:number=Math.ceil(Math.random()*14);

        playerHP=playerHP-enemyDamage; //damage faced by player and enemy
        enemyHP=enemyHP-playerDamage;

        if(enemyHP<0){ //player wins if the enemy health gets 0
            console.log(chalk.bgBlue(`You have defeated ${enemyToFight}\nPlayer Health: ${playerHP}\n`))
        }
        else if(playerHP<0){ //player loses if its health becomes 0
            console.log(chalk.bgRed(`You have been defeated.\n`))
        }
        else{ //display both player and enemy health
            console.log(`Player Health: ${playerHP}\nEnemy Health: ${enemyHP}\nHealth Regain Drink: ${healthRegain}\n`)
        }
    }
    else if(enemyToFight=='Samurai'){
        //will run if the player is facing Samurai as an enemy

        let playerDamage:number=Math.ceil(Math.random()*17); //damages caused
        let enemyDamage:number=Math.ceil(Math.random()*16);

        playerHP=playerHP-enemyDamage; //damages recieved
        enemyHP=enemyHP-playerDamage;

        if(enemyHP<0){ //player wins
            console.log(chalk.bgBlue(`You have defeated ${enemyToFight}\nPlayer Health: ${playerHP}\n`))
        }
        else if(playerHP<0){ //player loses
            console.log(chalk.bgRed(`You have been defeated.\n`))
        }
        else{ //display both enemy and player health
            console.log(`Player Health: ${playerHP}\nEnemy Health: ${enemyHP}\nHealth Regain Drink: ${healthRegain}\n`)
        }
    }
}

async function healthBoost(){
    //function to regain health
    if(healthRegain==0){ //if no life regaining potion available, display this
        console.log(`Cannot add anymore health\n`)
    }
    else{ //if available, increase player health and decrement drinks available
        --healthRegain;
        playerHP += 45
        console.log(`Player Health: ${playerHP}\nHealth Regain Drink left: ${healthRegain}\n`)
    }
}

async function Retreat(){
    //function when the player choose to retreat

    enemyToFight=enemiesList[Math.floor(Math.random()*4)]; //another enemy faced by the player (you cannot run from your problems)
    console.log(`\n${enemyToFight} has arrived at the scene!`);
    enemyHP=100; //renew the health of the enemy
}

await animationDisplay();
userOptions();