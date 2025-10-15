/*
Descrizione:
Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console. 

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. 
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

MILESTONE 3:
Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile, raffinando la parte di HTML e CSS in modo da renderla esteticamente gradevole.

Nota:
Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.
*/


// chiedere all'utente di inserire tramite prompt chilometri ed età


// definire con variabili discount, prezzo biglietto e prezzo per chilometri



// creare un if condition per determinare quanto costerà il biglietto all'utente in base ai dati inseriti e ai parametri da noi stabiliti


// portiamo il prezzo del biglietto ad avere solo due valori decimali
// const num = ticket.toFixed(2)
// console.log(num);

const age_field = document.getElementById('age_field')
const km_field = document.getElementById('km_field')
const form_el = document.querySelector('form')
const button_el = document.getElementById('button_el')
const result_el = document.getElementById('result')

console.log(age_field, km_field, form_el, button_el, result_el);

form_el.addEventListener('submit', (event) => {
    event.preventDefault();

    const km_runs = parseFloat(km_field.value);
    const age_utent = parseInt(age_field.value);

    let ticket = km_runs * 0.21

    if (age_utent < 18) {
        ticket = ticket * 0.8
        console.log(ticket);
    } else if (age_utent > 65) {
        ticket = ticket * 0.6
        console.log(ticket);
    } else {
        console.log(ticket);
    }

    result_el.textContent = `il prezzo del biglietto è ${ticket.toFixed(2)}`

})












