// Rodzice - Parents, Dzieci - Childrens, Rodzeństwo - Siblings, czyli zależności hierarchiczne w HTML'u i jak to się robi za pomocą jQuery.

// Przygotuj dokument
$(document).ready(function () {
    //wybieżmy rodzica elemtntu/ parqaqgrafu numer childtwo, parent - daje najbliższego rodzica, parents daje wszystkich starszych
    console.log($('.childtwo').parent());
    console.log($('.childtwo').parents());

    // Teraz patrzymy na dzieci i zmieńmy ich text
    $('.parentone').children().html('<p>Child</p>');
    // Zmieniamy sobie wszystkie dzieci z kontenera, są t divy, którycg dużo nie ma
    // $('#container').children().each(function (index) {
    //     $(this).text(index + 1 + 'Changed DIV');
    // });
    // Chcąc jeszce raz zmienić nazwę nie możemy już tego zrobi gdy zrobiliśmy to w głóœnym kontenerze, dltego zakomentuj go jak na przykładzie a tutaj możemy sobi wybierać po kolejnych znacznikach odpowiedni element np
    $('.parentone').children('div.childtwo').html('<p>Newest</p>');

    // Siblings - rodzeństwo, next i nextAll
    // zacznijmy od wybierania po rodzicu - całe rodzeństwo
    // $('.parentone div.childone').siblings().html('Rodzeństwo od dziecka One')
    // //Tylko rodzeńsstwo posiadające div sczególny np
    // $('.parentone div.childone').siblings('div.childthree').html('<p>Rodzeństwo od dziecka One</p>')
    // Możemy to zmieniać, ale nie jest  html na to przygotowany, ale można, np teraz użyjemy do tego bardziej specyficznego selektora i zaznaczymy sąsiadujacy z  danym elementem element:)
    // $('.parentone div.childone').next().html('<p>Rodzeństwo od dziecka One następne w kolejce</p>');

    // Zostało jeszcze nextAll zaznaczające wszystkie po danym elemencie
    $('.parentone div.childone').nextAll().html('<p>Rodzeństwo od dziecka One następne w kolejce - wszystkie</p>');

    // Traversing first(), last(), eq(i), mozemy również używać gt(i) większe niż i lt(i) mniejsze niż index elementu
    // Zjmijmy się listą
    //First of elements
    $('ul li').first().html('<h2>First</h2>')
    //last of elements
    $('ul li').last().html('<h2>Last</h2>').css('color', 'red');
    $('ul li').eq(2).html('<h2>Equal To - index</h2>').css({ 'color': '#456123', 'background-color': '#ccc', 'font-weigth': 'bold', 'font-family': 'Helvetica' });

    // FZa pomocąfiltrowania możemy zmieniać dość szczegółowe znaczniki i to bardzo szybko.
    $('li').filter('.menu').html('<a href=\'https://google.com\'>Google site link</a')

})
