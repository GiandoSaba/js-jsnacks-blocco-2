// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.

const listName = ['Giando', 'Luca', 'Antonio', 'Lucrezia', 'Lucia', 'Sara', 'Nicola', 'Daniele', 'Riccardo', 'Serena', 'Maria'];

const listSurname = ['Rossi', 'Bianchi', 'Verdi', 'Sabato', 'Ferilli', 'Scotti', 'Zerbi', 'Mammuccari', 'De Filippi', 'Desantis', 'Sakara'];

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomName() {
    const randomName = listName[getRndInteger(1,listName.length - 1)];
    const randomSurname = listSurname[getRndInteger(1,listSurname.length - 1)];
    const randomInvited = randomName + ' ' + randomSurname;
    return randomInvited;
}

const numInvite = parseInt(prompt('Quanti invitati avrà la festa?'));
const invited = [];

while (invited.length < numInvite) {
    const invite = getRandomName();
    if (!invited.includes(invite)) {
        invited.push(invite);
    }
}

console.log(invited);