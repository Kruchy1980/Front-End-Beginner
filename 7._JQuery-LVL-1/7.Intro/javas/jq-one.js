// Aby sprawdzić zawartość dokumentu jeszcze bez jQuery, możemy użyć następującego polecenia: 
var mojDokument = document.getElementsByTagName("body");
console.log(mojDokument);
//=========================================================
// Tutaj zaczyna się zabawa z pomocą biblioteki jQery.
// W twki sposób najlepiej jest zapisywać kody z wykorzystaniem biblioteki jQuery.
// Dobrą praktyką jest sprawdzenie, czy jQuery jest dobrze powiązany z naszą stroną, z robimy to za pomocą funkcji warunkowej.
// if(jQuery) {
//     console.log("jQuery jest Gotów/ READY");
// }else {
//     console.log("jQuery nie jest Gotów/ NOT READY");
// }
//!!! Niestety nawet jeśli użyjmy tej funkcji, a jQuery nie będzie powiązany ze stroną, to wyskoczy nam pierwszy komunika z przeglądarki o błędzie a nie komunikat ustawiony przez nas w funkcji !!!

$(document).ready(function(){
    var output = $("#one").html(); // Wyświetla nam w konsoli wszystko to, co znajduje się w danym elemencie, nie rozpoznając jednak tagów, lecz wyświetlając ich nazwę w konsoli.
    console.log(output);
});