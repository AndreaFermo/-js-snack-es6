/**********************
Snack 3
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array foreach o filter.
***********************/


const citta = ['bari', 'brindisi', 'foggia', 'lecce', 'taranto'];
const cittaNuove = [];

prova(citta, 2, 5)

console.log(cittaNuove)

function prova (array, a, b) {
    array.filter((element, index) => {
        if (index > a && index < b) {
            cittaNuove.push(element)
        }
    }
    )
}

