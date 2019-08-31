// Na samym początku zadeklarujemy sobie zmienne elementów, które będą się zmieniały na naszej stronie.
// Niestety tylko to co ma się wypisywać możemy zadeklarować globalnie, a zmienne, które wpisujemy do inputów, musimy przywoływać lokalnie.
// var a = document.getElementById("numA").value; // liczba A a mianowicie jej wartość
// var b = document.getElementById("numB").value; // liczba B a mianowicie jej wartość
// var ta = document.getElementById("textA").value; // text A a mianowicie jej wartość
// var tb = document.getElementById("textB").value; //  text B a mianowicie jej wartość
var output = document.getElementById("output"); // wynik z dziłania na liczbach
var output1 = document.getElementById("output1"); // wynik z działania na stringach
var komentarz = document.getElementById("komentarz"); // komentarz do liczb
var komentarz1 = document.getElementById("komentarz1"); // komentarz do stringów

// Teraz jak już mamy zadeklarowane zmienne, które będą się zmieniały w miarę wykonywania działąń na stringach, możemy przypisać je teraz do odpowiednich przycisków i pododawać odpowiednie eventListenery.
document.getElementById("but1").addEventListener("click", function () {
    //Zmienne, które wpisujemy w inputach, powinny znajdować się w funkcji , a nie poza nią w związku z tym musimy deklarować zminne lokalne, w przeciwnym razie updatowanie inputów nie zaktualizuje nam wyniku.
    let a = document.getElementById("numA").value; // liczba A a mianowicie jej wartość
    let b = document.getElementById("numB").value;
    output.innerHTML = (a + b);
    output.style.backgroundColor = 'orange';
    komentarz.innerText = "Jak widzimy przed zdefiniowaniem liczb, jako int , lizczby te traktowane są jako stringi i nie wykonują się działania matematyczne."
    let ta = document.getElementById("textA").value; // text A a mianowicie jej wartość
    let tb = document.getElementById("textB").value;
    output1.innerHTML = (ta + tb);
    output1.style.backgroundColor = 'pink';
    komentarz1.innerText = "Stringi natomiast dodawane są jak to stringi. Pamiętajmy, że aby wpisując tekst chcielibyśmy mieć spacje, to powinniśmy uwzględnić to we wpisywanym tekście."
})

// Drugim sposobem, jest przywoływanie funkcji, bez użycia EventListenera.
var but2 = document.getElementById("but2");

// Teraz definiujemy, co chcemy aby przycisk nam robił

but2.onclick = dodajliczby;

// Teraz utworzymy daną funkcję  dodaj.

function dodajliczby() {
    // Aby dodać liczby, musimy zmienić przywoływane elementy na intiger, a robimy to za pomocą metody "parseInt", lub "parseFloat"- jeśli chodzi o liczby zmiennoprzecinkowe w następujący sposób.
    let a = parseInt(document.getElementById("numA").value); // liczba A a mianowicie jej wartość
    let b = parseInt(document.getElementById("numB").value);
    output.innerHTML = a + b;
    output.style.backgroundColor = "orange";
    komentarz.innerHTML = "Dodawanie wypadło pozytywnie."
    let ta = parseInt(document.getElementById("textA").value);
    let tb = parseInt(document.getElementById("textB").value);
    output1.innerHTML = (ta + tb);
    output1.style.backgroundColor = 'pink';
    komentarz1.innerText = "A to się stanie, gdy z daną metodą 'parseInt, lub parseFloat' będziemy chcieli połączyć stringi"
}

