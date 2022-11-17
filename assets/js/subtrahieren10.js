const ergebnis = document.getElementById('eingabe');
const ergebnisbtn = document.getElementById('ergebnisbtn');

let subtrahieren10 = {
    "10-1": 9,
    "10-2": 8,
    "10-3": 7,
    "10-4": 6,
    "10-5": 5,
    "10-6": 4,
    "10-7": 3,
    "10-8": 2,
    "10-9": 1,
    "10-10": 0,
    "9-1": 8,
    "9-2": 7,
    "9-3": 6,
    "9-4": 5,
    "9-5": 4,
    "9-6": 3,
    "9-7": 2,
    "9-8": 1,
    "9-9": 0,
    "8-1": 7,
    "8-2": 6,
    "8-3": 5,
    "8-4": 4,
    "8-5": 3,
    "8-6": 2,
    "8-7": 1,
    "8-8": 0,
    "7-1": 6,
    "7-2": 5,
    "7-3": 4,
    "7-4": 3,
    "7-5": 2,
    "7-6": 1,
    "7-7": 0,
    "6-1": 5,
    "6-2": 4,
    "6-3": 3,
    "6-4": 2,
    "6-5": 1,
    "6-6": 0,
    "5-1": 4,
    "5-2": 3,
    "5-3": 2,
    "5-4": 1,
    "5-5": 0,
    "4-1": 3,
    "4-2": 2,
    "4-3": 1,
    "4-4": 0,
    "3-1": 2,
    "3-2": 1,
    "3-3": 0,
    "2-1": 1,
    "2-2": 0,
    "1-1": 0,
};


const gesamt = document.getElementById('gesamtaufgaben');
const richtige = document.getElementById('richtige');
const falsche = document.getElementById('falsche');
const abfrage = document.querySelector('.abfrage');
let countg = 1;
let countr = 1;
let countf = 1;


function nextTask() {
    let obj_keys = Object.keys(subtrahieren10);
    randomTask = obj_keys[Math.floor(Math.random() * obj_keys.length)];
    aufgabe.innerHTML = `${randomTask} = ?`;
    eingabe.value = '';
}


function compare() {

    if (eval(ergebnis.value) == eval(randomTask)) {
        eingabe.value = '';
        gesamt.innerHTML = countg++;
        richtige.innerHTML = countr++;
        abfrage.style.color = 'green';
        text.innerHTML = 'Richtig!';
    } else {
        eingabe.value = '';
        gesamt.innerHTML = countg++;
        falsche.innerHTML = countf++;
        abfrage.style.color = 'red';
        text.innerHTML = 'Falsch!';
    }
    nextTask();


}

const resetbtn = document.getElementById('reset');

function resetValue() {
    gesamt.innerHTML = 0;
    richtige.innerHTML = 0;
    falsche.innerHTML = 0;
    countg = 1;
    countr = 1;
    countf = 1;
    text.innerHTML = '';
}
resetbtn.addEventListener('click', resetValue);