import readlineSync from "readline-sync";
import { exec } from 'child_process';

const list = [];

function Todolist() {
    while (true) {

        const options = ['add', 'list', 'remove'];
        let index = readlineSync.keyInSelect(options, 'Type your comand :');

        if (index === -1) return; //cancel

        if (index === 0) { //add
            const task = readlineSync.question('What do you want to do? ');
            task !== "" ? list.push({ task: task, done: false }) : console.log("Nothing added");
        }

        if (index === 1) { //list
            list.length === 0 ? console.log("No itens added yet") : 
            list.forEach(item => item.done === true ?  console.log(`🟢 ${item.task}`) :  console.log(`🔴 ${item.task}`));

            const tasksList = list.map(i => i.task);
            const indexTaskChecked = readlineSync.keyInSelect(tasksList, 'What do you want to check/uncheck?');

            if(indexTaskChecked !== -1){
                const checked = list[indexTaskChecked];
                checked.done = !checked.done;
            }

        }

        if (index === 2){ //remove
            const tasksList = list.map(i => i.task);
            const indexTaskToRemove = readlineSync.keyInSelect(tasksList, 'What do you want to remove?');

            list.splice(indexTaskToRemove, 1);
        }

    }
}


Todolist()