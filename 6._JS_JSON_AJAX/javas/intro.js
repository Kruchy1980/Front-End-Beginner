// Kreowanie i przywoływanie danych Json'owskich.

// Przykład użyci minimalizatora kodu Json'owskiego.
// Najpierw generujemy kod Json'owski (na potrzeby obecne użyliśmy generatora , do którego link znajduje się w stópce opisów tego rozdziału).
// Następnie używając jednego z minimizerów kodu doprowadzamy kos Json'owsie do następującej postaci
var daneJson =  // Deklarujemy zmienną 
    // Następnie używając jednego z minimizerów kodu doprowadzamy kos Json'owsie do następującej postaci
    '{"_id":"5d6cf7352803f8ec2c576e5b","index":0,"guid":"8727ac10-9163-48eb-baf0-5f8058e618eb","isActive":false,"balance":"$3,341.19","picture":"http://placehold.it/32x32","age":20,"eyeColor":"green","name":{"first":"Joanne","last":"Welch"}}'; // mamy tutaj postać stringu, co daje nam dość długi/duży obiekt
    // Deklarujemy zmienną, która przyjmie informacje jason'owskie, sparsuje je na plik Jason'owski
console.log(daneJson); // wyświetli w konsoli cały kod Json'owski.
var mody = JSON.parse(daneJson); // Parsujemy powyższy kod jednocześnie zmienaijąc go ze stringu w  dużo mniejszy obiekt.
// I wyświetlimy nasze zadeklarowane dane w konsoli w konsoli
console.log(mody); // wyświetlamy w konsoli sparsowany kod Jsonowski - jak widzimy, różnica w długości nawet tak krótkiego kodu jest przeogromna.

//--------------------------------------------------------
// Za pomocą poniższego zapisu wyciągamy dane  - pojedyncze lub wiele z naszego pliku Jsono'wskiego. 
// To tylko jeden z przykładów, a jak widzimy można to robić za pomocą słów kluczy jak w słowniku, ponieważ dane zapisane w pliku Json'owskim mają rodzaj słownika.
document.getElementById("output").innerHTML = mody.name.first + " " + mody.name.last + " " + mody.age + " years old";
// !!! Należy pamiętać, że samo name nie wystarczy ponieważ jest to obiekt dwu-wartościowy więc musimy podać dokładnie o jaką wartość nam chodzi ponieważ w przeciwnym razie interpretacja przegądarki zgłupieje podając nam wymik tablicy/array
// [objecct, Object], co oznacza że wywołany przez nas słownik jest dwu-elementowy

//-----------------------------------------------------------
// Obiekty wieloelementowe
var daneJsonW =
    '[{"daughter":{"fall":"orange","pitch":"term","science":true,"radio":"struggle","drove":false,"book":"ancient"},"mood":"composed","greater":"innovation","hurried":true,"sing":false,"observe":true},{"daughter":{"fall":"bag","pitch":"hamilton","science":true,"radio":false,"drove":true,"book":"deer"},"mood":"edzio","greater":"twelve","offer":"married","variety":false,"people":true},{"daughter":{"fall":"bagpack","pitch":"isoterm","science":true,"radio":false,"drove":true,"book":"monkey"},"mood":"complex","greater":"spell","offer":"indygo","variety":false,"people":true}]';

console.log(daneJsonW);
var mody1 = JSON.parse(daneJsonW);
console.log(mody1);
document.getElementById("output1").innerHTML = mody1[0].daughter.fall + " " + mody1[2].daughter.book;
// Jak widzimy używamy po to indeksowania aby wybrane byly dzne z odpowiedniego obiektu. ponieważ słowa klucze są te same w każdym z tych  3 obiektów, a może ich być dużo więcej.

// Możemy również użyć pętli do wybierania warotści z obiektów, a robimy to w następujący sposób.
// Najpierw deklarujemy zmienną jako jakiś kontenerek zbierający dane, np:
var mojSejf = "";
// Następnie tworzymy pętlę która będzie wybierała określone elementy z obiektów
for(i=0;i<mody1.length;i++) {
    mojSejf += mody1[i].daughter.pitch + "<br>" + mody1[i].daughter.book + "<br>" + mody1[i].greater + "<br>";
}
document.getElementById("output2").innerHTML = mojSejf;

//===========================================================

// If we prepare jason file for the website we cn than connect this using AJAX./ Jeżeli przygotujemy kod jsonowski w następujący sposób:

// Generujemy kod używając np:
//https://onlinerandomtools.com/generate-random-json

// Następnie kompresujemy go w np:
//https://codebeautify.org/jsonminifier

// Kolejnym krokiem jest sprawdzenie czy kod jest poprawny, a pomoże nam w tym:
// https://jsonlint.com/

// I ostatnim krokiem jest wrzucenie kodu na przeglądarkę za pomocą:
// http://myjson.com/
// Które generuje nam adres emaliow'y, który po otworzeniu wyświetla nam kod Json'owski w przeglądarce.

// Teraz czas na użycie AJAX, który umożliwia nam dostęp do stron internetowych, z interesuje nas strona z kodem jsonowskim
// =========================================================
// możemy utworzyć nowy plik  z rozszerzeniem .json
// Tworzymy zmienną
var a = new XMLHttpRequest(); // Tworzymy zmienną pod którą podczepiamy zapytanie XML Http
a.open("GET", "https://api.myjson.com/bins/1agos9", true); // Ustawiamy połączenie  - co zmieni nam ready state z 0 na 1.Jak zauważyliśmy w tej metodzie użyliśmy naszeto pliku z internetu, a nie utworzonego w osobnym pliku, ponieważ dziwnym trafem nie chciało mi odczytać pliku data.json więc prowadzi to do wniosku że nie jest to najlepszy sposób pozyskania danych więc podaliśmy adres url do naszego jsonow'skiego pliku.
a.send(); // Teraz wysyłamy nasze dane, co zmienia nam ready Status na 4 i powinien nasz json pokazać się w response - do naprawieniam ponieważ coś po drodze pogubiłem.
console.log(a);// Mozemy wydrukować sobie wynik zmiennej w konsoli dla sprawdzenia
//-------------------------------------------------------
//Otrzymywanie Jsona/ pobiereanie/ rządanie za pomocą AJAX - z danych zewnętrznych - czyli naszego pliku przerzuconego do przeglądarki.
var b = new XMLHttpRequest();
b.open("GET", "https://api.myjson.com/bins/hf6o1", true);
b.onreadystatechange = function() { // Sprawdzamy, czy stan się zmieni
    if(this.readyState == 4) { // Jeśli readyState będzie równy 4 czyli plik będzie pobrany, to wtedy,
        var obj = JSON.parse(this.responseText); // Jeśli chcemy wyświetlić format json'owski
        for(i=0;i<obj.length;i++){ // Możemy jak poprzednko stworzyć też pętle dla większej ilości elementów
            mojSejf += obj[i].daughter.book + "<br>" + obj[i].mood + "<br>"; // I wydruk danych pobranych z jasona
        }
        document.getElementById("output3").innerHTML = mojSejf;
        console.log(obj); // Wyświetlimy go w konsoli.
    }
}
b.send();






