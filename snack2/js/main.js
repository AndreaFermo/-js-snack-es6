/**********************
Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
***********************/
let punti=0;
let falli=0;
const squadre = [
    {
        nome:'Bari',
        punti,
        falli
    },
    {
        nome:'Foggia',
        punti,
        falli
    },
    {
        nome:'Lecce',
        punti,
        falli
    }
];

const squadreNew = [];

squadre.forEach((element) => {
    element.punti = generateRandomNumber(1, 10);
    element.falli = generateRandomNumber(1, 30);
    let {nome, falli} = element;
    falli = element.falli;
    const newObject = {nome, falli};
    squadreNew.push(newObject);
});

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) +1) + min;
}

console.log(squadre)
console.log(squadreNew)
 