// Kilka ćwiczeń jeśli chodzi o operatory:
// Deklarujemy kolejny przycisk
var but3 = document.getElementById("but3");
// Przypiszmy funkcję do przycisku
but3.onclick = function () {
    let ta = document.getElementById("textA").style.display = "none"; // kasujemy możliwość edytowania wartości elementu input
    let tb = document.getElementById("textB").style.display = "none"; // kasujemy możliwość edytowania wartości elementu input
    // Deklarujemy zmienne w trochę inny sposób
    // Deklarujemy tylko inputy
    let a = document.getElementById("numA");
    let b = document.getElementById("numB");
    // Deklarujemy wartości wpisane do inputów, w sposób zajmujący mniej pamięci.
    // Musimy jednak zmienić ich nazwy, ponieważ jeśli będziemy je nadpisywać, to będzie wyskakiwał błąd, ponieważ nie będą rozpoznawalne.
    let aa = parseInt(a.value);
    let bb = parseInt(b.value);
    aa++; // Sprobujemy pododawać do wartości po jeden
    bb--; // Od wartości b spróbójmy odjąć po jeden
    // Teraz tylko deklarujemy zmienne, aby przyjmomwały wartości aktualizowane, czyli a +1 i b - 1.
    a.value = aa;
    b.value = bb;
    output.innerHTML = (aa + bb); // Sumujemy obie liczby, co przy założonych parametrach będzie dawało nam zawszze ten sam wynik.
    komentarz.innerText = "Jak widzimy wartości zmieniają się wedle zastosowanych operatorów w funkcji, a mianowicie do pierwszej liczby dodajemy wartość 1, a od b odejmyjemy wartość 1 a następnie sumujemy te liczby, co daje wciąż ten sam wynik."
    output1.innerHTML = "Nie dotyczy.";
    komentarz1.innerText = "Nie przypisaliśmy do stringów żadnych funkcji więc w wyniku nic się nie zmienia. Ten przycisk odnosi się tylko do numerów/liczb/cyfr.";
}

// Jest oczywiście dużo więcej operatorów, które możemy użyć na liczbach głównie ale i na stringach tak samo.
// Zajmijmy się teraz zmianą kolorów pod przyciskiem czwartym
// Najpierw deklaracja przycisku.
var but4 = document.getElementById("but4");
// Musimy również zadeklarować nasz nowy element, a mianowicie naszą listę.
var lista = document.getElementById("lista"); // deklarujemy naszą listę sobie.
// I jeszcze zadeklarujmy sobie zmienną, która będzie zawierała nasze elementy li, aby łatwiej przypisywać potem kolory.
var elListy = lista.getElementsByTagName("li");
// Dla sprawdzenia wymieńmy sobie te elementy w konsoli
console.log(elListy); // Wyświetlamy sobie elementy listy w konsoli.
// Teraz aby każde z elementów listy przyjmowało inny kolor, powinniśmy ubrać to w pętlę.
but4.onclick = function () {
    for (var i = 0; i <= elListy.length; i++) {
        // Sprawdzamy w konsoli po kolei nasze elementy z listy
        console.log(elListy[i]);
        // Przypisujemy teraz wszystkim elementom z listy ten sam kolor, np żółty - dla zabawy tylko, ponieważ chcemy aby każdy element przyjmował inny kolor.
        elListy[i].style.backgroundColor = "yellow";
    }
}

// Dodając instrukcję warunkową, możemy np  nadać inny kolor co drugiemu elementowi.
// Najpierw deklarujemy nowy przycisk.
var but5 = document.getElementById("but5");
// Ze względu na to, że wcześniej zadeklarowaliśmy  elementy listy jako zmienną lokalną, teraz możemy je po prosty użyć jako element funkcji.
but5.onclick = function () {
    for (var i = 0; i <= elListy.length; i++) { // Poprzednia pętla, która wybiera nam wszystkie elementy z listy
        if (i % 2 == 0) { // Tutaj tworzymy funkcję warunkową, która wybierze nam elementy parzyste, którym nadamy inne kolory, niż nadane wcześniej. Ze względu na to, że nie kasujemy wartości przycisku numer 4, jednak warunkiem jest użycie przycisków w konkretnej kolejności
            elListy[i].style.backgroundColor = "green"; // Parzystym indexom włącznie z 0 przypisujemy kolor zielony.
        }
    }
}


// Zmaina kolorów  elementów listy.
// NAjpierw dklarujemy jak zwykle przycisk
var but6 = document.getElementById("but6");
// Aby wykorzystać zmianę kolorów musimy najpierw zadeklarować funkcję generującą różne kolory.
function getRandomColor() {
    let letters = '0123456789ABCDEF'; // Deklarujemy zmieną, która zawiera znaki systemu 16-stkowego, którym rónież możemy opisywać kolory
    let color = '#'; // Skoro kolory w systemie 16-stkowym zapisujemy poprzedzając '#' to deklarujemy to jako zmienną stałą
    for (var x = 0; x < 6; x++) { // Robimy pętlę, dla 6ściu znaków  opisujących kolor w systemie szestnastkowym 
        color += letters[Math.floor(Math.random() * 16)]; // Do znaku stałego '#' dodajemy podstawę matematyczną Mth.floor, która zwraca nam największą liczbę całkowitą mniejszą lub równą danej, a następnie losujemy randomowo, zwracając jedną z 16 zadeklarowanych znaków systemu 16stkowego. 
    }
    return color; // Zwracamy kolor
}


