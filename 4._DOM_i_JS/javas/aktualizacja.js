// Aktualizacja obrazka img.
// Najpierw musimy go wyselekcjonowac poprzez wykrycie go na stronie, a nadaliśmy mu id = obrazek czyli w kodzie html.
// Nie trzeba oczywiście przypisywać zmiennej, tylko od razu możemy wpisać ciągiem co ma się stać, co jest dobre jeśli do przycisku lub linku przypisujemy funkje i używamy addEventListener.
// Możemy zmienić zupełnie żródło obrazka lub też możemy np pomniejszyć dany obrazek:
document.getElementById('obrazek').src = "https://images.unsplash.com/photo-1559350296-7f363b66b16a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80"; // Teraz zmieniamy całkowicie źródło obrazka
// document.getElementById('obrazek').src = "https://lorempixel.com/100/100"; // Tutaj zmniejszyliśmy tylko obrazek z tej samej strony.


// Możemy również zmieniac style.
// Styl but1 - pamiętajmy, że wszystkie możliwości styli możemy znależć dzięki poleceniu: console.dir(document.getElementById('but1').style);
// I tak można uczynić z każdym elementem.
document.getElementById('but1').style.backgroundColor = "pink";

// Chcemy aby przycisk nr 2 zmienił kolor po kliknięciu, więc dobrze jest przypisać go najpierw do zmiennej aby potem móc wykonywać na mnim różne operacje.
var przycisk2 = document.getElementById('but2')
// Teraz przypisujemy kolor tła
przycisk2.style.backgroundColor = "crimson";
// Po kliknięciu natomiast będziemy chcieli zmienić kolor tekstu.
przycisk2.onclick = mojaFunkcja; // Należy pamiętać, ze jeśli przywołujemy na kliknięcie daną funkcję, to nie prazywołujemy funkdji tylko jej nazwę.

// I tutaj deklarujemy naszą funkcję:
function mojaFunkcja() {
    przycisk2.style.backgroundColor = "orange";
}

// To samo możemy zapisać trochę inaczej, tzn
//1. Deklarujemy zmienną
var przycisk4 = document.getElementById('but4')
// Następnie chcemy zmienić  tekst i kolor tekstu nie tło więc:

przycisk4.onclick = function () { // Od razu tutaj piszemy funkcję
    przycisk4.innerText = "No teraz to mnie zmieniłeś - tylko po co??;)";
    przycisk4.style.color = "rgb(255, 31, 28)";
}
// Ponieważ najlepiej deklaruje się zmienne na samej górze kodu.
var out = document.getElementById("wyjscie");
// Pobawimy się teraz interakcją z myszką, zacznijmy od obrazka.
var obrazek = document.getElementById('obrazek');
// A tutaj deklarujemy co ma zrobić, gdy przejedziemy po nim myszką.
obrazek.onmouseover = funkcja2;
// Opisuje położenie myszki/kursora.
function funkcja2(e) {
    console.log(e.type); //Opisuje typ operacji, jeśli nie użylibyśmy atrubutu .type to wyświetlałoby położenie myszki w konsoli.
    console.dir(this); // Wyświetla element którego dotyczy akcja.
    this.style.border = "3px dashed green";       // Pamiętajmy, że this jest funkją wbudowaną, która odsyła do elementu, którego dotyczy.
    out.innerHTML = "Wjechałeś kursorem na obrazek w pozycji X !" + e.x; // e.x podaje współrzędną x
}

//Powyższa funkcja lepiej wygląda, gdy użyjemy nie mouseover, a mouseout.
obrazek.onmouseout = funkcja3;
var out = document.getElementById("wyjscie");
function funkcja3(e) {
    console.log(e.type); //Opisuje typ operacji, jeśli ni użylibyśmy atrubutu .type to wyświetlałoby położenie myszki w konsoli.
    console.dir(this); // Wyświetla element którego dotyczy akcja.
    this.style.border = "5px dashed yellow";       // Pamiętajmy, że this jest funkją wbudowaną, która odsyła do elementu, którego dotyczy.
    // Dodajmy jeszcze trochę opisu i wykorzystajmy nasz wolny kontenerek o id wyjscie
    // Najpierw musimy je zadeklarować obojętnie czy w czy poza funkcją, lecz w funkcji o każdej trzeeba, a nie chcemy zaśmieczć.
    out.innerHTML = "Zjechałeś kursorem z obrazka  w pozycji X!" + e.x; // e.x podaje współrzędną x
}

