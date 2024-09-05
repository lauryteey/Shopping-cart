// Skjul handlekurven når siden lastes
document.addEventListener('DOMContentLoaded', function () {
    let bagElement = document.querySelector('.bag');
    bagElement.style.display = 'none';

    // Retrieve stored values from localStorage
    antallProdukt1 = parseInt(localStorage.getItem("antallProdukt1")) || 0;
    antallProdukt2 = parseInt(localStorage.getItem("antallProdukt2")) || 0;
    antallProdukt3 = parseInt(localStorage.getItem("antallProdukt3")) || 0;
    antallProdukt4 = parseInt(localStorage.getItem("antallProdukt4")) || 0;
    antallProdukt5 = parseInt(localStorage.getItem("antallProdukt5")) || 0;
    antallProdukt6 = parseInt(localStorage.getItem("antallProdukt6")) || 0;

    // Update the display with the stored values
    bagKnapp();
    updateCartCount();


});

// Vis handlekurven når handlekurv-ikonet klikkes
function visHandlekurv() {
    let bagElement = document.querySelector('.bag')
    bagElement.style.display = 'block'; // Vis handlekurven ved å sette display-stilen til 'block'

    // Legg til en hendelseslytter for klikk på 'bag-ikon', som kaller denne funksjonen
}

document.getElementById('bag-ikon').addEventListener('click', visHandlekurv);

// Kjører localStorage-verdier hvis de ikke eksisterer
if (!localStorage.getItem("antallProdukt1")) localStorage.setItem("antallProdukt1", 0);
if (!localStorage.getItem("antallProdukt2")) localStorage.setItem("antallProdukt2", 0);
if (!localStorage.getItem("antallProdukt3")) localStorage.setItem("antallProdukt3", 0);
if (!localStorage.getItem("antallProdukt4")) localStorage.setItem("antallProdukt4", 0);
if (!localStorage.getItem("antallProdukt5")) localStorage.setItem("antallProdukt5", 0);
if (!localStorage.getItem("antallProdukt6")) localStorage.setItem("antallProdukt6", 0);

let antallProdukt1 = parseInt(localStorage.getItem("antallProdukt1")) || 0;
let antallProdukt2 = parseInt(localStorage.getItem("antallProdukt2")) || 0;
let antallProdukt3 = parseInt(localStorage.getItem("antallProdukt3")) || 0;
let antallProdukt4 = parseInt(localStorage.getItem("antallProdukt4")) || 0;
let antallProdukt5 = parseInt(localStorage.getItem("antallProdukt5")) || 0;
let antallProdukt6 = parseInt(localStorage.getItem("antallProdukt6")) || 0;

const priser = {
    "produkt-1": 4.78,
    "produkt-2": 39.90,
    "produkt-3": 22.90,
    "produkt-4": 32.90,
    "produkt-5": 22.90,
    "produkt-6": 18.60
};

// Variablene for hvert produkt så man kan style produktene separat 
let produkt1Div = document.querySelector("#produkt1-info");
let produkt2Div = document.querySelector("#produkt2-info");
let produkt3Div = document.querySelector("#produkt3-info");
let produkt4Div = document.querySelector("#produkt4-info");
let produkt5Div = document.querySelector("#produkt5-info");
let produkt6Div = document.querySelector("#produkt6-info");
let handlekurv = document.querySelector('.kurven');

function leggtilProdukt(produktId) { //function for å øke antall produktet i handlekurven
    //let antProdukter = parseInt(localStorage.getItem(produktId + "_antall")) || 0;

    if (produktId === "produkt-1") {
        antallProdukt1++
        localStorage.setItem("antallProdukt1", antallProdukt1); //lagrer det oppdaterte antallet i localStorage 
       


    }
    else if (produktId === "produkt-2") {
        antallProdukt2++
        localStorage.setItem("antallProdukt2", antallProdukt2);


    }
    else if (produktId === "produkt-3") {
        antallProdukt3++
        localStorage.setItem("antallProdukt3", antallProdukt3);


    }
    else if (produktId === "produkt-4") {
        antallProdukt4++
        localStorage.setItem("antallProdukt4", antallProdukt4);


    }
    else if (produktId === "produkt-5") {
        antallProdukt5++
        localStorage.setItem("antallProdukt5", antallProdukt5);


    }
    else if (produktId === "produkt-6") {
        antallProdukt6++
        localStorage.setItem("antallProdukt6", antallProdukt6);

    }
    // Øker antall produkt i localstorage.

    bagKnapp(produktId) //kaller function "bagknapp" for oppdatere handlekurven 
    updateCartCount()

}

