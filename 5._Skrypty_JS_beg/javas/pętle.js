// W tej części zajmiemy się niektórymi matematycznymi metodami wbudowanymi.
// Najpierw jednak zadeklarujmy sobie zmienne zmieniające się.
var output1 = document.getElementById("output1"); // wynik1 z dziłania na liczbach
var komentarz1 = document.getElementById("komentarz1"); // komentarz do liczb.
var wynik1 = document.getElementById("wynik1"); // Przypisujemy, aby móc zmieniać wyświetlany tekst.
// Zadeklarujmy jeszcze sobie pusty kontener do którego będziemy wrzucać .
var kontener = "";
// Zadeklarujmy jeszcze odświeżanie strony
var refr = document.getElementById("refr");
// Teraz przypiszmy jemu odpowiednią funkcję.
refr.onclick = function () {
    location = location; // Gdy naciśniesz załaduj stronę od początku.
}

// Treść właściwa:

// PĘTLA WHILE
// Najpierw deklarujemy przycisk do którego przypiszemy pętlę 
var but33 = document.getElementById("but33");

// Teraz możemy przypisać pętlę do tego przycisku.
but33.onclick = function () {
    //Deklarujemy sobie napis w kontenerze
    kontener = "Pętla WHILE <br>";
    // deklarujemy sobie zminną lokalną a
    let a = parseFloat(document.getElementById("numA").value); // Deklarujemy aby móc wpisać wartość początkową a , w przeciwnym wypadku pętla by się nie wykonała ponieważ nie byłoby punktu odniesienia, a mianowicie a.
    // Zaczynamy z pętlą while:
    while (a < 20) {  // Dopóki a jest mniejsze od 20, to
        kontener += a + " Element <br>"; // Do kontenerka dodaj a, czyli numer i Element. 
        a++; // Aby była to pętla skończona, to musimy zadeklarować, co ma się stać z a za każdym wykonaniem pętli, ponieważ jeśli tego nie zadeklarujemy, to a będzie miało cały czas tą samą wartość i nigdy się pętla nie zakończy, poniweaż a nie dojdzie do wartości 20.
    }
    output1.innerHTML = kontener;
    komentarz1 = "Jak widzimy do podstawowej wiadomości kontenerea dodzjemy to , co zadeklarowaliśmy w pętli więc mamy wszystko od danego zadeklarowanego a do maksymalnej wartości zadeklarowanej w pętli \n W naszym prazypadku będzie to wartość 19 ponieważ zadeklarowaliśmy, dopóki a będzie mniejsze a nie mniejsze bądź równe 20.";
}

// PĘTLA DO WHILE
// Najpierw deklarujemy przycisk do którego przypiszemy pętlę 
var but34 = document.getElementById("but34");
// Zadeklarujmy jeszcze sobie pusty kontener do którego będziemy wrzucać .
// var kontener = "";
// Teraz możemy przypisać pętlę do tego przycisku.
but34.onclick = function () {
    //Deklarujemy sobie napis w kontenerze
    kontener = "Pętla DO WHILE <br>";
    // deklarujemy sobie zminną lokalną a
    let a = parseFloat(document.getElementById("numA").value); // Deklarujemy aby móc wpisać wartość początkową a , w przeciwnym wypadku pętla by się nie wykonała ponieważ nie byłoby punktu odniesienia, a mianowicie a.
    // Zaczynamy z pętlą do:

    do {  // Jest to specyficzna pętla, ponieważ nie przyjmuje warunków, więc trzeba warunek dodać, a robi się o za pomocą pętli while, którą przywołujemy poza tą pętlą
        kontener += a + " Element <br>"; // Do kontenerka dodaj a, czyli numer i Element. 
        a++; // Aby była to pętla skończona, to musimy zadeklarować, co ma się stać z a za każdym wykonaniem pętli, ponieważ jeśli tego nie zadeklarujemy, to a będzie miało cały czas tą samą wartość i nigdy się pętla nie zakończy, poniweaż a nie dojdzie do wartości 20.
    }
    while (a <= 10)
    output1.innerHTML = kontener;
    komentarz1 = "Jak widzimy Pętla Do jest tylko częsciową pętlą potrzebującą osobnego warunku, dlatego nazywa się pętlą do while.";
}

// PĘTLA FOR - jest pętlą najbardziej popularną i najczęściej spogykaną/używaną
// Najpierw deklarujemy przycisk do którego przypiszemy pętlę 
var but35 = document.getElementById("but35");
// Zadeklarujmy jeszcze sobie pusty kontener do którego będziemy wrzucać .
// var kontener = "";
// Teraz możemy przypisać pętlę do tego przycisku.
but35.onclick = function () {
    //Deklarujemy sobie napis w kontenerze
    kontener = "Pętla FOR <br>";
    // deklarujemy sobie zminną lokalną a
    let aa = parseFloat(document.getElementById("numA").value); // Deklarujemy aby móc wpisać wartość początkową a , w przeciwnym wypadku pętla by się nie wykonała ponieważ nie byłoby punktu odniesienia, a mianowicie a.
    // Zaczynamy z pętlą do:

    for (a = 0; a <= aa; a++) {  // Deklarujemy warunki funkcji pierwszy parametr to wartość początkowa, drugi parametr warunek, i trzeci parametr, co ma się wykonywać po każdorazwym wykonaniu pętli.
        kontener += a + " Element <br>"; // Do kontenerka dodaj a, czyli numer i Element. 
    }
    output1.innerHTML = kontener;
    komentarz1.innerText = "Pętla FOR przyjmuje 3 parametry: \n par1(a=0) - parametr początkowy \n par2(a<=10) warunek\n par3(a++) - co ma się stać po każdorazowym wykonaniu pętli.";
}