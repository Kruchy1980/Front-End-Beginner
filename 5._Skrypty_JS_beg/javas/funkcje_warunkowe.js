// W tej części zajmiemy się niektórymi matematycznymi metodami wbudowanymi.
// Najpierw jednak zadeklarujmy sobie zmienne zmieniające się.
var output1 = document.getElementById("output1"); // wynik1 z dziłania na liczbach
var output2 = document.getElementById("output2"); // wynik2 z dziłania na liczbach
var komentarz1 = document.getElementById("komentarz1"); // komentarz do liczb.
var komentarz2 = document.getElementById("komentarz2"); // komentarz do liczb.
var wynik1 = document.getElementById("wynik1"); // Przypisujemy, aby móc zmieniać wyświetlany tekst.
var wynik2 = document.getElementById("wynik2"); // Przypisujemy, aby móc zmieniać wyświetlany tekst.
// Zadeklarujmy jeszcze odświeżanie strony
var refr = document.getElementById("refr");
// Teraz przypiszmy jemu odpowiednią funkcję.
refr.onclick = function () {
    location = location; // Gdy naciśniesz załaduj stronę od początku.
}

// Teraz treść właściwa.

// Funkcja warunkowa if.
// Najpierw zdefiniujmy przycisk, pod który podpiszemy funkcję warunkową
var but26 = document.getElementById("but26");
// Teraz możemy do przyciski przypisać funkcję:
but26.onclick = function () {
    // Najpierw deklarujemy elementy do ustawienia warunku.
    let a = parseFloat(document.getElementById("numA").value);
    let b = parseFloat(document.getElementById("numB").value);
    // teraz robimy podstawową funkcję warunkową:
    if (a == b) {
        wynik1.innerText = "IF: ";
        output1.innerHTML = a + " jest równe " + b; //Pokazując obie zmienne a i b dodajemy drobny komentarz pokazujący o co kaman.
        komentarz1.innerText = "Jak widzimy spełniony został warunek równości, który zadeklarowaliśmy w funkcji warunkowej.";
    }
    wynik2.innerText = "";
    output2.innerHTML = "";
    komentarz2.innerText = "Ze względu na to, że nie zadeklarowaliśmy żadnej wartości, co ma się stać jeśli warunek funkcji nie zostanie spełniony, to funkcja ta się nie wykomuje, jeśli warunek jest nie spełniony.";
}

// Funkcja warunkowa if, else.
// Najpierw zdefiniujmy przycisk, pod który podpiszemy funkcję warunkową
var but27 = document.getElementById("but27");
// Teraz możemy do przyciski przypisać funkcję:
but27.onclick = function () {
    // Najpierw deklarujemy elementy do ustawienia warunku.
    let a = parseFloat(document.getElementById("numA").value);
    let b = parseFloat(document.getElementById("numB").value);
    // teraz robimy podstawową funkcję warunkową:
    if (a == b) { // Jeśli warunek jest spełniony, to:
        wynik1.innerText = "IF: ";
        output1.innerHTML = a + " jest równe " + b; //Pokazując obie zmienne a i b dodajemy drobny komentarz pokazujący o co kaman.
        output2.innerHTML = " Nie spelniony warunek.";
        komentarz1.innerText = "Jak widzimy spełniony został warunek równości, który zadeklarowaliśmy w funkcji warunkowej, czyli że a jest równe b.";
        komentarz2.innerText = "";
    } else { // Jeśli warunek nie jest spełniony to:
        wynik2.innerText = "Else: "; // W przeciwnym razie wykonaj to:
        output2.innerHTML = a + " jest różne od " + b;
        output1.innerHTML = "Nie spełniony warunek.";
        komentarz1.innerText = "";
        komentarz2.innerText = "Zadeklarowany warunek nie jest spełniony, czyli a jest większe od b, więc wykonuje się drugi człon funkcji, a mianowicie - w przeciwnym razie 'else'.\n Stosujemy ten sposób zapisu funkcji warunkowej, jeśli mamy tylko dwie opcje wyniku. ";
    }
}

// Funkcja warunkowa if, else if.
// Najpierw zdefiniujmy przycisk, pod który podpiszemy funkcję warunkową
var but28 = document.getElementById("but28");
// Teraz możemy do przyciski przypisać funkcję:
but28.onclick = function () {
    // Najpierw deklarujemy elementy do ustawienia warunku.
    let a = parseFloat(document.getElementById("numA").value);
    let b = parseFloat(document.getElementById("numB").value);
    // teraz robimy podstawową funkcję warunkową:
    if (a != b) { // Jeśli warunek jest spełniony, to:
        wynik1.innerText = "IF: ";
        output1.innerHTML = a + " jest różne od " + b; //Pokazując obie zmienne a i b dodajemy drobny komentarz pokazujący o co kaman.
        output2.innerHTML = "Nie spelniony warunek.";
        komentarz1.innerText = "Jak widzimy spełniony został warunek różności, który zadeklarowaliśmy w funkcji warunkowej, czyli że a jest różne od b.";
        komentarz2.innerText = "";
    } else if (a == b) { // Jeśli warunek nie jest spełniony to:
        wynik2.innerText = "Else: "; // W przeciwnym razie wykonaj to:
        output2.innerHTML = a + " jest równe " + b;
        output1.innerHTML = "Nie spelniony warunek.";
        komentarz1.innerText = "";
        komentarz2.innerText = "Zadeklarowany warunek nie jest spełniony, czyli a jest równe od b, więc wykonuje się drugi człon funkcji, a mianowicie - w przeciwnym razie 'else'.\n Stosujemy ten sposób zapisu funkcji warunkowej, jeśli mamy tylko dwie opcje wyniku. \n Jak zauważyliśmy przy zastowowaniu 'else if' musimy podać warunek którego ma nie spełniać w przeciwieństwie do zastosowania 'else', gdie nie musimy podawać żadnego warunku ponieważ jest to zaprzeczenie zadeklarowanego warunku. ";
    }
}

