// W tej części zajmiemy się niektórymi matematycznymi metodami wbudowanymi.
// Najpierw jednak zadeklarujmy sobie zmienne zmieniające się.
var output = document.getElementById("output"); // wynik1 z dziłania na liczbach
var output1 = document.getElementById("output1"); // wynik2 z dziłania na liczbach
var komentarz = document.getElementById("komentarz"); // komentarz do liczb.
var wynik = document.getElementById("wynik"); // Przypisujemy, aby móc zmieniać wyświetlany tekst.
// Zadeklarujmy jeszcze odświeżanie strony
var refr = document.getElementById("refr");
// Teraz przypiszmy jemu odpowiednią funkcję.
refr.onclick = function () {
    location = location;
}

//Teraz zaczynamy treść właściwą.
// Metoda round - zaokrąglenie
// Najpierw zadeklarujmy przycisk, do którego to przypiszemy
var but11 = document.getElementById("but11");
// Teraz przypisujemy funkcję do przycisku.
but11.onclick = function () {
    let a = parseFloat(document.getElementById("numA").value);
    let b = document.getElementById("numB").style.display = "none";
    output.innerHTML = Math.round(a); //Jak widzimy przywołując wbudowane metody matematyczne, musimy przywołać rodzaj metod, w tym przypadku Math(rodzaj/typ metody).metoda(<parametr>)
    komentarz.innerText = "Jak widzimy metoda wbudowana round odpowiada za zaokrąglenie cyfry zmiennoprzecinkowej co całości czyli tak jakby float do int, zaokrąglając ją odpowiednio. \n !!!Należy jednak pamiętać, że aby zaokrąglenie działało, to przy deklarowaniu obiektu, musimy użyć metody parseFloat w następujący sposób: let a = parseFloat(document.getElementById('numA').value) \n Przywołujemy tę metodę zapisem określającym typ metody, a mianowicie: Math(rodzaj/typ metody).metoda(<parametr>)";
}

// Metoda ceil - zaokrąglanie w górę (zawsze).
// Najpierw zadeklarujmy przycisk, do którego to przypiszemy
var but12 = document.getElementById("but12");
// Teraz przypisujemy funkcję do przycisku.
but12.onclick = function () {
    let a = parseFloat(document.getElementById("numA").value);
    let b = document.getElementById("numB").style.display = "none";
    output.innerHTML = Math.ceil(a); //Jak widzimy przywołując wbudowane metody matematyczne, musimy przywołać rodzaj metod, w tym przypadku Math(rodzaj/typ metody).metoda(<parametr>)
    komentarz.innerText = "Jak widzimy metoda 'ceil' obojętnie jaką mamy cyfrę po przecinku zawsze zaokrągla w górę.";
}

// Metoda floor - zaokrąglanie w dół.
// Najpierw zadeklarujmy przycisk, do którego to przypiszemy
var but13 = document.getElementById("but13");
// Teraz przypisujemy funkcję do przycisku.
but13.onclick = function () {
    let a = parseFloat(document.getElementById("numA").value);
    let b = document.getElementById("numB").style.display = "none";
    output.innerHTML = Math.floor(a); //Jak widzimy przywołując wbudowane metody matematyczne, musimy przywołać rodzaj metod, w tym przypadku Math(rodzaj/typ metody).metoda(<parametr>)
    komentarz.innerText = "Jak widzimy metoda 'floor' obojętnie jaką mamy cyfrę po przecinku zawsze zaokrągla w dół.";
}

// Metoda random - losowe.
// Najpierw zadeklarujmy przycisk, do którego to przypiszemy
var but14 = document.getElementById("but14");
// Teraz przypisujemy funkcję do przycisku.
but14.onclick = function () {
    let a = parseFloat(document.getElementById("numA").style.display = "none");
    let b = document.getElementById("numB").style.display = "none";
    output.innerHTML = Math.random(); //Jak widzimy przywołując wbudowane metody matematyczne, musimy przywołać rodzaj metod, w tym przypadku Math(rodzaj/typ metody).metoda(<parametr>)
    komentarz.innerText = "Jak widzimy metoda 'random' losuje liczby z przedziału od 0 - 1 jeśli nie jest zadeklarowany parametr żaden określający górną g";
    document.getElementById('info').innerText = "Jak już zobaczyłej jak działa ta funkcja, to odśwież stronę.";
}

// Metoda random - losowe - random * stała.
// Najpierw zadeklarujmy przycisk, do którego to przypiszemy
var but15 = document.getElementById("but15");
// Teraz przypisujemy funkcję do przycisku.
but15.onclick = function () {
    let a = parseFloat(document.getElementById("numA").style.display = "none");
    let b = document.getElementById("numB").style.display = "none";
    output.innerHTML = Math.random() * 1000; //Jak widzimy przywołując wbudowane metody matematyczne, musimy przywołać rodzaj metod, w tym przypadku Math(rodzaj/typ metody).metoda(<parametr>)
    komentarz.innerText = "Jak widzimy metoda 'random' losuje liczby z przedziału od 0 - 1 jeśli jednak pomnożymy je przez jakąś wartość w dany sposób: Math.random() * 1000; to losowane będą liczby z przedziału od 0 - 1000, \n Jak widzimy przez przemnożenie wyniku, zwiększamy górną granicę przedziału losowania o właśnie mnożną.";
}

