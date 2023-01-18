#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"
import chalkAnimation from "chalk-animation"

var playerHP:number=100;
var enemyHP:number=100;

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
    do{
        var enemiesList:string[]=['Archer','Samurai','Ghoul','Bomberman'];

        console.log(`${enemiesList[Math.ceil(Math.random()*4)]}`)
        let userOptions= await inquirer.prompt([{
            name:'userOptions',
            type:'list',
            message:'Choose an action!',
            choices:['Strike','Regain Health','Retreat']
        }])
        // switch(userOptions.userOptions){
        //     case 'Strike':

        // }
        
    }while()
}

async function strike(){
    let userDamage:number=Math.ceil(Math.random()*100);
    let enemyDamage:
}

animationDisplay();
