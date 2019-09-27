// Kreowanie i przywoływanie danych Json'owskich.

// Przykład użyci minimalizatora kodu Json'owskiego.
// Najpierw generujemy kod Json'owski (na potrzeby obecne użyliśmy generatora , do którego link znajduje się w stópce opisów tego rozdziału).
// Następnie używając jednego z minimizerów kodu doprowadzamy kos Json'owsie do następującej postaci
var daneJson =  // Deklarujemy zmienną 
    // Następnie używając jednego z minimizerów kodu doprowadzamy kos Json'owsie do następującej postaci
    '{"_id":"5d6cf7352803f8ec2c576e5b","index":0,"guid":"8727ac10-9163-48eb-baf0-5f8058e618eb","isActive":false,"balance":"$3,341.19","picture":"http://placehold.it/32x32","age":20,"eyeColor":"green","name":{"first":"Joanne","last":"Welch"}}';
// Deklarujemy zmienną, która przyjmie informacje jason'owskie, sparsuje je na plik Jason'owski
var mody = JSON.parse(daneJson);
// I wyświetlimy nasze zadeklarowane dane w konsoli w konsoli
console.log(mody);