// Metoda random - losowe - random * zmienna a
// Najpierw zadeklarujmy przycisk, do którego to przypiszemy
var but16 = document.getElementById("but16");
// Teraz przypisujemy funkcję do przycisku.
but16.onclick = function () {
    let a = parseFloat(document.getElementById("numA").value);
    let b = document.getElementById("numB").style.display = "none";
    output.innerHTML = Math.random() * a; //Jak widzimy przywołując wbudowane metody matematyczne, musimy przywołać rodzaj metod, w tym przypadku Math(rodzaj/typ metody).metoda(<parametr>)
    komentarz.innerText = "Moemy sobie teraz zadeklarować górną granicę przedziału z którego będziemy losowali liczbę, wpisując parametr w miejsce A:";
}

// Metoda random - losowe - łączenie metod
// Najpierw zadeklarujmy przycisk, do którego to przypiszemy
var but17 = document.getElementById("but17");
// Teraz przypisujemy funkcję do przycisku.
but17.onclick = function () {
    let a = parseFloat(document.getElementById("numA").value);
    let b = document.getElementById("numB").style.display = "none";
    output.innerHTML = Math.ceil(Math.random() * a); //Jak widzimy przywołując wbudowane metody matematyczne, musimy przywołać rodzaj metod, w tym przypadku Math(rodzaj/typ metody).metoda(<parametr>)
    komentarz.innerText = "Połączenie metod robimy w następujący sposób: output.innerHTML = Math.ceil(Math.random() * a),\n Gdzie a jest parametrem określającym zasięg/zakres, z którego losujemy liczbę. \n Za pomocą zaokrąglania w górę - ceil, ten sam zakres będzie przyjmował wartości od 1 - a.";
}

// Metoda random - losowe - łączenie metod
// Najpierw zadeklarujmy przycisk, do którego to przypiszemy
var but18 = document.getElementById("but18");
// Teraz przypisujemy funkcję do przycisku.
but18.onclick = function () {
    let a = parseFloat(document.getElementById("numA").value);
    let b = document.getElementById("numB").style.display = "none";
    output.innerHTML = Math.floor(Math.random() * a); //Jak widzimy przywołując wbudowane metody matematyczne, musimy przywołać rodzaj metod, w tym przypadku Math(rodzaj/typ metody).metoda(<parametr>)
    komentarz.innerText = "Połączenie metod robimy w następujący sposób: output.innerHTML = Math.floor(Math.random() * a),\n Gdzie a jest parametrem określającym zasięg/zakres, z którego losujemy liczbę. \n Za pomocą zaokrąglania w dół - floor, ten sam zakres będzie przyjmował wartości od 0 - a-1.";
}

// Metoda random - losowe - łączenie metod
// Najpierw zadeklarujmy przycisk, do którego to przypiszemy
var but19 = document.getElementById("but19");
// Teraz przypisujemy funkcję do przycisku.
but19.onclick = function () {
    let a = parseFloat(document.getElementById("numA").value);
    let b = document.getElementById("numB").style.display = "none";
    output.innerHTML = a;//Math.round(Math.random() * a); //Jak widzimy przywołując wbudowane metody matematyczne, musimy przywołać rodzaj metod, w tym przypadku Math(rodzaj/typ metody).metoda(<parametr>)
    komentarz.innerText = "Połączenie metod robimy w następujący sposób: output.innerHTML = Math.round(Math.random() * a),\n Gdzie a jest parametrem określającym zasięg/zakres, z którego losujemy liczbę. \n Za pomocą zaokrąglania ogólneggo - round, ten sam zakres będzie przyjmował wartości od 0 - a.";
}

// Metoda data - Data()
// Najpierw zadeklarujmy przycisk, do którego to przypiszemy
var but20 = document.getElementById("but20");
// Teraz przypisujemy funkcję do przycisku.
but20.onclick = function () {
    let a = parseFloat(document.getElementById("numA").style.display = "none");
    let b = document.getElementById("numB").style.display = "none";
    output.innerHTML = Math.round(Math.random() * a); //Jak widzimy przywołując wbudowane metody matematyczne, musimy przywołać rodzaj metod, w tym przypadku Math(rodzaj/typ metody).metoda(<parametr>)
    // Zadeklarujmy sobie zmeinną lokalną, która wykorzysta funkcję wbudowaną Date()
    let taData = new Date(); // Pobiera datę ustawioną w naszym systenmie
    // Wyświetlmy ją w konsoli
    wynik.innerText = "Data: ";
    output.innerHTML = taData; // I wyświetla nam aktualną datę w zadeklarowanym formacie.
    komentarz.innerText = "Wyświetla nam pełn datę i czas naszego serwera."
}

