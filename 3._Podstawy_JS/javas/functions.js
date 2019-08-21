document.getElementById('but1').addEventListener('click', function () {
    location = location // W ten sposób możemy odświeżyć stronę za pomocą skryptu javascript
})
// Zajmijmy się tworzeniem podstawowych funkcji.
//1. Najpierw przygotowujemy funkję (pustą, czyli bez żadnego argumentu):
function mojaFunkcja() {
    console.log("Wywołana funkcja");
}
//2. Przywołujemy funkcję.
mojaFunkcja();
// Możemy ją przywołać ile razy chcemy i w miejscach które sobie zażyczymy aby przywołać raz zadeklarowaną funkcję, co powoduje potężną minimalizację kodu.
mojaFunkcja();
mojaFunkcja();
mojaFunkcja();

// Jeśli chcemy przywołać funkcję z inną własnąścią, musimy zadeklarować ją przy tworzeniu funkcji,np:
function mojaFunkcja1(a) {
    console.log(a + "Wywołana funkcja " + a + " jest funkcją z argumentem " + a); // tutaj deklarujemy, gdzie powinien być wstawiony argument, może on być wstawiony w kilku miejscach nawet
    console.log(a + " Wywołana funkcja jest poprzedzona argumentem a"); // Lub tylko w jednym miejscu, jednocześnie może być na końcu.

}
// I teraz przywołując funkcję powinniśmy podać jeden argument ze względu na zadeklarowany on został jako argument funkcji.
mojaFunkcja1("Kiedy jest"); // Argumenty wstawione w nawiasach będą wstawiane do naszej funkcji w miejsc przez nas zaedeklarowane przy tworzeniu tej funkcji.
mojaFunkcja1("Przecież to");
mojaFunkcja1("Jak");
mojaFunkcja1('Kiedy');
mojaFunkcja1(); // Tutaj nie mamy zadeklarowanego argumentu więc będzie on wyświetlany jako puste miejsce.'

// Dodanie argumentu który będzie numerował wywołane funkcje:
var x = 0; //Najpierw tworzymy zmienną globalną, która przyjmuje wattość 0, ponieważ chcemy, aby pierwsza funkcja miała wartość 1
var y = 1; // Tę zmienną zwiększamy po wykonamiu funkcji, więc zadeklarowana wartość początkowa musi być taka od której chcemy rozpoczynać, czyli 1
function mojaFunkcja2(a) {
    x++; // Do zmiennej 'x' dodajemy 1po każdym wywołaniu funkcji. Ten zapis równożnaczny jest z zapisem x += 1, co jest równe zapisowi x = x +1.
    console.log(x + a + " Wywołana funkcja " + a + " jest funkcją z argumentem " + a); // Ze względu na to , że deklarujemy tutaj numerowanie, przed pustym argumentem, to przeglądarka bierze to jako wartość nieistniejącą NaN.
    console.log(y + " Wywołana funkcja jest zakończona argumentem " + a); // Lub tylko w jednym miejscu, jednocześnie może być na końcu.
    y++; // Jeśli zadeklarujemy zmienną  po wywołaniu funkcji, to będzie się ona również zwiększała ale zaczynając od 0 w związku z czym musimy zadeklarować wartość początkową 1
}
mojaFunkcja2(" Kiedy jest");
mojaFunkcja2(" Przecież to");
mojaFunkcja2(" Jak");
mojaFunkcja2(' Kiedy');
mojaFunkcja2();

// Stwórzmy funkcje, która wykorzystuje funkcję wbudowaną return.

function ret(a) {
    return a + x; // Ze względu na to, że zadeklarowaliśmy zmienną globalną x, a ostatecznie przyjęła  ona wartość 5, po wykonnych czynnościach poprzedniej funkcji, to do zadeklarowanego argumentu dodajemy 5 i mamy wynik.
}
console.log(ret(3));

