// Przygotowanie dokumentu

$(document).ready(function () {
    $('ul').css('border-top', '1px solid #000');
    $('li:first').css({ 'color': '#785109', 'font-family': 'serif', 'font-size': '1.8em' });
    //Możemy rownież używać spokojnie traversingu do czegoś takiego  poniważ działa on jak używanie selektorów
    $('ul').children().eq(3).css({ 'background-color': '#aaa', 'color': '#fff', 'font-weight': 'bold' })
    // Przygotujmy sobie klasę w pliku css
    // Teraz nadajmy klasę elementom nieparzystym listy
    $('li:nth-Child(odd)').addClass('clickable');
    // Jak widzimy klasa została dodana, co zmieniło trochę style elementów prócz pierwszego którego to poprzednio nadane style nie zostały nadpiane, a jedynie dodane zostały nowe do doprowadziło do braku czytelności tekstu więc usuńmy z niego klasę
    $('li:first').removeClass('clickable');
    // Możemy również dodać funkcję, która będzie zmieniała klasę na kliknięcie elementu, zrób to z elementem 2gim listy np
    $('li:eq(1)').on('click', function () {
        $('li:eq(1)').toggleClass('clickable');
    })
    // W taki oto sposób dodaliśmy możliwość zmiany klasy elementu poprzez kliknięcie. Oczywiście można wsystkie z 3 metod zrobić na przycisk i będzie działało ale różnicza jest taka, że jeśli użyjemy tylko addClass lub removeClass zrobimy tylo jedną rzecz, a gdybyśmy chcieli zmieniać tą klasę co kliknięcie to musielibyśmy użyć funkcji warunkowej co zwiększyło by objętość kodu niepotrzebnie.
    // Możemy do toogle'a użyć również sprawdzenia np
    $('li:last').on('click', function () {
        if ($(this).hasClass('clickable')) {
            $(this).removeClass('clickable')
        } else {
            $(this).addClass('clickable');
        };
    })
    // To samo możemy robić a np atrybutamie - odnieśmy się do dodanego do kodu zdjęcia
    // najpierw sprawdźmy jakie jest źródło pochodzenia obrazka np i dodajmy do wyświetlenisa kilks styli
    $('img').on('click', function () {
        let mySrc = $(this).attr('src');
        $('#output').html(mySrc).css({ 'font-weight': 'bold', 'font-size': '24px', 'color': '#fa0046' });
        // Teraz spokojnie możemy sobie zmieniać atrybut np powiększyć zdjęcie na clicka - niestety trza poczekać aż załąduje się z tej strony.
        $(this).attr('src', 'http://lorempixel.com/300/300');
    });




})