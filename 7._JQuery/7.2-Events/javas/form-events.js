// Przygotowujemy dokument
// blur(), focus(), change(), submit()

$(document).ready(function () {
    // $('#item').blur(function (e) {
    // console.log(e);
    // $(this).css('background-color', '#ccc')
    // // Blur zadziała, jeśli kiedykowlwiek klikniemy obok pola np wychodząc z niego i przechodąc do inenego pola

    // })
    // $('#item').focus(function (ef) {
    //     // fokus działą podobnie, ale tylko jeśli opuszczamy pole a nie przełączamy się na inne
    //     console.log(ef)
    // })
    $('#item').change(function (e) {
        //Change daziała podobnie na zmianę selecta tudzież radiobuttona czy checkboxa
        console.log(e)
    })
    // $('#item').submit(function (ef) {
    //     //Submit po zaakceptowaniu formularza odświeża stronę
    //     console.log(ef)
    // })
});