function fjernProdukt(produktId) { // Function for å sinke antall produktet i handlekurven




    localStorage.getItem("antallProdukt1", antallProdukt1);
    localStorage.getItem("antallProdukt2", antallProdukt2);
    localStorage.getItem("antallProdukt3", antallProdukt3);
    localStorage.getItem("antallProdukt4", antallProdukt4);
    localStorage.getItem("antallProdukt5", antallProdukt5);
    localStorage.getItem("antallProdukt6", antallProdukt6);


    if (produktId === "produkt-1") {
        if (antallProdukt1 > 1) {
            antallProdukt1--; //antallprodukt = 0;
            localStorage.setItem("antallProdukt1", antallProdukt1);

        }
    } else if (produktId === "produkt-2") {
        if (antallProdukt2 > 1) {
            antallProdukt2--;
            localStorage.setItem("antallProdukt2", antallProdukt2);

        }
    } else if (produktId === "produkt-3") {
        if (antallProdukt3 > 1) {
            antallProdukt3--;
            localStorage.setItem("antallProdukt3", antallProdukt3);
        }
    } else if (produktId === "produkt-4") {
        if (antallProdukt4 > 1) {
            antallProdukt4--;
            localStorage.setItem("antallProdukt4", antallProdukt4);
        }
    } else if (produktId === "produkt-5") {
        if (antallProdukt5 > 1) {
            antallProdukt5--;
            localStorage.setItem("antallProdukt5", antallProdukt5);
        }

    } else if (produktId === "produkt-6") {
        if (antallProdukt6 > 1) {
            antallProdukt6--;
            localStorage.setItem("antallProdukt6", antallProdukt6); // Sinker antall produkt i LocalStorage. 
        }
    }

    bagKnapp(produktId);
    updateCartCount();
}

function slettProduktilHandlekurven(produktId) {


    localStorage.getItem("antallProdukt1", antallProdukt1);
    localStorage.getItem("antallProdukt2", antallProdukt2);
    localStorage.getItem("antallProdukt3", antallProdukt3);
    localStorage.getItem("antallProdukt4", antallProdukt4);
    localStorage.getItem("antallProdukt5", antallProdukt5);
    localStorage.getItem("antallProdukt6", antallProdukt6);


    if (produktId === "produkt-1") {
        if (antallProdukt1 > 0) {
            antallProdukt1 = 0; // legger antall til 0 
            localStorage.removeItem("antallProdukt1");

        }
    } else if (produktId === "produkt-2") {
        if (antallProdukt2 > 0) {
            antallProdukt2 = 0;
            localStorage.removeItem("antallProdukt2");


        }
    } else if (produktId === "produkt-3") {
        if (antallProdukt3 > 0) {
            antallProdukt3 = 0;
            localStorage.removeItem("antallProdukt3");
        }
    } else if (produktId === "produkt-4") {
        if (antallProdukt4 > 0) {
            antallProdukt4 = 0;
            localStorage.removeItem("antallProdukt4");
        }
    } else if (produktId === "produkt-5") {
        if (antallProdukt5 > 0) {
            antallProdukt5 = 0;
            localStorage.removeItem("antallProdukt5");
        }
    } else if (produktId === "produkt-6") {
        if (antallProdukt6 > 0) {
            antallProdukt6 = 0;
            localStorage.removeItem("antallProdukt6");
        }
    }

    bagKnapp(produktId);// Oppdaterre display i handlekurven
    updateCartCount()
}

function clearCart() {

    antallProdukt1 = 0;
    antallProdukt2 = 0;
    antallProdukt3 = 0;
    antallProdukt4 = 0;
    antallProdukt5 = 0;
    antallProdukt6 = 0;

    //Sletter alle produktene fra LocalStorage
    localStorage.removeItem("antallProdukt1");
    localStorage.removeItem("antallprodukt2");
    localStorage.removeItem("antallprodukt3");
    localStorage.removeItem("antallprodukt4");
    localStorage.removeItem("antallprodukt5");
    localStorage.removeItem("antallprodukt6");

    bagKnapp(); //Tømmer handlekurven display 
    updateCartCount()
}




