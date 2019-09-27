//Teraz wywołamy sobie swój element, który nazwaliśmy identyfikatorem but1.
//Przypiszmy zmienną
var mojeWyjscie = document.getElementById('but1');
console.dir(mojeWyjscie); // To polecenie wyświetli nam wszystkie parametry interesującego nas elementu.
// Updatujemy nasz tekst w but1, za pomocą innerHTML.
mojeWyjscie.innerHTML = "NOWY <br> PRZYCISK"; // Używając innerHTML zmieniamy tekst z użytkowaniem tagów języka HTML - tu chodzi akurat o <br>.
// Updatujemy nasz tekst w but3, za pomocą innertext.
var mojeWyjscie1 = document.getElementById('but3');
mojeWyjscie1.innerText = "NOWY <br> PRZYCISK"; // Używajac innerText wyświetlamy tekst dokładnie taki jakim go wpisaliśmy do zmiennej

// Teraz inne selektoryn- zauażmy, że używamy liczby mnogiej.

var mojeWyjscia = document.getElementsByClassName('button'); // Bierzemy wszystkie elementy o klasie button.
console.dir(mojeWyjscia); // Aby sprawdzić w konsoli co z czym i dlaczego:)
// Jeśli  jednak chcemy sZczegółów o jednym tylko elemencie z listy tych, które zaznaczyliśmy to oczywiście użyć możemy indeksowania a mianowicie:
console.dir(mojeWyjscia[2]); // Wyświetli nam informacje tylko i wyłącznie jednym elemencie z listy zaznaczonych, a mianowicie o elemencie na mijscu 3cim ponieważ incex weybraliśmy 2.

// Tak samo możemy potem je modyfikować pojedynczo mimo iż są w grupie, a mianowicie:
mojeWyjscia[1].innerText = "I Tutaj wybraliśmy jeden element z grupy 4-rech";

// Teraz czas na wybranie elementu po nazwie tagu - możemy to robić dlatego, aby nie musieć każdemu elementowi przypisywać klasy czy też identyfikatora ponieważ jak wiemy obciąża to pamięć spowalniając działanie strony.
var mojeTagi = document.getElementsByTagName("div"); // Wybieramy wszystkie elementy o tagu div - czyli w naszym pliku html prawie wszystkie ważniejsze wartości - wsazystkie buttony.
console.dir(mojeTagi); // Jak we wszystkich grupowych selektorach możemy również wybrać jeden element a listy wybranych.
console.dir(mojeTagi[3]);


// Query selektory w Javascript.
var mojSelektor = document.querySelectorAll("div.button"); // Pobieramy wszystkie divy o klasie button, jednak nie pobiera wszystkich divóv tylko te , które mają podnazwę button.
console.dir(mojSelektor); // I tak jak w powyższych przykładach możemy wybrać jeden element a listy za pomocą indexu.
console.dir(mojSelektor[2]);

//Przypsanie do elementu tytułu strony jaki nadaliśmy w head'zie strony.
document.getElementById('wyjscie').innerHTML = document.title;
//Przypisanie adresu URL do elementu:
document.getElementById('wyjscie').innerHTML = document.URL;
//Możemy wybierać sobie jakikolwiek z parametrów, które posiada dany element, a jakie to są, to możemy sprawdzić sobie w konsoli przywołując conxole.dir(element) i rozwijając strzałkę przy elemencie w konsoli.



