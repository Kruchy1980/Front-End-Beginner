//Przygotowanie dokumentu

$(document).ready(function () {
    $('#subm').click(checkme);

    function checkme(e) {
        var err = "";


        var mytarget = $(e.currentTarget);

        if ($('#text').val() === '') {
            err = err + '<br> needs info'
        }
        if (err.length > 0) {
            console.log(err);

        } else {
            console.log('Form is ok');

        }


    }
})