// Funkcja warunkowa if, else if.
// Najpierw zdefiniujmy przycisk, pod który podpiszemy funkcję warunkową
var but29 = document.getElementById("but29");
// Teraz możemy do przyciski przypisać funkcję:
but29.onclick = function () {
    // Najpierw deklarujemy elementy do ustawienia warunku.
    let a = parseFloat(document.getElementById("numA").value);
    let b = parseFloat(document.getElementById("numB").value);
    // teraz robimy podstawową funkcję warunkową:
    if (a < b) { // Jeśli warunek jest spełniony, to:
        wynik1.innerText = "IF: ";
        wynik2.innerText = "Else If: ";
        output1.innerHTML = a + " jest mniejsze od " + b; //Pokazując obie zmienne a i b dodajemy drobny komentarz pokazujący o co kaman.
        output2.innerHTML = "Nie spelniony warunek2.";
        komentarz1.innerText = "Jak widzimy spełniony został warunek, który zadeklarowaliśmy w funkcji warunkowej, czyli że a jest mniejsze od b.";
        komentarz2.innerText = "";
    } else if (a > b) { // Jeśli warunek nie jest spełniony to:
        wynik2.innerText = "Else if: "; // W przeciwnym razie wykonaj to:
        wynik1.innerText = "IF: "; // W przeciwnym razie wykonaj to:
        output2.innerHTML = a + " jest większe od " + b;
        output1.innerHTML = "Nie spelniony warunek .";
        komentarz1.innerText = "";
        komentarz2.innerText = "Zadeklarowany warunek 1 nie jest spełniony, czyli a jest większe od b, więc wykonuje się drugi człon funkcji, a mianowicie - w przeciwnym razie 'else if (<warunek>)'.\n Stosujemy ten sposób zapisu funkcji warunkowej, jeśli mamy tylko dwie opcje wyniku. \n Jak zauważyliśmy przy zastowowaniu 'else if' musimy podać warunek którego ma nie spełniać w przeciwieństwie do zastosowania 'else', gdie nie musimy podawać żadnego warunku ponieważ jest to zaprzeczenie zadeklarowanego warunku. ";
    } else {
        wynik1.innerText = "Else: ";
        wynik2.innerText = "Wynik 2: ";
        output1.innerHTML = a + " jest równe " + b; //Pokazując obie zmienne a i b dodajemy drobny komentarz pokazujący o co kaman.
        output2.innerHTML = "Nie spelnione pozostałe warunki";
        komentarz1.innerText = "Jak widzimy nie spełnione zostały pozostałe warunki, które zadeklarowaliśmy w funkcji warunkowej, czyli że a jest mniejsze/większe od b.";
        komentarz2.innerText = "";
    }
}

// Funkcja warunkowa if, else if.
// Najpierw zdefiniujmy przycisk, pod który podpiszemy funkcję warunkową
var but30 = document.getElementById("but30");
// Teraz możemy do przyciski przypisać funkcję:
but30.onclick = function () {
    // Najpierw deklarujemy elementy do ustawienia warunku.
    let a = parseFloat(document.getElementById("numA").value);
    let b = parseFloat(document.getElementById("numB").value);
    // teraz robimy podstawową funkcję warunkową:
    if (a === b) { // Jeśli warunek jest spełniony, to:
        wynik1.innerText = "IF: ";
        output1.innerHTML = a + " jest równe wartością i typem" + b; //Pokazując obie zmienne a i b dodajemy drobny komentarz pokazujący o co kaman.
        output2.innerHTML = "Nie spelniony warunek.";
        komentarz1.innerText = "Przypisując wartość string i num (int/float) możemy jednocześnie sprawsdzić porównanie wartości i typu danej. \n Dla tego przykładu zmieniliśmy typ jednej z danych na string, co nawet mimo takiej samej wartości nie będzie się zgadzał typ więc ten warunek nigcy nie będzie spełniony w związku z czym ta część funkcji nie będzie wykonywana.";
        komentarz2.innerText = "";
    } else if (a !== b) { // Jeśli warunek nie jest spełniony to:
        wynik2.innerText = "Else if: "; // W przeciwnym razie wykonaj to:
        output2.innerHTML = a + " A jest różne wartością lub typem od B " + b;
        output1.innerHTML = "Nie spelniony warunek.";
        komentarz1.innerText = "I do rowiązania tego problemu wystarczą tylk dwa warunki.";
        komentarz2.innerText = "Zadeklarowany warunek 1 nie jest spełniony, więc wykonuje się drugi warunek funkcji, a mianowicie - w przeciwnym razie 'else'.\n Stosujemy ten sposób zapisu funkcji warunkowej, jeśli mamy tylko dwie opcje wyniku. \n Jak zauważyliśmy przy zastowowaniu 'else if' musimy podać warunek którego ma nie spełniać w przeciwieństwie do zastosowania 'else', gdie nie musimy podawać żadnego warunku ponieważ jest to zaprzeczenie zadeklarowanego warunku. ";
    }
}

