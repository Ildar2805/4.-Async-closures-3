const r1 = require('readline').createInterface(process.stdin, process.stdout);
let n = Math.floor(Math.random() * 10);
let attempts = 1;

function question(quest) {
    return new Promise((resolve, reject) => {
        r1.question(quest, (data) => {
            resolve(data);
        })
    })
}

async function input() {
    while (true) {
        const data = await question(`Попытка № ${attempts}. Введите число от 1 до 10: `);
        if (+data === n) {
            r1.close();
            console.log(`Вы угадали с ${attempts} попытки`);
            break;
        } else if (+data > n) {
            console.log('Введенное число больше загаданного');
        } else {
            console.log ('Введенное число меньше загаданного');
        }
        attempts++;
    }
}

input();