// Możemy oczywiście stworzyć funkcję z dwoma lub większą ilością argumentów.
function ret1(a, c) {
    return a ** c; // Ze względu na to, że zadeklarowaliśmy zmienną globalną x, a ostatecznie przyjęła  ona wartość 5, po wykonnych czynnościach poprzedniej funkcji, to do zadeklarowanego argumentu dodajemy 5 i mamy wynik.
}
console.log(ret1(2, 4));
// Możemy sie jeszcze pobawić np:
function ret2(a, c) {
    let z = (a + c) / y; // Specjalnie deklarujemy tylko lokalną zmienną.
    y++;
    return z; // Ze względu na to, że zadeklarowaliśmy zmienną globalną x, a ostatecznie przyjęła  ona wartość 5, po wykonnych czynnościach poprzedniej funkcji, to do zadeklarowanego argumentu dodajemy 5 i mamy wynik.
}
// Za każdym razem ze względu na zwiększającą się wartość y wynik będzie się zmieniał przy tych samych danych nawet.
console.log(ret2(2, 4));
console.log(ret2(2, 4));
console.log(ret2(2, 4));
console.log(ret2(2, 4));
console.log(ret2(2, 4));

//// Powiązania ze słownikami/obiektami:
// Stwórzmy szybki słownik:
var mojSłownik = { firstName: "Henryk", company: "Astek", age: 25 };
// Teraz stwórzmy funkcję, która ma za zadanie zupdateować nasz słownik - a mianowicie dodać do niego jakąś daną np:
function dodaj(h) {  // Zadeklarowanie funkcji, która będzie miała dodawać element do naszego słownika/obiektu
    h.nazwisko = "Kalęda"; // Klucz i wartość którą chcemy dodać
}
console.log(mojSłownik); // Wywołanie słownika
dodaj(mojSłownik); // Wywołanie funkcji dodaj i zwróćmy uwagę, że musimy podać w nawiasach element, który ma ta funkcja ,że tak powiem zaimplementować.
console.log(mojSłownik); // I tu wywołujemy nasz już zupdatowany słownik.
//------------------------------------------------------------------
// Scope w funkcjach, czyli ograniczenia modułów/pudełek.
// Zmienne globalne - działają w i poza modułami:
var g = 1; //Globalna
var gg = "GLOBAL";
function funk() {
    console.log(gg); //Nie drukuje wartości zmiennej globalnej tylko uważa ją za undefined. Poniważ później w kodzie zmieniamy jej wartość.
    // let gg = "LOCAL"; // Wystąpi błąd, ponieważ zmiennej globalnej nie można zmienić na lokalną ot tak
    var gg = "LOCAL"; // Można zmienić jednak jej wartość - Ta zmiana dotyczy dałęj funkcji więc drukowane w funkcji nie przyjmie wartości spoza funkcji mimo iż jest ona globalna.
    console.log(gg); // Wydrukuje nam zmienną zadeklarowaną/zmienioną w funkcji, czyli można powiedzieć lokalną.
}
console.log(gg); // Tutaj przywołując zmienną wydrukuje nam globalną, co dowodzi, że zmieniona wartość zmiennej globalnej gg w funkcji, działa tylko w funkcji.
funk(); // Wywołanie funkcji.
console.log(gg); // Mimo wywołania tej zmiennej poza naszą funkcją nie zmieni wartości zmiennej globalnej ponieważ zmienna globalna działa poza funkcjami i w funkcjach pod warunkiem że nie jest w nich jej wartość zmianiona.
// Należy zapamiętać, że deklarowanie zmiennej w funcji zanim się ją wywoła jest najlepszym rozwiązaniem ponieważ nie będzie wytuacji typu undefined.
function funk1() {
    console.log(gg); //Nie drukuje wartości zmiennej globalnej tylko uważa ją za undefined. Poniważ później w kodzie zmieniamy jej wartość.
    // var gg = "LOCAL"; // Nie zmienimy wartości zmiennej globalnej w module funkcji, więc wywołanie funkcji wywoła zmienną globalną.
    console.log(gg); // Wydrukuje nam zmienną zadeklarowaną/zmienioną w funkcji, czyli można powiedzieć lokalną.
}
// Wszystkie 3 poniższe wywołania będą drukowały tylko zmienną globalną ponieważ nie zmieniliśmy jej w naszej funkcji.
console.log(gg);
funk1();
console.log(gg);