// Funkcja warunkowa if, else + operator.
// Najpierw zdefiniujmy przycisk, pod który podpiszemy funkcję warunkową
var but31 = document.getElementById("but31");
// Teraz możemy do przyciski przypisać funkcję:
but31.onclick = function () {
    // Najpierw deklarujemy elementy do ustawienia warunku.
    let a = parseFloat(document.getElementById("numA").value);
    let b = parseFloat(document.getElementById("numB").value);
    // teraz robimy podstawową funkcję warunkową:
    if (a < b && a < 10) { // Jeśli warunek jest spełniony, to:
        wynik1.innerText = "IF: ";
        output1.innerHTML = a + "A jest równe wartością i typem oraz mniejsze od B" + b; //Pokazując obie zmienne a i b dodajemy drobny komentarz pokazujący o co kaman.
        output2.innerHTML = "Nie spelniony warunek.";
        komentarz1.innerText = "Podaliśmy tutaj 2 warunki, które muszą być spełnione, aby ten kawałek kodu się wykonał";
        komentarz2.innerText = "";
    } else if (a > b || a < 5) { // Jeśli warunek nie jest spełniony to:
        wynik2.innerText = "Else if: "; // W przeciwnym razie wykonaj to:
        output2.innerHTML = "Gdy mamy spełnione warunki a > b || a < 5 ";
        output1.innerHTML = "Nie spelniony warunek.";
        komentarz2.innerText = "Zadeklarowany warunek 1 nie jest spełniony, więc wykonuje się ten kod. ";
    } else {
        wynik2.innerText = "Else: "; // W przeciwnym razie wykonaj to:
        output2.innerHTML = "Gdy inne warunki są nie spełnione. ";
        output1.innerHTML = "Nie spelnione waruneki oba.";
        komentarz2.innerText = "Gdy nie spełnione są oba powyższe warunki, to wyświetla się ten komentarz.";

    }
}

/// Warunki przełączne - Switch Conitions:
// Deklaracja naszych 
var but32 = document.getElementById("but32");
// Aby dalej zająć się metodą "SWITCH", musimy stworzyć najpierw pusty kontenerek
var kontenerek = ""; // Pusty kontener do którego możemy potem dopisywać wartości, a następnie dekarujemy sobie przycisk.
but32.onclick = function () {
    let a = document.getElementById("numA").value; // 
    let b = parseFloat(document.getElementById("numB").style.display = "none"); // wyłączamy możliwość wpisywania do drugiego inputa.
    wynik2.innerText = "";
    output2.innerText = "";
    switch (a) { // Rozpoczynamy deklarację naszej instrujkcji przełącznej.
        case "0": // deklarujemy pierwszy przypadek.
            kontenerek = "ZERO"; //deklarujemy awrtość wpisywaną do kontenerka
            break  // Aby wykonywało się to co jest w danym cas'ie, to musimy użyć przerywnika, poniważ w innym wypadku polecenia lecą do kolejnych case'ów.
        case "1":
            kontenerek = "TO DRUGI WPIS!";
            break
        case "2":
            kontenerek = "KONTYNUUJEMY WPISYWANIE";
            break
        case "5":
            kontenerek = "JAKAŚ ZMIANA, ABYŚMY WIEDZIELI ŻE DZIAŁA.";
            break
        case "7":
            kontenerek = "I OSTATNI WPIS POD NUMEREM 7!";
            break
        default: // Używamy jeśli nie mamy już rzeczy do wpisywania, działa jak "else" w funkcji warunkowej. Czyli skoro nie wybierzemy żadnego wpisu, to wyświetli się to co zadeklarujemy.
            kontenerek = "To właśnie się wyświetli, jeśli nic nie wpiszemy do inputa, lub wpiszemy wartość, która nie jest przypisana w case'ach.";
    }
    output1.innerText = kontenerek; // Po wykonaniu tej funkcji jako output będziemy mieli napis ZERO, jeśli taki mamy zadeklarowany pod 0-rem.
    komentarz1.innerText = "Musimy zapamiętać, że aby używać stringów, musimy używać  apostrofów 'tekst ', lub cudzysłowia \"tekst\" , a jeśli chcemy używać numerów czy też float czy int, to nie używamy stringowych tagów, tylko po prostu wpisujemy cyfrę (2,3,3.456, itd).";
}
