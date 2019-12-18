// Prepare the document

$(document).ready(function () {
    //Najpierw deklarujemy zmienne

    const but = $('#add')

    $("ul").on("click", "li", function (event) {

        $(this).toggleClass('done');

    })

    // Teraz zabieramy się za logikę
    but.on('click', function () {
        let item = $('#item').val();

        $('ul').append('<li>' + item + '</li>')
    })

})

