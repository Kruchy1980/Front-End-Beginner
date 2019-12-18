// Najpierw przygotujmy zmienne, które będziemy chcieli  edytować:
var przycisk2 = document.getElementById('but2');
var przycisk4 = document.getElementById('but4');
var obrazek = document.getElementById('obrazek');
var out = document.getElementById("wyjscie");

// Zakomentujmy ten blok, aby nie mieszać za bardzo choć i tak ze względu na ich umiejscowienie nie mają wpływu na wyświetlanie na stronie ponieważ jak wiemy kod wykonuje się linijka po linijce i w razie powtórzeń jest nadpisywany.
// // Dodawanie parametrów do elementu - w ten sposób się nadpisują
// obrazek.onclick = moja1;
// obrazek.onclick = funkcja2;
// //Dodawanie EventListenera - Event Listenery wykonują się po kolei bez nadpisywania
// obrazek.addEventListener('click', moja1);
// obrazek.addEventListener('click', funkcja2);


// zmienna do Query selektora:
var elementPrzycisk = document.querySelector(".button");
// !!! Zwróćmy uwagę, że użyliśmy querySelektor, a nie QuerySelectorAll, co doprowadziło do tego, że cokolwiek zaplanowaliśmy, będzie przypisane tylko do pierwszego elementu z grupy.
// I wyświetlimy sobie element ten w konsoli.
console.dir(elementPrzycisk);
// Teraz użyjmy querySelectorAll, aby zobaczyć różnicę przy wyświetlaniu elementów o tej samej klasie, tagu, nazwie, zależy co tam wpiszemy.
var elementPrzycisk1 = document.querySelectorAll(".button");
// Wyswietlamy elementy w konsoli:
console.dir(elementPrzycisk1);
// Kolejne z zastosowań querySelectorAll, to możliwość wywoływania kilku różnej nazwy elementów, i robi się to po przecinku,np:
var elementPrzycisk2 = document.querySelectorAll(".button, #obrazek, #wyjscie");
console.dir(elementPrzycisk2);

// Możemy teraz podczepić do tego pętlę, dzięki której przypiszemy każdemu z elementów tej grupy po kolei jakieś zadanie, np:
//for (i = 0; i < elementPrzycisk2.length; i++) {  //Dla każdego elementu "i" w naszej grupie od i=o (czyli pierwszego elementu) do ilości elementOw w grupie elementPrzycisk2.length za każdym razem zwiększamy index "i", który określa element, dodajemy 1, co w efekcie będzie wykorzystywało po kolei elementy z grupy
//  console.log(elementPrzycisk2[i].innerHTML, elementPrzycisk2[i].id); // Wyświetlimy ich zawartość HTML w konsoli.
// // Możemy również przypisać każdemu elementowi po kolei jakieś działanie poprzez tą pętlę.
// elementPrzycisk2[i].addEventListener('click', moja);
//}

// I obrazek aby nie korzystać tylko z lorempixel.com bo wolno działa
document.getElementById('obrazek').src = "https://images.unsplash.com/photo-1559350296-7f363b66b16a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80"; // Teraz zmieniamy całkowicie źródło obrazka

// Chcemy, aby po każdym  kliknięciu na element z grupy, działo się to co w funkcji. 
function moja(e) { // Gdzie e == event Information
    //  console.log(e);
    // Powiedzmy, ze chcielibyśmy wyświetlić identyfikator naszego przycisku, czy jakiegokolwiek elementu należącego do naszej grupy elementów
    console.log(this.id);
    // Poza tym fajnie byłoby, gdyby wyświetlał się w miejscu widzianym przez użytkownika.
    out.innerHTML = "<strong>Własnie kliknąłeś element:<strong> " + this.id + " !"; // Użycie tagu strong pogrubiło nasz napis, aby go lepiej uwidocznić
    this.style.border = "3px solid blue";
}

function moja1() {
    console.log("moja1");
    out.innerHTML = "Kliknięto!";
    this.style.border = "3px solid blue";
}

function funkcja2(e) {
    console.log("funkcja2");
    out.innerHTML = "Wjechałeś kursorem na obrazek w pozycji X !" + e.x; // e.x podaje współrzędną x
    this.style.border = "3px dashed green";       // Pamiętajmy, że this jest funkją wbudowaną, która odsyła do elementu, którego dotyczy.
}


function funkcja3(e) {
    console.log(e); //Opisuje typ operacji, jeśli ni użylibyśmy atrubutu .type to wyświetlałoby położenie myszki w konsoli.
    console.dir(this); // Wyświetla element którego dotyczy akcja.
    this.style.border = "5px dashed yellow";       // Pamiętajmy, że this jest funkją wbudowaną, która odsyła do elementu, którego dotyczy.
    // Dodajmy jeszcze trochę opisu i wykorzystajmy nasz wolny kontenerek o id wyjscie
    // Najpierw musimy je zadeklarować obojętnie czy w czy poza funkcją, lecz w funkcji o każdej trzeeba, a nie chcemy zaśmieczć.
    out.innerHTML = "Zjechałeś kursorem z obrazka  w pozycji X!" + e.x; // e.x podaje współrzędną x
}

// Inne możliwości wyciągania elementów ze strony.
// Wypróbujemy childNodes z element ID czyli jeśli mamy główny kontenet tzw - rodzic, to możemy wybrać sobie dzieci - czyli kontenerki znajdujące się w głównym z nich.
var butCN = document.getElementById("glowny").childNodes; // zadeklarowaliśmy zmienną, która ma wyświetlać elementy dzieci z głównego kontenera.
console.dir(butCN); // Wyświetla wszystkie elementy znajdujący sie w kontenerze rodzić. 
// Możemy to sprawdzić, że te elementy należą do Nodeelements dzięki powyższemu poleceniu.
//Każdy element ma swoje miejsce. Czy to przypisy tekstoew, czy to znaki blankspaces itd.
// Zróbmy tera pętlę, która obejmie wszystkie elementy z kontenera głównego.

for (i = 0; butCN.length; i++) {
    // Możemy pobawić się trochę i za pomocą funkcji warunkowej przypisać odpowiednie zadani tylko do div'ów.
    if (butCN[i].nodeName == "DIV") {
        console.log(butCN[i].id); //NodeName wyświetla nam nazwy danych elementów
        //Możemy dodać jeszcze sobie EventListenera
        butCN[i].addEventListener('click', moja);
    }
}