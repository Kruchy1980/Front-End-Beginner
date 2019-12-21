// Przygotowanie dokumentu
$(document).ready(function () {
    $('.btn').click(function (e) {
        // Proste ładowanie zawartości do elementu HTML za pomocą AJAX'a
        // Sprawdzamy czy przycisk posiada klasę, tóra nam odpowiada
        if ($(this).hasClass('btn-danger')) {
            // NAdajemy dane zdarzenie do przycisku - tylko do sprawdzeniz czy dobre podłączyliśmy przycisk
            // $('#output').html('Clicked # 1')
            // Teraz podłączamy AJAX'a
            $('#output').load('../html/data.txt');
        }
        console.log($(this)); // sprawdzamy co kryje się pod this'em
    });

});