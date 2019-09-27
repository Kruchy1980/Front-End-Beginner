// Możemy dodać funkcję , która w miarę ładowania się strony będzie wykonywała zadane przez nas czynności. Jednak wtedy tqag skryptu musimy umieścić też w headerze strony.
window.addEventListener("load", function () {
    // Jeśli chcemy, aby okno DOM'a wyświetlało się wraz z otwieraniem strony, wrzućmy wcześniej zadeklarowane metody do funkcji wywoływanej podczas ładowania strony.
    console.dir(window);
    console.dir(document);
})
// Metoda niefunkcyjna zapisu, nie ma jednak gwarancji dobrego wykonania, jeli skrypt będzie w nieodpowiednim miejscu.
// Jeśli chcemy za pomocą JS wywołąć elementy DOM'a to możemy to zrobić za pomocą tych dwóch prostych poleceń.
console.dir(window); // Wyświetla w konsoli wszystkie zawartości i parametry okna
console.dir(document); //Wyświetla  wszystkie, nie tylko te, które zimplementowaliśmy zawartość i parametry naszego dokumentu.
