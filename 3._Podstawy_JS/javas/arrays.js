document.getElementById('but1').addEventListener('click', function () {
    location = location // W ten sposób możemy odświeżyć stronę za pomocą skryptu javascript
})
// Aby lepiej się pracowało wpiszemy sobie jakiś tekst na stronę do Wy na to??
var nowyTekst = document.getElementById('tekst'); // Używamy selektora, aby 'wyrwać' ze strony interesujący nasz element. 
var podpis = document.getElementById('opis'); // deklarujemy drugą zmienną
nowyTekst.innerText = ("Włącz konsolę 'F12' i do przodu."); // Naedajemy nowemu elementowi tekst.
podpis.innerHTML = ("W ten właśnie sposób użyliśmy skryptu do wypisania tekstu na stronie wraz z jej odświeżeniem nie używając do tego tekstu w kodzie html. ")
// // ARRAY'S -  przykłady.
// // Tworzenia list.
// var lista1 = []; // Jest to przykład pustej listy niejawnej, zadeklarowanej jako zmienna globalna.
// var lista2 = ["wartość1-string"]; // Jest to lista jednoelementowa z elenentem na miescu indexu = 0 - ponieważ numerwowanie/indeksowanie list zaczyna się od 0 a nie od 1.
// console.log(lista2); // Wyświetla całą zawartość listy.
// console.log(lista2[0]); // Wyświetla w konsoli zawartość elementu listy o indeksie 0 - czyli pierwszego elementu.
// var lista3 = ["wartość-string(zapisana w cudzysłowie)", 'wartość-string(zapisana w apostrofach)', 21, 21.3]; // różne zmienne w jednej liście zapisane w różny sposób - zmienna o indexie 2 = int, a o indexie 3 = float.
// console.log(lista3); // Wyświetlenie całej listy
// console.log(lista3[2]); // Wyświetla 3ci element z listy, czyli index [2]
// console.log(lista3[1], lista3[3]); // Wyświetla 1 i 4 element z listy czyli index [1], [3] 

// Inna metoda deklarowania listy = zmiana nazwy listy.
// Deklarujemy tutaj listę 'lista4' o tych samych wartościach, co lista 3, co jest rónoznaczne z zamianą nazwy listy na inną.
var lista4 = new Array("wartość-string(zapisana w cudzysłowie)", 'wartość-string(zapisana w apostrofach)', 21, 21.3);
console.log(lista4[1], lista4[3]); // Wyświetlamy dla sprawdzenia te same elementy co z listy 3ciej.

// // Drobna różnica przy tworzeniu list:
// var lista5 = new Array(6); // W ten sposób rezerwujemy ilość miejsc na początku listy, jeśli ich nie deklarujemym to rezerwuje to puste miejsca.
// console.log(lista5);

// // Działania na listach.
// // 1. Dodawanie elementów do listy:
// lista4.push("Cokolwiek");
// console.log(lista4);

// // Drobna różnica po dodaniu do listy, w której zarezerwowaliśmy kilka miejsc od początku listy.
// lista5.push('Dopiero pierwsza zadeklarowana wartość.')
// console.log(lista5);

// //2. Sprawdzanie długości listy.
// // Wyświetlanie długości listy w konsoli:
// console.log(lista4, lista4.length); // lista4.length pokazuje ile elementów znajduje się w naszej liście. Jest pięcioelementowa
// // Drobna różnica w liście z zarezerwowanymi miejscami.
// console.log(lista5, lista5.length); // Wynik 7 elementów. 6 pustych i jedna wartość.

// //3. Porównanie typów list:
// console.log(typeof (lista4) == typeof (lista5));

//4. Wyświetlanie elementów wraz z ich miejscami/indexami na liście.
lista4.push("pięć", "sześć", "siedem"); // Dodaj element pięć na koniec listy co zwiększyło nam jej zawartość do pięciu elementów.
console.log(lista4);

console.log(lista4[4]); // Wyświetl element piaty z listy ponieważ wiemy, że teraz lista po dodaniu nie ma czterech a pięć elementów.
console.log((lista4[lista4.length - 1])); // Wyświetla ostatni element z listy.

lista4.forEach(function (x, y) { // Dla każdego elementy z listy (forEach)
    console.log(x + " " + y); // W taki sposób jako x funkcja przyjmuje elementy z listy, a jako y wyświtla indexy tych wartości.
})

