"use strict";
let play = document.querySelector('.start button');
let startDiv = document.querySelector('.start');
let container = document.querySelector('.container');
play === null || play === void 0 ? void 0 : play.addEventListener('click', startGame);
let playersDiv = document.createElement('div');
playersDiv.classList.add('playersDiv');
let values = [];
function startGame() {
    if (container) {
        let startInput = document.querySelector('.start input');
        let nplayer = +(startInput === null || startInput === void 0 ? void 0 : startInput.value);
        container.innerHTML = '';
        container === null || container === void 0 ? void 0 : container.appendChild(playersDiv);
        for (let i = 1; i < (nplayer + 1); i++) {
            createPlayer(i);
        }
        let nextBtn = document.createElement('button');
        nextBtn.innerHTML = 'CONFERMA';
        container.appendChild(nextBtn);
        nextBtn.addEventListener('click', () => {
            for (let i = 1; i < (nplayer + 1); i++) {
                getValue(i);
            }
            let random = generateNumber();
            values.forEach(ele => {
                ele.difference = Math.abs(random - ele.number);
            });
            if (container) {
                container.innerHTML = '';
                values.sort((a, b) => (a.difference - b.difference));
                console.log(values);
                let h3 = document.createElement('h3');
                h3.innerHTML = 'Il numero da indovinare era ' + random;
                let h4 = document.createElement('h4');
                let winnerh2 = document.createElement('h2');
                h4.innerHTML = 'Classifica Finale';
                let ol = document.createElement('ol');
                container.appendChild(h3);
                container.appendChild(winnerh2);
                container.appendChild(h4);
                container.appendChild(ol);
                let vincitore = values.find(player => (player.difference === 0));
                if (vincitore) {
                    winnerh2.innerHTML = vincitore.name + ' ha vinto!!';
                }
                else {
                    winnerh2.innerHTML = 'Purtroppo nessuno ha indovinato il numero esatto';
                }
                values.forEach(player => {
                    let li = document.createElement('li');
                    li.innerHTML = player.name + '  (' + player.number + ')';
                    ol.appendChild(li);
                });
            }
        });
    }
}
function createPlayer(i) {
    let playerDiv = document.createElement('div');
    playerDiv.classList.add('player');
    let playerTitle = document.createElement('h2');
    playerTitle.innerHTML = 'Giocatore ' + i;
    let playerName = document.createElement('input');
    playerName.setAttribute('type', 'text');
    playerName.setAttribute('placeholder', 'Name');
    playerName.setAttribute('id', 'player' + i);
    let h3 = document.createElement('h3');
    h3.innerHTML = 'Numero da 1 a 100';
    let playerNum = document.createElement('input');
    playerNum.setAttribute('id', 'number' + i);
    playerNum.setAttribute('type', 'number');
    playerNum.setAttribute('min', '1');
    playerNum.setAttribute('max', '100');
    playersDiv === null || playersDiv === void 0 ? void 0 : playersDiv.appendChild(playerDiv);
    playerDiv.appendChild(playerTitle);
    playerDiv.appendChild(playerName);
    playerDiv.appendChild(h3);
    playerDiv.appendChild(playerNum);
}
function getValue(i) {
    let playername = document.querySelector('#player' + i);
    let playernum = document.querySelector('#number' + i);
    let player = {
        id: i,
        name: playername.value,
        number: +playernum.value,
        difference: 0,
    };
    values.push(player);
}
function generateNumber() {
    let randomNum = Math.random() * 100;
    randomNum = Math.floor(randomNum);
    return randomNum;
}
