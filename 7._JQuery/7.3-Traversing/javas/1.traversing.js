// Przygotować dokument
$(document).ready(function () {
    // Przygotowujemy guzik, który sprawdzać będzie nam walidację formulrza
    $('#check').click(checkme);
    // Przypisaliśmy do niego funkcję, którą zdefiniujemy ponieżej
    function checkme(e) {
        //deklaracja pustego errora
        let err = "Fill the field correctly";
        //przypisanie do zmiennej wywołania eventu
        const mytarget = $(e.currentTarget);
        //Deklaracja przeszukiwania inputów do walidacji, ale gdy dodamy jeszcze textarea to będzie już alidował wszystko, na razie tylko czy puste czy nie ponieważ nie stworzyliśmy np regEx'a do walidacji
        $('#myForm').find('input, textarea').each(function (e) {
            // Dopiszmy sobie jeszcze wyświetlanie errora o tym czego brakuje nam w polach do wypełnienia a mianowicie inputah
            if ($(this).val() === '') { err = err + "<br>needs " + $(this).attr('id'); }
            // Sprawdzenia konsolowe informacji wyświetlanej
            //Tyczy się tylko wartości zadeklarowanych w inputach poniważ nie wzięliśmy pod uwagę textarea.
            // console.log($(this).attr('id'))
            // Wyświetlanie w konsoli tego co wpisAne do inputa
            // console.log(e + ' ' + $(this).val())
        });
        // Warunek wyświetlania inputa
        if (err.length > 0) {
            // Przypisanie errora do miejsca na stronie
            $('#errors').html(err);
        } else {
            $('#output').html('form ok!')
        }
    }
})