//Przygotowujemy dokument
// keydown(), keyup(), keypress()
$(document).ready(function () {
    // Pobiramy element z którego będziemy korzystać
    // będzie to input
    const but = $('#add')
    $('#item').keypress(function () {
        $(this).css('background-color', '#ccc')
    }).keyup(function () {
        $(this).css('font-size', '36px')
    }).keydown(function () {
        const but = $('#add')
        let task = $('#item').val()
        $('ul').html('<li>' + task + '</li>');
        but.on('click', function () {
            console.log(task)
            $('ul').append('<li>' + task + '</li>');
        });
    })
})