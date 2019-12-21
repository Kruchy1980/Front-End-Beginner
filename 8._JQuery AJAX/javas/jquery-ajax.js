// Przygotowanie dokumentu
$(document).ready(function () {
    $('.btn').click(function (e) {
        // Proste ładowanie zawartości do elementu HTML za pomocą AJAX'a
        // Sprawdzamy czy przycisk posiada klasę, tóra nam odpowiada
        if ($(this).hasClass('btn-danger')) {
            // NAdajemy dane zdarzenie do przycisku - tylko do sprawdzeniz czy dobre podłączyliśmy przycisk
            // $('#output').html('Clicked # 1')
            // Teraz podłączamy AJAX'a - i wyciągamy zawartość wcześniej przygotowanego pliku tekstowego do naszego output'a
            $('#output').load('../html/data.txt');
        }
        console.log($(this)); // sprawdzamy co kryje się pod this'em
        // Dodajmy jeszcze jeden warunek
        if ($(this).hasClass('btn-warning')) {
            $.get('../html/data.txt', function (data) {
                $('#output').html(data);
            })
        }
        // Get JSON data from external file
        //https://api.myjson.com/bins/23xvb
        if ($(this).hasClass('one')) {
            //deklarujemy zmienną z powyższym adresem gdzie znajduje się obiekt w JSON'ie
            let url = 'https://api.myjson.com/bins/23xvb'
            //Następnie używamy funkcji getJSON(), podajemy zmienną lub bezpośednio adres url w cydzysłowiu jeśli nie zadeklarowaliśmy go jako zmimennej wcześniej
            $.getJSON(url, function (data) {
                // Na razie zobaczmy co ściągnęliśmy
                console.log(data);
                // Teraz wyświetlmy te dAne w naszym outpucie
                $('#output').html('<p>First Name: ' + data.firstName + '</p>');
                // Skoro dane ściągnięte są obiektem to musimy je traktować jako obiekt więc podajemy ścieżki do odpowiednich interesujących nas danych jak powyżej:)
            });
        }
        // Pracowanie POST w Ajax'ie
        // if ($(this).hasClass('btn-primary')) {
        //     $.get('../html/data.txt', function (data, response, xhr) {
        //         console.log(xhr);
        //     })
        // }
        //Zapytanie Ajax'a
        if ($(this).hasClass('btn-primary')) {
            $.ajax({
                url: 'https://api.myjson.com/bins/23xvb',
                sucess: function (data, status, xhr) {
                    console.log(xhr);
                },
                error: function (data, status, xhr) {
                    console.log(xhr);
                }
            })
        }
    });
});