// Na klkiknięcie  zmieniają się kolory wszystkich elementów naszej listy
but6.onclick = function () {
    // Robimy pętlę, która po kolei będzie przyjmowała kolejne elementy  indeksu
    for (i = 0; i < elListy.length; i++) {
        // Wraz ze zmianą elementu dodajemy losowy kolor do elementu.
        elListy[i].style.backgroundColor = getRandomColor();
    }
}


/// Warunkowe operatory trójskładnikowe.
// Załóżmy, że chcemy wyświetlić sobie status danych elementów, a możemy to zrobić w następujący sposób
// zadeklarujmy guzik pod którym chcemy to wrzucić:
var but7 = document.getElementById('but7');
//Deklarujemy zmienną w funkcjim którą chcemy przywoływać, zby zadziałało:
// i prazypisujemy funkcję jako działąjącą pod klikiem.

but7.onclick = function status() {
    // zadeklarujmy sobie aby zmienić trochę tekst by pasował do tego co chcemy:
    let string = document.getElementById("string"); // zadeklarowaliśmy sobie element aby go zmienić w miarę potrzeby
    // I jeszcze zadeklarujemy jeden tekst, a mianowicie wynika na status zamienimy.
    let liczba = document.getElementById("liczba"); // Zadeklarowaliśmy sobie kolejny tekst, który zmienimy w miarę tego co 
    // deklarujemy zmimennek, które mają zniknąć ponieważnie będą potrzebne
    let ta = document.getElementById("textA").style.display = "none"; // kasujemy możliwość edytowania wartości elementu input
    let tb = document.getElementById("textB").style.display = "none";
    // deklarujemy zmienne, których ma to dotyczyć
    let a = parseInt(document.getElementById("numA").value); // liczba A a mianowicie jej wartość
    let b = parseInt(document.getElementById("numB").value);
    string.innerText = "STATUS:"
    liczba.innerText = "WYNIK:"
    // I tu jeszcze zmienimy trocjhę to co chcemy uwidocznić, a mianowicie wynik ze stringów na wynik
    // Tutaj deklarujemy zmienną lokalną:
    let status = (a > b) ? "A jest większe od B" : "B jest większe od A"; // (a>b)- określamy warunek zmiennej,  '?'- jeśli prawda to  "komunikat1" ':'- jeśli nie, to "komunikat2" 
    // I teraz, zbyśmy wiedzieli o co chodzi to ją przywoływujemy.
    output1.innerHTML = status;  // Przywoływujemy to co chcemy przywołać, z mainowicie status.
    output.innerHTML = ("A = " + a + ", B = " + b); // Chcemy poznać wynik, czyli w naszym przypadku zmienne przypisane do odpowiednich miejsc.
}

// Operatory logiczne, są często używane, jeśli będziemy działali na kilku zmiennych, od którychc będzie zależał wynik.
// zadeklarujmy guzik pod którym chcemy to wrzucić:
var but8 = document.getElementById('but8');
//Deklarujemy zmienną w funkcjim którą chcemy przywoływać, zby zadziałało:
// i prazypisujemy funkcję jako działąjącą pod klikiem.

but8.onclick = function status() {
    // zadeklarujmy sobie aby zmienić trochę tekst by pasował do tego co chcemy:
    let string = document.getElementById("string"); // zadeklarowaliśmy sobie element aby go zmienić w miarę potrzeby
    // I jeszcze zadeklarujemy jeden tekst, a mianowicie wynika na status zamienimy.
    let liczba = document.getElementById("liczba"); // Zadeklarowaliśmy sobie kolejny tekst, który zmienimy w miarę tego co 
    // deklarujemy zmimennek, które mają zniknąć ponieważnie będą potrzebne
    let ta = document.getElementById("textA").style.display = "none"; // kasujemy możliwość edytowania wartości elementu input
    let tb = document.getElementById("textB").style.display = "none";
    // deklarujemy zmienne, których ma to dotyczyć
    let a = parseInt(document.getElementById("numA").value); // liczba A a mianowicie jej wartość
    let b = parseInt(document.getElementById("numB").value);
    string.innerText = "A || B:"
    liczba.innerText = "A && B:"
    // I tu jeszcze zmienimy trocjhę to co chcemy uwidocznić, a mianowicie wynik ze stringów na wynik
    output1.innerHTML = a || b;
    output.innerHTML = a + " ; " + b; // Chcemy poznać wynik, czyli w naszym przypadku zmienne przypisane do odpowiednich miejsc.
    komentarz.innerText = "Jak widzimy operator && wyświetla obie deklarowane wartości, a jeśli dodamy więcej łącząc tym operatorem łączymy wartości  czy też warunki itd.";
    komentarz1.innerText = "Jeśli użyjemy operatora || to wyświetlana będzie albo jedna albo druga wartość.";
}