//5. Usuwanie elementów.
// Do usuwania elementów z listy stosujemy funkcję pop();
// lista4.pop(); // Niezadeklarowany index usuwa ostatni element z listy
// console.log(lista4);


// lista4.shift(); // Usuwa pierwszy element z listy
// console.log(lista4);

//6. Użycie funkcji splice do dodawania lub usuwania elementów z/do konkretnego miejsca listy.
// Dodawanie elementów.
lista4.splice(2, 0, "Nowy1", "Nowy2"); // przed elementem na miejscu indexowym 2 dodaję 2 elementy, nie usuwając niczego.
console.log(lista4);

// Dodanie elementu/ów wraz z usunięciem elementu/ów 
lista4.splice(2, 1, "1 Zamiast Nowy1", "2 Zamiast Nowy1");
console.log(lista4);

// Dodanie takiej samej ilości elementów jak usunięcie.
lista4.splice(4, 2, "1 Zamiast Nowy2", "2 Zamiast 21");
console.log(lista4);
//Opis:
//par1 - od którego indexu
//par2 - ile wykasować
//par3 - ile i jakie wstawić.

//Usuwanie elementów za pomocą metody splice().
lista4.splice(2, 4);
console.log(lista4);


// Opis:
//par1 - od którego indexu włącznie
//par2 - ile elementów usunąć

//7. Zastępowanie danego elementu w liście.
lista4[1] = "Zamieniono na Dwa";
console.log(lista4);

//8. Szukanie indexu elementu, czyli znamy nazwę ale szukamy miejsca gdzie się znajduje.
console.log(lista4.indexOf(21.3)); // Specjalnie szukam intigera, aby go wyrzucić z listy i zostawić na liście same stringi.
//Teraz wiemy, że ta cyfra znajduje się na miejscu o indexie 2 więc możemy teraz używając funkcji splice spokojnie ją usunąć.
console.log(lista4.indexOf("X21.3")); // Dzięki zastowowaniu 'X' dostaliśmy dostaliśmy zwrot -1 czyli ostatnia rzecz z listy, co do końca prawdą nie jest i musimy pamiętać, że musimy zamienić całe wyrażenie na string, jeśli nie jest to string, a intiger.
lista4.splice(2, 1); //Skasowaliśmy dany element
console.log(lista4);
console.log(lista4.indexOf("sześć")); // Tylko do sprawdzenia działania
console.log(lista4.indexOf("Xsześć")); // To zawsze pokazuje -1, nie wiem dlaczego.


//9. Łączenie elementów i Sortowanie listy
//a) Wzięliśmy intigery ponieważ sortowanie lepszse jest dla liczb kolejnych lub wyrazó zaczynajacych się zgodnie z literami alfabetu a nie rozrzuconymi, najjpierw wielkie litery potem małe.

lista6 = [4, 2, 7, 6];
lista7 = [1, 8, 3, 5];
//b) Łączenie list:
var x = lista6.concat(lista7); // Wzięliśmy to pod zmienną aby łatwiej było wrzucić do konsoli.
console.log(x); // wyświetlamy do sprawdzenia tylko.

// Można jednak również łączyć listy o różnych typach danych
lista8 = [4, 2, "Siedem", 6];
lista9 = ['jeden', "Osiem", 3, "PIĘĆ"];
var y = lista8.concat(lista9);
console.log(y);


//c) Sortowanie listy
console.log(x.sort()); //Sortuje elementy listy.
console.log(x.reverse()); //Odwraca kolejność elementów listy - czyli sortuje w drugą stronę.
console.log(y.sort());
console.log(y.reverse());

//10. Zamienianie zawartości listy na string
console.log(lista6.toString());
// Jeśli np chcemy zamienić separator elementów listy, możemy uzyć funkcji join.
console.log(lista6.join(" - ")); // Ustawia separator jaki chcdemy pomiędzy elementami.

//11. Wybieranie elementów z listy
//Aby wybrać jakąś grupę elementów z listy używamy funkcji splice().
console.log(y); // Sprawdzamy jaka jest lista.
console.log(y.splice(0, 4)); //Wybieramy elementy od indexu 0 włącznie do elementu o indexie 4 jednak bez niego














