//Na początku przygotujemy sobie zmienne/ą zawierającą wszystkie buttony, aby podpisywać 

// Stwórzmy zmienną globalną, która jest naszym div'em i będzie przyjmoała wartości w miarę postępów na stronie i będzie informowała nas co zrobiliśmy.
var output = document.getElementById("output");
var output1 = document.getElementById("output1")
// Teraz zaczynamy z treścią nas interesującą.

// 1 rodzaj zmiennej - UNDEFINED.
// Ponieważ chcemy przypisać do przycisku jedną funkcję pokazującą określone działanie na zmiennych to zrobimy kilka zmiennych lokalnych - but1
document.getElementById("but1").addEventListener('click', function () {
    let x; // undefined - nieokreślona - jest to każda zmienna, która nie ma przypisanej określonej wartości - nie tylko liczbowejm ale jakiejkolwiek.
    output1.innerHTML = null; // Chcę wyczyścić pole drugiego zmienianego elementu, więc umieszczam go jako null.
    output.innerHTML = x + " - nie przypisaliśmy wartości do zmiennej x"; //Drukujemy zmienną nirokreśloną więc wyświetli się undefined na ekranie.
})


// Error może pojawić się , jeśli deklarując i wywołując zmienną mieszamy typy, np
document.getElementById("but2").addEventListener('click', function () {
    let x = "one";
    output.innerHTML = x / 5 + " - Not a Number";
    output1.innerHTML = " Mieszajc typy danych czyli np 'x = string' i dzielimy przez 'int, jak w tym przypadku x='one'/5, to otrzymujemy powyższy wynik."
})

// Kolejny error pokaże się nam, gdy będziemy chcieli wypisać nie zadeklarowaną zmienną.
document.getElementById("but3").addEventListener('click', function () {
    // Musimy najpierw zadeklarować zmienną x ponieważ ostatnio zadeklarowana jest zmienną lokalną czyli taką, którą możemy używać tylko w modułach czyli np w funkcjach.
    let x;
    output1.innerHTML = null; // Chcę wyczyścić pole drugiego zmienianego elementu, więc umieszczam go jako null.
    // Weżmy przykład nieistniejącej zmiennej, czyli nie deklarując żadnej zmiennej wywołujemy ją, np.
    if (x == undefined) { // Zmienna x nadal jest undefined, a stworzyłem to tak dziwnie ponieważ inaczej nie mógłbym wstawić w prosty sposób wyświetlającego się komunikatu, który wyświetla się obecnie ponieważ wyświetlał by się tylko komunikat w konsoli.
        output.innerHTML = "Nie zadeklarowaliśmy zmiennej 'y' w ogóle, więc informacja o niej wyświetlana jest w konsoli włącz F12 i przeczytaj.";
        output1.innerHTML = y; // Skoro nie zadeklarowaliśmy w ogóle zmiennej y, to w konsoli wyświetlony zostanie błąd.
    }
})

// Dodawanie zmiennych o różnych typach.
document.getElementById("but4").addEventListener('click', function () {
    let x = "one"; // deklarujemy zmienną lokalną typu string
    let y = 5; // deklarujemy zmienną lokalną typu int - intiger
    output.innerHTML = x + y; // Wykonujemy działanie dodawania dwóch różnych typów zmiennych.
    output1.innerHTML = "Wynik dodawania zmiennych różnego typu jak widzimy łączy tylko te dwie zmienne."
})

// Dodawanie zmiennych różnych typów, a następnie dzielenie przez liczbę.
document.getElementById("but5").addEventListener('click', function () {
    let x = "one"; // deklarujemy zmienną lokalną typu string
    let y = 5; // deklarujemy zmienną lokalną typu int - intiger
    output.innerHTML = x + y / 4; // Wykonujemy działanie dodawania dwóch różnych typów zmiennych.
    output1.innerHTML = "Jak widzimy najpierw jest wykonywany wynik dzielenia pomiędzy dwoma liczbami, a następnie dodany jest string, i zamienione wszystko na string."
})

// Dodawanie zmiennych różnych typów, a następnie dzielenie przez liczbę, gdzie pierwszą zmienną jest liczba, a drugą string.
document.getElementById("but6").addEventListener('click', function () {
    let y = "one"; // deklarujemy zmienną lokalną typu string
    let x = 5; // deklarujemy zmienną lokalną typu int - intiger
    output.innerHTML = x + y / 4; // Wykonujemy działanie dodawania dwóch różnych typów zmiennych.
    output1.innerHTML = "Jak widzimy, cały wynik jest przypisany do NaN czyli Not a Number. \n To samo się stanie, jeśli weźmiemy '(x + y)' / 4; ";
})

//Dodawanie dwóch elementów jednego typu string
document.getElementById("but7").addEventListener('click', function () {
    let x = "Hello "; // deklarujemy zmienną lokalną typu string
    let y = "World"; // deklarujemy zmienną lokalną typu int - intiger
    output.innerHTML = x + y; // Wykonujemy działanie dodawania dwóch różnych typów zmiennych.
    output1.innerHTML = "Dodawamoe elementów tego samego typu umożliwia wykonywanie akcji ich łączenia jeśli są to elementy typu string";
})

// Dodawanie elementów int
document.getElementById("but8").addEventListener('click', function () {
    let x = 7; // deklarujemy zmienną lokalną typu string
    let y = 8; // deklarujemy zmienną lokalną typu int - intiger
    output.innerHTML = x + y; // Wykonujemy działanie dodawania dwóch różnych typów zmiennych.
    output1.innerHTML = "Dodawamoe prowadzi do wykonania poprawnego działania matematycznego jeśli są to elementy typu number.";
})

// Zmienna typu null.
document.getElementById("but9").addEventListener('click', function () {
    let x = null; // deklarujemy zmienną lokalną typu string
    output.innerHTML = x; // Wykonujemy działanie dodawania dwóch różnych typów zmiennych.
    output1.innerHTML = "Zmienna nulljest zmienną nie posiadającą ani właściwosci ani metod. Jest zwracana przez funkdjem które mają zamiar zwrócić nieistniejący obiekt.";
})