// Lepiej będzie to uwidocznione, jeśli zastosujemy boolean.

// zadeklarujmy guzik pod którym chcemy to wrzucić:
var but9 = document.getElementById('but9');
//Deklarujemy zmienną w funkcjim którą chcemy przywoływać, zby zadziałało:
// i prazypisujemy funkcję jako działąjącą pod klikiem.

but9.onclick = function status() {
    // zadeklarujmy sobie aby zmienić trochę tekst by pasował do tego co chcemy:
    let string = document.getElementById("string"); // zadeklarowaliśmy sobie element aby go zmienić w miarę potrzeby
    // I jeszcze zadeklarujemy jeden tekst, a mianowicie wynika na status zamienimy.
    let liczba = document.getElementById("liczba"); // Zadeklarowaliśmy sobie kolejny tekst, który zmienimy w miarę tego co 
    // deklarujemy zmimennek, które mają zniknąć ponieważnie będą potrzebne
    let a = document.getElementById("numA").style.display = "none"; // kasujemy możliwość edytowania wartości elementu input
    let b = document.getElementById("numB").style.display = "none";
    // Deklarujemy zmienne do boolean:
    let ta = document.getElementById("textA").value = "true";
    let tb = document.getElementById("textB").value = "false";
    string.innerText = "TA || TB:"
    liczba.innerText = "TA && TB:"
    // I tu jeszcze zmienimy trocjhę to co chcemy uwidocznić, a mianowicie wynik ze stringów na wynik
    output1.innerHTML = ta || tb;
    output.innerHTML = ta && tb;// Chcemy poznać wynik, czyli w naszym przypadku zmienne przypisane do odpowiednich miejsc.
    komentarz.innerText = "Ze względu na to, że obie wartości ta i tb, powinny mieć tę samą wartość, aby wyszedł wynik true";
    komentarz1.innerText = "Ze względu na to, że obie wartości ta i tb, powinny mieć różną wartość, aby wyszedł wynik true i tak się składa, że jest.";
}

// zadeklarujmy guzik pod którym chcemy to wrzucić:
var but10 = document.getElementById('but10');
//Deklarujemy zmienną w funkcjim którą chcemy przywoływać, zby zadziałało:
// i prazypisujemy funkcję jako działąjącą pod klikiem.

but10.onclick = function status() {
    // zadeklarujmy sobie aby zmienić trochę tekst by pasował do tego co chcemy:
    let string = document.getElementById("string"); // zadeklarowaliśmy sobie element aby go zmienić w miarę potrzeby
    // I jeszcze zadeklarujemy jeden tekst, a mianowicie wynika na status zamienimy.
    let liczba = document.getElementById("liczba"); // Zadeklarowaliśmy sobie kolejny tekst, który zmienimy w miarę tego co 
    // deklarujemy zmimennek, które mają zniknąć ponieważnie będą potrzebne
    let a = document.getElementById("numA").style.display = "none"; // kasujemy możliwość edytowania wartości elementu input
    let b = document.getElementById("numB").style.display = "none";
    // Deklarujemy zmienne do boolean:
    let ta = document.getElementById("textA").value = "false";
    let tb = document.getElementById("textB").value = "false";
    string.innerText = "TA || TB:"
    liczba.innerText = "TA && TB:"
    // I tu jeszcze zmienimy trocjhę to co chcemy uwidocznić, a mianowicie wynik ze stringów na wynik
    output1.innerHTML = ta || tb;
    output.innerHTML = ta && tb;// Chcemy poznać wynik, czyli w naszym przypadku zmienne przypisane do odpowiednich miejsc.
    komentarz.innerText = "Ze względu na to, że obie wartości ta i tb mają tę samą wartość, więc tutaj wynikiem będzie przyjęta wartość false";
    komentarz1.innerText = "Ze względu na to, że obie wartości ta i tb, powinny mieć różną wartość, aby wyszedł wynik true i tak się składa, że jest.";
}