/*Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.*/


/*MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.*/

/*
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.*/

/*
MILESTONE 3:
Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile, raffinando la parte di HTML e CSS in modo da renderla esteticamente gradevole.*/

const formEl = document.getElementById('train-ticket')
const distEl = document.getElementById('distance-input')
const ageEl = document.getElementById('age-input')
const nameEl = document.getElementById('name-input')
//const btnEl = document.getElementById('btn-t')

const nameCard = document.querySelector('.card .name-card')
const distanceCard = document.querySelector('.card .distance-card')
const ageCard = document.querySelector('.card .age-card')
const priceCard = document.querySelector('.card .price-card')

formEl.addEventListener('submit', function (e) {

    e.preventDefault();
    
    const userChoiceKm = distEl.value
    const userChoiceAge = ageEl.value
    console.log(userChoiceKm, userChoiceAge)

    const price = 0.21;
    const tripPrice = distEl.value * price;
    console.log(tripPrice);

    const discountMinor = 20;
    const discountSenior = 40;

    if (userChoiceAge <= 17) {
        const discountAmountMinor = (tripPrice * discountMinor) / 100;
        const totalPrice = (tripPrice - discountAmountMinor);

        console.log(`il tuo biglietto costa: ${totalPrice.toFixed(2)}€, hai risparmiato ${discountAmountMinor.toFixed(2)}€`);

        ageCard.innerHTML = `Sconto Giovani: -20% (hai risparmiato ${discountAmountMinor.toFixed(2)}€)`
        priceCard.innerHTML = `<b>Costo Totale:</b> <s>${tripPrice.toFixed(2)}€</s> <b> ${totalPrice.toFixed(2)}€</b>`;

    } else if (userChoiceAge >= 65) {
        const discountAmountSenior = (tripPrice * discountSenior) / 100;
        const totalPrice = (tripPrice - discountAmountSenior);
        console.log(`il tuo biglietto costa: ${totalPrice.toFixed(2)}€ hai risparmiato ${discountAmountSenior.toFixed(2)}€`);
        ageCard.innerHTML = `Sconto Anziani: -40% (hai risparmiato ${discountAmountSenior.toFixed(2)}€)`
        priceCard.innerHTML = `<b>Costo Totale:</b> <s>${tripPrice.toFixed(2)}€</s> <b> ${totalPrice.toFixed(2)}€</b>`;

    } else {
        console.log(`Il tuo biglietto costa: ${tripPrice.toFixed(2)}€`);
        ageCard.innerHTML = ``
        priceCard.innerHTML = `<b>Costo Totale:</b> ${tripPrice.toFixed(2)}€`;
    }

    nameCard.innerText = `${nameEl.value.toUpperCase()}`
    distanceCard.innerHTML = `La tratta valida per questo biglietto è di ${distEl.value}Km`
    
 })

 /*function ticketToggle() {
    const cardToggle = document.getElementById('card');
    if (cardToggle.style.display === "none") {
        cardToggle.style.display = "block";
    } else {
        cardToggle.style.display = "none";
    }
  }

  btnEl.addEventListener('click', ticketToggle);*/


