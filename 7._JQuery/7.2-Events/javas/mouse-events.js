// Przygotowujemy dokument
// Zdarzenia myszkowe
// mouseDown, mouseUp, mouseOver, mouseOut, mouseMove, mouseEnter, mouseLeave

$(document).ready(function () {
    // zmińmy kolor nagłówka strony po najechaniu na niego.
    // Pamiętajmy, że możemy używAĆ łańcuchów funkcji aby połączyć kilka wydareń na jednym elemencie.
    $('h1').mouseover(function (e) {
        $(this).css('color', 'orange')
    }).mouseout(function () {
        $(this).text('changing text for showing that it works')
    }).mousedown(function () {
        $(this).css('color', 'blue')
    }).mouseup(function () {
        $(this).css('color', 'red')
    }).mouseleave(function () {
        $(this).css('color', 'yellow')
    });
})
// To jest tylko kilka przykłqdów eventów myszkowych i tylko kilka działa ponieważ nadpisywałem je więc to tylko na próbę.