// Jak zwykle definiujemy, aby akcje wykonywały się po załadowaniu dokumentu,

// 1. Dodanie zdarzenia na kliknięcie

// $(document).ready(function () {
//     //  Kreujemy wydarzenie, dzięki któremu po naciśnięciu na element listy będziemy dodawali do strony, a mianowicie tego elementu x
//     $('li').on('click', function (event) {
//         $(this).append(' x ')
//     });
//     // inaczej zapisana ta sama funkcja, która dodawać będzie x przed elementem listys
//     $('li').click(function (event) {
//         $(this).prepend(' x ')
//     })
// });


// 2. Zatrzymywanie działania event listenera event.preventDefault()

// $(document).ready(function () {
//     //  Kreujemy wydarzenie, dzięki któremu po naciśnięciu na element listy będziemy dodawali do strony, a mianowicie tego elementu x
//     //ten zapis zabiera mniej pamięci od kolejnego i działa dynamicznie w związku z czym lepiej jest go używać
//     $('li').on('click', function (event) {
//         $(this).append(' x ')
//     });
//     // inaczej zapisana ta sama funkcja, która dodawać będzie x przed elementem listys
//     $('li').click(function (event) {
//         // dodając tutaj oreventDefault(), to po klkikniędiu na hiperlink nie przekieruje na odpowiednią stronę, tylko wykona się funkcja
//         event.preventDefault(); // jak widzimy odłączyliśmy hiperlinki od działania dzięki tej linijce kodu
//         $(this).prepend(' x ')
//     })
// });

//3. dodawanie nowego elementu listy poprzez kliknięcie przycisku.

$(document).ready(function () {
    // pobieramy najpierw przycisk na którym chcemy wywołać zdarzenie, następnie przypisujemy mu clicka, który równie dynamicznie działa na istniejących przyciskach w html'u  w związku z czym nie musimy przypisywać listenera na on. ...
    $('#somebutton').click(function () {
        // wybieramy również element do którego dodawać będziemy dany element poza tym w dodawanym elemencie zamieszczony jest tekst nowy.
        $('#sidelist').append('<li>NEW</li>');
    })
    // dodając tutaj kolejmy parametr li przed funkcją ta operacja bęczie wykonywała się na każcym elemencie listy nawet tym nowo utworzonym i musimy jeszcze wybrać odpowedni element w naszym wypadku sidemenu.
    $('#sidemenu').on('click', 'li', function (event) {
        $(this).append(' x ')
    });
    // inaczej zapisana ta sama funkcja, która dodawać będzie x przed elementem listy. Kolejmym plusem tego zapisu jest to, że można dodawać różne wydarzenia w danym miejscu np
    $('#sidemenu').on('click mouseover', 'li', function (event) {
        // dodając tutaj oreventDefault(), to po klkikniędiu na hiperlink nie przekieruje na odpowiednią stronę, tylko wykona się funkcja
        event.preventDefault(); // jak widzimy odłączyliśmy hiperlinki od działania dzięki tej linijce kodu
        $(this).prepend(' x ')
    })
});