// Metoda data - Date.getTime();
// Najpierw zadeklarujmy przycisk, do którego to przypiszemy
var but21 = document.getElementById("but21");
// Teraz przypisujemy funkcję do przycisku.
but21.onclick = function () {
    let a = parseFloat(document.getElementById("numA").style.display = "none");
    let b = document.getElementById("numB").style.display = "none";
    // Zadeklarujmy sobie zmeinną lokalną, która wykorzysta funkcję wbudowaną Date()
    let taData = new Date(); // Pobiera datę ustawioną w naszym systenmie
    // Pozmieniamy również podpisy przed wynikami:
    wynik.innerText = "Data.getTime(): ";
    // Teraz przyjmiemy i wydrukujemy w wynikach  dwie metody:
    output.innerHTML = taData.getTime() + " milisekund";
    komentarz.innerText = "Metoda Data.getTime() z daty przywołuje tzw znacznik czasu, czyli czas w milisekundach, który wyświetla się w oknie Wynik 1. \n"
}

// Metoda data - Date.getDay();
// Najpierw zadeklarujmy przycisk, do którego to przypiszemy
var but22 = document.getElementById("but22");
// Teraz przypisujemy funkcję do przycisku.
but22.onclick = function () {
    let a = parseFloat(document.getElementById("numA").style.display = "none");
    let b = document.getElementById("numB").style.display = "none";
    // Zadeklarujmy sobie zmeinną lokalną, która wykorzysta funkcję wbudowaną Date()
    let taData = new Date(); // Pobiera datę ustawioną w naszym systenmie
    // Pozmieniamy również podpisy przed wynikami:
    wynik.innerText = "Data.getDay(): ";
    // Teraz przyjmiemy i wydrukujemy w wynikach  dwie metody:
    output.innerHTML = taData.getDay() + " dzień tygodnia";
    komentarz.innerText = "Metoda Data.getDay() z daty przywołuje dzień tygodnia na podstawie daty"
}

// Metoda data - Date.getDate();
// Najpierw zadeklarujmy przycisk, do którego to przypiszemy
var but23 = document.getElementById("but23");
// Teraz przypisujemy funkcję do przycisku.
but23.onclick = function () {
    let a = parseFloat(document.getElementById("numA").style.display = "none");
    let b = document.getElementById("numB").style.display = "none";
    // Zadeklarujmy sobie zmeinną lokalną, która wykorzysta funkcję wbudowaną Date()
    let taData = new Date(); // Pobiera datę ustawioną w naszym systenmie
    // Pozmieniamy również podpisy przed wynikami:
    wynik.innerText = "Date.getDate(): ";
    // Teraz przyjmiemy i wydrukujemy w wynikach  dwie metody:
    output.innerHTML = taData.getDate() + " dzień miesiąca";
    komentarz.innerText = "Metoda Date.getDate() z daty przywołuje dzień miesiąca"
}
// Metoda data - Date.getFullYear();
// Najpierw zadeklarujmy przycisk, do którego to przypiszemy
var but24 = document.getElementById("but24");
// Teraz przypisujemy funkcję do przycisku.
but24.onclick = function () {
    let a = parseFloat(document.getElementById("numA").style.display = "none");
    let b = document.getElementById("numB").style.display = "none";
    // Zadeklarujmy sobie zmeinną lokalną, która wykorzysta funkcję wbudowaną Date()
    let taData = new Date(); // Pobiera datę ustawioną w naszym systenmie
    // Pozmieniamy również podpisy przed wynikami:
    wynik.innerText = "Date.getFullYear():  ";
    // Teraz przyjmiemy i wydrukujemy w wynikach  dwie metody:
    output.innerHTML = taData.getFullYear();
    komentarz.innerText = "Metoda Datte.getFullYear() z daty przywołuje rok z czasu systemowego."
}

// Metoda data - Date.get();
// Najpierw zadeklarujmy przycisk, do którego to przypiszemy
var but25 = document.getElementById("but25");
// Teraz przypisujemy funkcję do przycisku.
but25.onclick = function () {
    let a = parseFloat(document.getElementById("numA").style.display = "none");
    let b = document.getElementById("numB").style.display = "none";
    // Zadeklarujmy sobie zmeinną lokalną, która wykorzysta funkcję wbudowaną Date()
    let taData = new Date(); // Pobiera datę ustawioną w naszym systenmie
    // Pozmieniamy również podpisy przed wynikami:
    wynik.innerText = "Date.getTimeZoneOffset(): ";
    // Teraz przyjmiemy i wydrukujemy w wynikach  dwie metody:
    output.innerHTML = taData.getTimezoneOffset();
    komentarz.innerText = "Metoda getTimeZoneOffset() jest dość ciekawą metodą, która z daty przywołuje różnicę czasu pomiędzy czasem strefowym/Lokalnym, a Greenwich/Uniwersalnym."
}