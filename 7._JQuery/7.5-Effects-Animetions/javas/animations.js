// Animcje
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

})