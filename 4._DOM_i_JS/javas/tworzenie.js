// Najpierw przygotujmy zmienne, które będziemy chcieli  edytować:
var przycisk2 = document.getElementById('but2');
var przycisk4 = document.getElementById('but4');
var obrazek = document.getElementById('obrazek');
var out = document.getElementById("wyjscie");
// Nowe, stare zmienne zadeklarowane po drodze
var elementPrzycisk = document.querySelector(".button");
var elementPrzycisk1 = document.querySelectorAll(".button");
var elementPrzycisk2 = document.querySelectorAll(".button, #obrazek, #wyjscie");
var butCN = document.getElementById("glowny").childNodes;

// Zaczynamy dodawanie elementów z pomocą JavaScript.
// Na samym pocztku wyświetlmy sobie elementy dokumentu w konsoli.
console.dir(document);
// Teraz dodajmy coś do guzika  pierwszego, a mianowicie EventListenera
document.getElementById("but1").addEventListener('click', nowafunkcja);
// I teraz możemy zadeklarować sobie funkcję, którą będziemy chcieli przywołać.

function nowafunkcja() {
    let nowyel = document.createElement("h1"); // Zmienna Tworzymy nowy element h1.
    let nowazawartość = document.createTextNode("Nowy Tag H1 !"); // Zmienna Utwórz tekst - narazie o
    nowyel.appendChild(nowazawartość); // appenChild dodaje zawartość do naszego elementu
    out.appendChild(nowyel); // Dodaje nowy element do strony
    console.log(" :jest Zabawa!") // A tu taki elemencik , który wypisuje do konsoli info, od razu sprawdzamy sobie czy kod się cały wykonał poniewż gdyby był błąd w kodzie to wysypałoby sie i nie ukończyło kodu.
}
