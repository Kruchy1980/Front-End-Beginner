// Zmienne globalne ponieważ lokalne są "let" i używane wewnątrz modułu funkcyjnego, a nie na jego zewnętrz.
var kom1 = "Zdefiniowana"; // jest to zmienna pusta, lecz jeśli ją zdefiniujemy, to możemy będzie ona drukowana w takiej postaci, jak ją zapiszemu.
var myNumber = 6; // Zmienna numeryczna
var myBoolean = true; // Zmienna true/false - binarna
var myPusta = ""; // Zmienna pusta, używana, aby później do niej zapisywać wyniki, jak to uczyniliśmy w poprzednim przykładzie.
var myString = 'Inline\'owe'; // Tak zapisujemy zmienną z apostrofem
var myStringDivided = 'Chciałbym coś powiedzieć \n Ale w nowej linii' // Tak zapisuje się zmienną typu string, którą chcemy umieści w 2 linijkach.
var a = "a", b = 'b', c = 55; // W taki sposób w jednej linii możemy zdefiniować 3 zmienne w jednej linii, a mianowicie używając przecinków
var myGlobal = "Zmienna globalna" // Zmienna, której nie zmienimy w module i powinna być wydrukowana dwukrotnie taka sama
// Wyświetlanie poza-modułowe
console.log('Tutaj zaczynają się zmienne globalne');
console.log(kom1);
console.log(myNumber);
console.log(myBoolean);
console.log(myPusta);
console.log(myString);
console.log(myStringDivided);
console.log(a, b, c);
console.log(myGlobal);
console.log(undef); // undef jest zmienną nigdzie nie zadeklarowaną więc wynikiem będzie undefined
document.getElementById('but2').addEventListener('click', function () {
    // Zmienne lokalne wewnątrz modułu
    let kom1 = "Niezdefiniowana"; // jest to zmienna pusta, lecz jeśli ją zdefiniujemy, to możemy będzie ona drukowana w takiej postaci, jak ją zapiszemu.
    let myNumber = 8; // Zmienna numeryczna
    let myBoolean = false; // Zmienna true/false - binarna
    let myPusta = ""; // Zmienna pusta, używana, aby później do niej zapisywać wyniki, jak to uczyniliśmy w poprzednim przykładzie.
    let myString = 'Grate\'owe'; // Tak zapisujemy zmienną z apostrofem
    let myStringDivided = 'Napiszmy coś \n Ale w nowej linii' // Tak zapisuje się zmienną typu string, którą chcemy umieści w 2 linijkach.
    let a = "d", b = 'c', c = 55; // jak widzimy również deklarując lokalne zmienne możemy użyć kilku deklaracji po przecinkach.
    // Tutaj zajmijmy się wypisywaniem w module
    console.log('Tutaj zaczynają się zmienne lokalne po kliknięciu.');
    console.log(kom1);
    console.log(myNumber);
    console.log(myBoolean);
    console.log(myPusta);
    console.log(myString);
    console.log(myStringDivided);
    console.log(a, b, c);
    console.log(myGlobal);
    console.log(undef);
})
// Zauważmy, że zmienne zostały zmienione za pomocą kliknięcia ponieważ tak mamy zadeklarowane