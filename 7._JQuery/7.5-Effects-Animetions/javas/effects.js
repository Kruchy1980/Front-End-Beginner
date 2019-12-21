// Hide() i Show()
// Przygotuj dokument
$(document).ready(function () {
    // Przygotoweane z poprzedniej części 
    $('img:first').click(function () {
        let mySrc = $(this).attr('src');
        $('#output1').html(mySrc);
    });
    $('img:last').click(function () {
        let mySrc = $(this).attr('src');
        $('#output2').html('Kliknij mnie: ' + mySrc);
    });
    // Ukryjmy po kliknięciu na drugi obrazek tylko ten obrazek - w nawiasie możemy określić czas w którym to się stanie w milisekundach, lub mamy przygotowane rozwiązania fast, slow itd.
    $('img:last').on('click', function () {
        $('img:last').hide(5000);
    })
    // Po kliknięciu na drugi output pokażmy znów ten obrazek
    $('#output2').on('click', function () {
        $('img:last').show('slow')
    })
    // Możemy również umieścić to w funkcji toggle
    // W html'u przyhorowany mamy guik do tego
    $('#btn').on('click', function () {
        $('img:first').toggle(3000, mineToggleInfo);
    })
    // Callbacks - wywoływanie funkcji, najpierw ją deklarujemy i dodamy sobie spokojnie do toggle'a, dzięki czemu zadziała to gdy wykona się odpowiedni event/zdarzenie.
    function mineToggleInfo() {
        $('#output1').html('Toogle teraz zadziałało ale nie chcę mieć dodatkowo źródła zdjęcia teraz więc go nie dodaję.' + $(this).attr('src')) // dodając ostatni kawałek kodu mamy również źródło obrazka.
    }
    // fadeIn(), fadeOut(), fadeTo()
    $('li:first').on('click', function () {
        $(this).fadeOut(3000); //chowanie
    })
    $('li:eq(1)').on('click', function () {
        $('li:first').fadeIn(3000); //uwidacznianie
    })
    $('li:eq(2)').on('click', function () {
        $(this).fadeTo(3000, 0.4); // Chowanie ale tylko do założonego parametru a czyli opacity
    })

    // Sliding - slideDown(), slideUp(), slideToggle()
    $('li:eq(4)').on('click', function () {
        $(this).slideUp(2000); // Chowanie
    })
    $('li:eq(3)').on('click', function () {
        $('li:eq(4)').slideDown(2000); // Pokazywanie
    })
    $('li:eq(1)').on('click', function () {
        $('li:eq(4)').slideToggle(2000); // Zmiennie
    })
})