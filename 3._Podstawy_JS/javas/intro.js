// // Podstawowy alert - czyli okno wyskakujące ns stronie, z zadeklarowanym przez nas tekstem.

// alert('Właśnie połączyłeś swoją stronę z plikiem .js.');
// ===================================================================

// // Użycie selektora do przywołania elementu do zmiany.

// document.getElementById('but2').addEventListener('click', function () {
//     alert('Właśnie zaimplementowałeś funkcję z pliku .js !');
// })
//======================================================================

// Skompresowany kod javascriptowy, który możemy spokojnie skompresować za pomocą kompresora na stronie internetowej, wygląda następująco:

//alert("Właśnie połączyłeś swoją stronę z plikiem .js."), document.getElementById("but2").addEventListener("click", function () { alert("Właśnie zaimplementowałeś funkcję z pliku .js !") });

// Jak widzimy kod taki zabiera dużo mniej miejsca co powoduje szybsze ładowanie się strony www lecz jednak jest dużo mniej czytelny.
// Można więc używać takiego kodon na produkcji strony, jednak jeśli będziemy mieli zamiar z nim pracować lub będziemy go przesyłali do wglądu, dobrze jest go zdekompresować, co możemy uczynić za pomocą strony codepen.com wczytując kod do js'a i kliknąć Tidy - co zawsze może pomóc:) 
//======================================================================

// Zamiast alertu możemy również użyć za pomocą js elementu nazywanego "prompt".
// Jest to coś w rodzaju inputa w kodzie html.
//prompt("Zidentyfikuj się!"), document.getElementById("but2").addEventListener("click", function () { alert("Właśnie zaimplementowałeś funkcję z pliku .js !") });
//=====================================================================

// Kolejnym z elementów języka javascript jest:
console.log(" Ten komunikat jest z konsoli i wyświetla się w konsoli!");
// Wyświetla się on w konsoli narzędzi developerskich przeglądarek.
// Można traktować go jako 'print()' języków obiektowych, co również pozwala nam wyświetlać zmienną wscześniej zadeklarowaną.
// Przykład:
var kom1 = ""; // Aby zadziałał kod, który uzależniony jest również od 'but1', musimy zadeklarować pustą globalną zmienną.

document.getElementById('but2').addEventListener('click', function () {
    if (kom1 == false) { // Drobna funkcja warunkowa if pozwala nam wprowadzić zależność pomiędzy 'but1', a 'but2'.l 
        let komunikat = prompt('Wpisz tu komunikat, który chcesz aby wyświetlił się w konsoli');
        // w powyższy sposób deklarujemy zmienną lokalną, czyli dotyczącą tylko tej funkcji.
        console.log(komunikat); // w ten sposób wyświetlamy komunikat zawarty w zmiennej, w konsoli przeglądarki.
        alert(komunikat); // Oczywiście ni przeszkadza to wyświetlenia tego samego komunikatu jako alert.
    }
    else {
        console.log(kom1);
    }
})

