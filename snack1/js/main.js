/**********************
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
***********************/

const bici = [
    {
        nome:'bianchi',
        peso:36
    },
    {
        nome:'atala',
        peso:25
    },
    {
        nome:'olmo',
        peso:45
    }
];

let pesoBiciPiuLeggera = Infinity;
let nomeBiciPiuLeggera;

bici.forEach((elemento) => {
    const {nome, peso} = elemento;
    console.log(peso)
    if (peso < pesoBiciPiuLeggera){
        pesoBiciPiuLeggera = peso;
        nomeBiciPiuLeggera = nome;
    } 
});

console.log(`${nomeBiciPiuLeggera}`)
