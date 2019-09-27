document.getElementById('but1').addEventListener('click', function () {
    location = location // W ten sposób możemy odświeżyć stronę za pomocą skryptu javascript
})
//Zaczniemy od dodania prostego obiektu/słownika.
//1.a. Tworzenie słownika za pomocą poleceń
var mojSłownik = new Object(); // Definiujemy zmienną globalną o nazwie 'mojSłownik'
mojSłownik.firstName = "Jakub"; // Dodajemy kilka danych = to co po kropce to słowo klucz, a wartość to wartość przypisana do słowa klucz
mojSłownik.company = "Dom";
mojSłownik.age = 25;
console.log(mojSłownik);
// Co w  wyniku daje nam takie wyjście:
// {firstName: "Jakub", company: "Dom",       age: 25}
// {   klucz1: wartość1, klucz2: warrość2, klucz3: wartość3}

//1.b. Tworzenie słownika za pomocą zwykłego zapisu.
var mojSłownik1 = { firstName: "Jakub", company: "Dom", age: 25 }; //Co da nam identyczne wyjście co powyższe 3 polecenia.
console.log(mojSłownik1);
// Aby jednak zauważyć działąnie w konsoli, zmieńmy wartości w drugim zapisie i zobaczymy o będzie.
var mojSłownik2 = { firstName: "Eryk", company: "Biuro", age: 33 };
console.log(mojSłownik2);

//2. Wypisywanie w konsoli elementów słownika.
// Aby wyświetlić jakikolwiek element ze słownika w konsoli, nie używamy index'u, lecz używamy słowa klucza.
console.log(mojSłownik['firstName']); // Wyświeli nam w konsoli imię, ponieważ przywołaliśmy je za pomocą słowa klucza.
// I tak możemy sobie przywoływać każdą daną poprzez przywoływani słów kluczy, co jest świetnym rozwiązaniem przy korzystaniu z informacji z baz danych czy też formularzy.
// Wywoływanie możemy zrobić również na inny sposób, a mianowicie sposób użycia mniejszej ilości kodu a co za tym idzi bardziej dynamiczny.
console.log(mojSłownik.firstName); // Co jak widzimy skraca kod nie zmieniając wyjścia 
//Zapis:
//par1<mojSłownik> - skąd pobrać dane
//par2(['firstName'])/.firstName - którą z danych pobrać.

//3. Wykorzystanie słownika w praktyce z wykorzystaniem funkcji 'this.':
// Deklarujemy zmienną 'mojSłownik3', który ma zostać stworzony za pomocą kreatora zdefiniowanego prze użytkownika.
var mojSłownik3 = new mójKreator("Jurek", "BOR", 35);
// Tworzymy funkcję, która ma utworzyć nasz słownik.
function mójKreator(a, b, c) {
    this.firstName = a;
    this.company = b;
    this.age = c;
}
console.log(mojSłownik3);
//Jak zauważyliśmy, trzy opisane przez nas pzarametry zadeklarowane przez nas w funkcji kreator, stworzyły nam słownik o nazwie mójKreator
// Możemy po utworzeniu słownika spokojnie wykorzystywać z niego dane w ten sam sposób,
console.log(mojSłownik3.firstName); //Przywołujemy warość imienia.

//4. Zmiana danych słownika za pomocą kreatora.
// Aby tego dokonać to w kreatorze zmieniamy tylklo wartości, a reszta zostanie zmieniona z automatu podczas tworzenia słownika.
var mojSłownik4 = new mójKreator("Aleksy", "SLD", 50);
console.log(mojSłownik4);






