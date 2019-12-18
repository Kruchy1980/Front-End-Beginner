// Na początku chcę zaznaczyć, ze to co ma się wykonać, to ma się wykonać dopiero pozałaedowaniu strony,


// 1.Użycie id jako selektora

// $(document).ready(function () {
//     // Tak nadajemy nowy tekst w danym miejscu naszym output'cie
//     $('#output').html('New Content Dude !');
// });

// 2. Użycie klasy jako selektora

// $(document).ready(function () {
//     // Zmieniamy tekst i kolor czcionki - tylko jeden atrybut, ponieważ można więcej.
//     $('.one').html('Something New').css('color', '#05ac02')
// });

// 3. Użycie tagu jako selektora na ten przykład paragrafu <p></p>

// $(document).ready(function () {
//     $('p').css('background-color', '#9911ff')
// });

//---------------------------------------------------------
// Jak bawić się domem za pomocą jQuery
//.text() - odpowiednik innerText  JS'ie
//.html() - odpowiednik innerHtml  JS'ie
//.val() - odpowiednik value() w  JS'ie


// $(document).ready(function () {
//     // zmiana koloru tła jest z poprzedniego ćwiczenia
//     $('p').css('background-color', '#9911ff')
//     // Podając tekst jako text nie uwzględniamy tagów html więc wszystko jest przypisane jak w stringu
//     $('p').text('cokolwiek<b>tutaj</b>')
//     // Zamieniając text na html tagi będą brane pod uwagę, a ze względu na to, że ta linijka występuje po poprzedniej, to zgodnie z synchronicznością czytania kodu będzie linijką nadrzędną.
//     $('p').html('cokolwiek <b> tutaj</b>')
//     // Co do pobierania wartści, musimy sobie utworzyć pole, najlepiej input, z którego będzie można pobierać wpisane wartości np inputa. Mamy tytaj inputa o id - Name więc po pobraniu go możemy wyciągnąć wartość stamtąd w następujący sposób:
//     // $('#Name').val() możemy ją również przypisać do zmiennej aby potem łatwiej było ją 'obrabiać'
//     let name = $('#Name').val();
//     let cos = $('h2').html()   // zróbmy również drugą zmienną za pomocą taga html by coś innego zmienić.
//     // np możemy dodać ją jako tekst paragrafu - weżmy na to pierwszego
//     $('p:first').text(name); // Oczywiście nic nie stoi na przeszkodzie, aby zamiast zmiennej użyć całego selektora, ale jeśli będziemy go wpisywali w inne miejsca również, to łatwiej jest mieć go w zmiennej.
//     $('p:nth-child(2)').html(cos); // mozemy sobie wygenerować w innym paragrafie to co mamy w headerze 2 z pomocą przypisania go wcześniej do zmiennej

// });

//----------------------------------------------------------

// 4. Użycie this, aby pobrać element z zawartości strony.
// Wybranie każdego elementu z listy - each(function() {...})

// $(document).ready(function () {
//     // eachw jQuery jest równe funkcji forEach() w javascritp
//     $('li').each(function () {
//         // kiedy w normalnej /nie strzałkowej funkcji bierzemy this, to odnosi się ona do elementu głównego dokument tutaj czytaj zawartości li
//         // console.log($(this).html()); // atrybutem html pobieramy cały element html
//         console.log($(this).text()); //tym razem pobieramy tylko tekst z danego elementu
//     });
// });

//---------------------------------------------------------

// // 5. Uaktualnianie elementów: before, after, prepend, append, empty, remove.


// $(document).ready(function () {
//     // $('li').each(function () {
//     //     console.log($(this).text());
//     // });
//     // Jeśli jednak nie chcemy zaznaczać wszystkich li możemy użyć operatorow porównawczych np eq(numer)- equal to, gt(numer) - większe niż, lt(numer) mniejsze niż, gdzie numet to index czyli liczony od 0
//     $('li:eq(3)').html('numer 4rty na liście')
//     // różnice pomiędzy wymienionymi w temacie.
//     $('li').each(function () {
//         console.log($(this).html());
//         // after
//         $(this).after('After'); //pokazuje się po każdym elemencie pod nim
//         $(this).append('After'); // pokazuje się po każdym elemencie w tej samej linii
//         $(this).before('Before'); // Pokaauje się przed blokowo czyli w innej linii
//         $(this).prepend('Prepend'); // pokazuje się przed elementem inlineowo czyli w tej samej linii
//         $(this).remove('After'); // czyści wszystko włącznie z css'ami przypisanymi do elementów kasuje elementy
//         $(this).empty('After'); // czyści tylko elementy html odpowiednie wstawia puste elementy
//     })
// })

// --------------------------------------------------------

// 6. Pętle zaawansowane.

$(document).ready(function () {
    // aby zrobić bardziej zaawansowaną pętlę używając each musimy dodać parametry do funkcji a mianowicie index i event
    //  Jeżeli praygotujey sobie zmienne np
    const hello = 'hello';
    const space = ' ';
    const world = 'world';

    $('li').each(function (index, event) {
        console.log(index);
        console.log(event);
        console.log($(this).html());

        $(this).after('After');
        $(this).append('After');
        $(this).before('Before');
        $(this).prepend('Prepend');
        // $(this).remove('After');
        $(this).empty('After');
        // teraz możemy dodać sobie spokojnie cokolwiek do elementu np:
        $('li:eq(3)').html('numer 4rty na liście');
        // Możemy potem te zmienne dodać do elementu zsa pommocą metody append
        $('li:eq(7)').append(hello, space, world)

    })
})