function bagKnapp(produktId) {

    // Sletter hele handlekurven og "lager den" på nytt med riktig antall produktet, dette fungerer for å oppdatere antall produkt i handlekurven
    produkt1Div.innerHTML = "";
    produkt2Div.innerHTML = "";
    produkt3Div.innerHTML = "";
    produkt4Div.innerHTML = "";
    produkt5Div.innerHTML = "";
    produkt6Div.innerHTML = "";

    let totalPris = 0;


    // Oppdater telleren av produktet i kurven 
    let produktElement = handlekurv.querySelector(`#${produktId}-count`);
    // Søker etter et element i handlekurven med en ID som samsvarer med produktId kombinert med "-count". 
    // Dette elementet representerer antallet av et bestemt produkt i handlekurven.

    let antProdukter = parseInt(localStorage.getItem(produktId + "_antall"));
    // Henter antallet av det aktuelle produktet fra localStorage ved å bruke nøkkelen produktId + "_antall".
    // Deretter gjør det den hentede verdien fra en streng til et heltall ved hjelp av parseInt-funksjonen.

    if (produktElement) {
        produktElement.textContent = antProdukter;
        // legger bilde av produktet hvis det trenges 

    } else {


        // Hvis antallprodukt1 er større enn 0, handlekurv.innerHTML+= p, antall og img for produkt1
        if (antallProdukt1 > 0) { //Sjekker at antall produktet er større

            produkt1Div.innerHTML += "<img src='../Bilder/Grønnsaker_section/løk_pærer_grønnsaker.jpg'>";
            produkt1Div.innerHTML += "<p>Gul løk</p>"
            produkt1Div.innerHTML += "<p>kr 4,78</p>"
            produkt1Div.innerHTML += "<button id='fjernTil-produkt-1-knapp'>-</button>";
            produkt1Div.innerHTML += "<p>" + antallProdukt1 + "</p>";
            produkt1Div.innerHTML += "<button id='leggTil-produkt-1-knapp'>+</button>";
            produkt1Div.innerHTML += "<button id='slett-produkt-1-knapp'>x</button>";


            document.getElementById('leggTil-produkt-1-knapp').addEventListener('click', function () {
                leggtilProdukt('produkt-1'); //Den legger produkt-1 på nytt i handlekurven
            });

            document.getElementById('fjernTil-produkt-1-knapp').addEventListener('click', function () {
                fjernProdukt('produkt-1'); // Fjerner ett eksemplar av produkt-1 fra handlekurven 
            });

            document.getElementById('slett-produkt-1-knapp').addEventListener('click', function () {
                slettProduktilHandlekurven('produkt-1');
            })

            totalPris += antallProdukt1 * priser["produkt-1"]; //regner total prisen for produkt-1.

            // lag button med javascript. button må ha id eller class
            // setter eventListener som kjører bagKnapp() på knappen

        } else {
            // Dette skjer bare hvis produkt 1 er ikke sant, det vil si hvis produktet er allerede lagt til.
        }
        if (antallProdukt2 > 0) {
            produkt2Div.innerHTML += "<img src='../Bilder/Grønnsaker_section/potet_grønnsaker2.png'>";
            produkt2Div.innerHTML += "<p>Potet</p>"
            produkt2Div.innerHTML += "<p>kr 16,10</p>"
            produkt2Div.innerHTML += "<button id='fjernTil-produkt-2-knapp'>-</button>";
            produkt2Div.innerHTML += "<p>" + antallProdukt2 + "</p>";
            produkt2Div.innerHTML += "<button id='leggTil-produkt-2-knapp'>+</button>";
            produkt2Div.innerHTML += "<button id='slett-produkt-2-knapp'>x</button>";

            document.getElementById('leggTil-produkt-2-knapp').addEventListener('click', function () {
                leggtilProdukt('produkt-2');

            });

            document.getElementById('fjernTil-produkt-2-knapp').addEventListener('click', function () {
                fjernProdukt('produkt-2');
            });

            document.getElementById('slett-produkt-2-knapp').addEventListener('click', function () {
                slettProduktilHandlekurven('produkt-2');
            })

            totalPris += antallProdukt2 * priser["produkt-2"];

        }
        if (antallProdukt3 > 0) {
            produkt3Div.innerHTML += "<img src='../Bilder/Grønnsaker_section/japansk_løk_grønnsaker.png'>";
            produkt3Div.innerHTML += "<p>Vårløk</p>"
            produkt3Div.innerHTML += "<p>kr 22,90</p>"
            produkt3Div.innerHTML += "<button id='fjernTil-produkt-3-knapp'>-</button>";
            produkt3Div.innerHTML += "<p>" + antallProdukt3 + "</p>";
            produkt3Div.innerHTML += "<button id='leggTil-produkt-3-knapp'>+</button>";
            produkt3Div.innerHTML += "<button id='slett-produkt-3-knapp'>x</button>";

            document.getElementById('leggTil-produkt-3-knapp').addEventListener('click', function () {
                leggtilProdukt('produkt-3');
            });

            document.getElementById('fjernTil-produkt-3-knapp').addEventListener('click', function () {
                fjernProdukt('produkt-3');
            });

            document.getElementById('slett-produkt-3-knapp').addEventListener('click', function () {
                slettProduktilHandlekurven('produkt-3');
            });

            totalPris += antallProdukt3 * priser["produkt-3"];

        } else {
            // Dette skjer bare hvis produkt 1 er ikke sant, det vil si hvis produktet er allerede lagt til.
        }
        if (antallProdukt4 > 0) {
            produkt4Div.innerHTML += "<img src='../Bilder/Grønnsaker_section/agurk_grønnsaker.png'>";
            produkt4Div.innerHTML += "<p>Agurk</p>"
            produkt4Div.innerHTML += "<p>kr 32,90</p>"
            produkt4Div.innerHTML += "<button id='fjernTil-produkt-4-knapp'>-</button>";
            produkt4Div.innerHTML += "<p>" + antallProdukt4 + "</p>";
            produkt4Div.innerHTML += "<button id='leggTil-produkt-4-knapp'>+</button>";
            produkt4Div.innerHTML += "<button id='slett-produkt-4-knapp'>x</button>";

            document.getElementById('leggTil-produkt-4-knapp').addEventListener('click', function () {
                leggtilProdukt('produkt-4');
            });

            document.getElementById('fjernTil-produkt-4-knapp').addEventListener('click', function () {
                fjernProdukt('produkt-4');
            });

            document.getElementById('slett-produkt-4-knapp').addEventListener('click', function () {
                slettProduktilHandlekurven('produkt-4');
            });

            totalPris += antallProdukt4 * priser["produkt-4"];

        } else {
            // Dette skjer bare hvis produkt 1 er ikke sant, det vil si hvis produktet er allerede lagt til.
        }
        if (antallProdukt5 > 0) {
            produkt5Div.innerHTML += "<img src='../Bilder/Grønnsaker_section/Brokkoli_grønnsaker.jpg'>";
            produkt5Div.innerHTML += "<p>Brokkoli</p>"
            produkt5Div.innerHTML += "<p> kr 22,90</p>"
            produkt5Div.innerHTML += "<button id='fjernTil-produkt-5-knapp'>-</button>";
            produkt5Div.innerHTML += "<p>" + antallProdukt5 + "</p>";
            produkt5Div.innerHTML += "<button id='leggTil-produkt-5-knapp'>+</button>";
            produkt5Div.innerHTML += "<button id='slett-produkt-5-knapp'>x</button>";

            document.getElementById('leggTil-produkt-5-knapp').addEventListener('click', function () {
                leggtilProdukt('produkt-5');
            });

            document.getElementById('fjernTil-produkt-5-knapp').addEventListener('click', function () {
                fjernProdukt('produkt-5');
            });

            document.getElementById('slett-produkt-5-knapp').addEventListener('click', function () {
                slettProduktilHandlekurven('produkt-5');
            });

            totalPris += antallProdukt5 * priser["produkt-5"];

        } else {
            // Dette skjer bare hvis produkt 1 er ikke sant, det vil si hvis produktet er allerede lagt til.
        }
        if (antallProdukt6 > 0) {
            produkt6Div.innerHTML += "<img src='../Bilder/Grønnsaker_section/Hvitløk_grønnsaker(edit2).jpg'>";
            produkt6Div.innerHTML += "<p>Hvitløk</p>"
            produkt6Div.innerHTML += "<p> kr 18,60</p>"
            produkt6Div.innerHTML += "<button id='fjernTil-produkt-6-knapp'>-</button>";
            produkt6Div.innerHTML += "<p>" + antallProdukt6 + "</p>";
            produkt6Div.innerHTML += "<button id='leggTil-produkt-6-knapp'>+</button>";
            produkt6Div.innerHTML += "<button id='slett-produkt-6-knapp'>x</button>";

            document.getElementById('leggTil-produkt-6-knapp').addEventListener('click', function () {
                leggtilProdukt('produkt-6');

            });

            document.getElementById('fjernTil-produkt-6-knapp').addEventListener('click', function () {
                fjernProdukt('produkt-6');
            });

            document.getElementById('slett-produkt-6-knapp').addEventListener('click', function () {
                slettProduktilHandlekurven('produkt-6');
            });

            totalPris += antallProdukt6 * priser["produkt-6"];

            handlekurv.scrollTop = handlekurv.scrollHeight;
        }

        // Vis totalprisen i handlekurven
        document.querySelector('.total-pris span').textContent = totalPris.toFixed(2) + " kr"; // Den linje gjør regnskapet til en streng med to desimaler ved "toFixed(2)". 
    }
    updateCartCount()
}

// Funksjonen skjuler tilbake handlekurven når man trikker på knappen-tilbak. 
function tilbake() {
    let bagElement = document.querySelector('.bag');
    bagElement.style.display = 'none'; // Skjul handlekurven ved å sette display-stilen til 'none'
}

function updateCartCount() { // Function for å vise at et produkter lagt i handlekurven
    let totalCount = antallProdukt1 + antallProdukt2 + antallProdukt3 + antallProdukt4 + antallProdukt5 + antallProdukt6; // i motsetning til totalpris den teller antall produkter som blir lagret i handlekurven 
    document.querySelector('.item-count').textContent = totalCount; // Oppdaterer den cart count visningen (ikonen som vises ved siden av handlekurv-ikon)
}
