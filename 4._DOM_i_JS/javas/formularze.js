// Zajmujemy się utworzeniem logiki dla formularza walidacyjnego.
// Ruch 1
// Na samej górze definiujemy sobie zmienną globalną, a mianowicie kontenerek div, który będzie wyświetlał komunikaty, jakiekolwiek chcemy.
var output = document.getElementById("output");

//Ruch 2
// Najpierw musimy wyodrębnić element/y które mamy zamiar modyfikować i przypisujemy mu paramrtr onsubmit, który zgodnie z przeznadczeniem, przy kliknięciu przycisku akceptującego , czyli naszego submita, będzie wykonywał poleceniem które jemu przypiszemy - a zrobimy to za pomocą funkcji.
document.getElementById("mojF").onsubmit = function () {
    // Po wykonaniu Ruch'u 3 dodajemy logikę do formularza
    let myName = document
    return false; // Najpierw eliminujemy jakąkolwiek czynność po kliknięciu przycisku submit, aby nie robiło się nic, jeśli nie wypełnimy formulalrza.
}

// Ruch 3
// Dodajemy teraz logikę do kolejnego elementu a mianowicie do przycisku submit.
document.getElementById("submit").onclick = checkForm; // Tu chcemy, aby po kliknięciu na nasz przycisk sprawcdzone z automatu zostały pola forrmularza sprawdzone, więc przypisaliśmy funkcję, którą poniżej zdefiniujemy.

// Definiujemy funkcję, która będzie przywoływana po kliknięciu przycisku submit. 
function checkForm() {
    output.innerHTML = " KLIKNIĘTO !"; // W kontenerze o  id output po kliknięciu przycisku wyświetli się komunikat KLIKNIĘTO !.
}

