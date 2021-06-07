import readlineSync from "readline-sync";
import { exec } from 'child_process';

const list = [];

function Todolist() {
    while (true) {

        const options = ['add', 'list', 'remove'];
            let index = readlineSync.keyInSelect(options, 'Type your comand :');

        if (index === 0) {
            const task = readlineSync.question('What do you want to do? ');
            list.push({ task: `🔴 ${task}`, done: false });

            if (index === 1) {
                console.log("aqui")
                if (list.length > 0) {
                    console.log("oi")
                } else { console.log("no task added yet"); }
            }

        }
    }
}

Todolist()