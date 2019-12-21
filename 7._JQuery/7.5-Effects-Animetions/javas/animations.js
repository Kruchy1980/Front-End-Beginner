// Animcje - animate()
// Przygotuj dokument
$(document).ready(function () {
    // Teraz chcemy dodać animację
    // Ma ona bardzo dużo opcji, a zapisujemy ją następująco: 
    // animate({
    // attr1: value1,
    //     attr2: value2,
    //     ...: ...,
    // attr(n): value(n)
    // }, time - który mówi jak długo animacja ma się wykonywać, i możemy dalej dodać np function () {})
    $('#mySlider').css({ 'position': 'absolute', 'top': '300px' });
    $('#mySlider').on('click', function () {
        $(this).animate({
            opacity: 0.5,
            left: "+=50px",
            top: "-=10px",
            heigth: '500',
            width: '750px'
        }, 2000, function () {
            $('#output1').html('Animate working');
        });
    })

})