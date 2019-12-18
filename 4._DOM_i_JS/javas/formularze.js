// Zajmujemy się utworzeniem logiki dla formularza walidacyjnego.
// Krok 1 - deklaracja zmiennej wyświetlającej wiadomość o kliknięciu przycisku - nie obowiązkowy, ale lepiej uwidacznia co dzieje się po kliknięciu i czy kliknięcie działa w produkcji nie jest potrzebne, ale dobrze jest podczas działania na kodzie wwarto sobie ułatwić w ten sposób:
// Na samej górze definiujemy sobie zmienną globalną, a mianowicie kontenerek div, który będzie wyświetlał komunikaty, jakiekolwiek chcemy.
var output = document.getElementById("output");

// Krok 3a - Tworzymy logikę do przycisku submit:
// Dodajemy teraz logikę do kolejnego elementu a mianowicie do przycisku submit.
document.getElementById("submit").onclick = checkForm; // Tu chcemy, aby po kliknięciu na nasz przycisk sprawcdzone z automatu zostały pola forrmularza sprawdzone, więc przypisaliśmy funkcję, którą poniżej zdefiniujemy.
// Krok 2 - przypisanie działanie tego co ma się dziać po potwierdzeniu formularza przyciskiem submit:
// Najpierw musimy wyodrębnić element/y które mamy zamiar modyfikować i przypisujemy mu paramrtr onsubmit, który zgodnie z przeznadczeniem, przy kliknięciu przycisku akceptującego , czyli naszego submita, będzie wykonywał poleceniem które jemu przypiszemy - a zrobimy to za pomocą funkcji.
document.getElementById("myForm").onsubmit = function () {
    // Po wykonaniu Kroku 3-go dodajemy logikę do formularza, a mianowicie definiujemy zmienne lokalne, które wyselekcjonują nam interesujące nas elementy.
    // Krok 4-ty - deklarujemy zmienne jako gobalne  kolejne selektory:
    var myName = document.getElementById("name"); // Nazwisko
    var myEmail = document.getElementById("mail"); // Adres Email
    var myMessage = document.getElementById("t-area"); // Wiadomość wpisywana
    // Po zadeklarowaniu funkcji sprawdzającej czyli Krok'u 5 - tego możemy wykonywać następująe kroki:
    // Krok 6 - deklarujemy zmienną wiadomości zwrotnej:
    var rMessage = ""; // Deklarujemy zmienną wiadomości zwrotnej jako pustą na razie
    // Teraz tworzymy funkcję warunkową odnośnie wiadomości do kolejnych elementów formularza
    if (myName.value === '') {
        rMessage = "Pole nazwisko nie zostało wypełnione !!<br>";
    }
    if (myEmail.value === '') {
        rMessage = rMessage + "Email not filled out<br>";
    }
    if (!validateEmail(myEmail.value)) {
        rMessage = rMessage + " Email is not Valid  !!<br>";
    }
    if (myMessage.value === '') {
        rMessage = rMessage + " Pole nazwisko nie zostało wypełnione !!";
    }
    // Sprawdzamy, czy jakakiekolwiek z pól nie jest skopane poprzez sprawdzenie ilości wiadomości zwrotnych wyświetlonych.
    if (rMessage.length > 0) {
        output.innerHTML = rMessage;
        return false; // Najpierw eliminujemy jakąkolwiek czynność po kliknięciu przycisku submit, aby nie robiło się nic, jeśli nie wypełnimy formulalrza.
    } else { // A jeśli wszystko jest ok to niech zwraca prawdę, czyli niech zadziała potwierdzenie fomularza.
        return true;
    }
}



// Krok 5 - tworzenie funkcji walidacji okna/ien w zależności od tego do ilu elementów przypiszemy jej wykonanie formularza: - nie jest obowiązkowy ponieważ przegladarki mają wbudowane walidacje komórek, które ożemy uruchomić za pomocą prostych poleceń np requested
// Tworzymy sami funkcję walidującą adres email. Zrobić to możemy za pomocą wyrażeń regularnych., których opisy możemy znaleźć na stronie: https://www.w3resource.com/javascript/form/email-validation.php

function validateEmail(email) {
    // Najpierw sprawdzamy, jakie znaki są wpisane pod deklarowaną zmienną, z nazwijmy ją myCheck
    var myCheck = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // Tutaj zadeklarowaliśmy za pomocą wyrażeń regularnych, jakie znaki mogą być wpisywane
    // Teraz zwracamy wartość odpowiednio ją testując.
    return myCheck.test(email);
}


// Krok 3b - definiujemy funkcję checkForm
// Definiujemy funkcję, która będzie przywoływana po kliknięciu przycisku submit. 
function checkForm() {
    output.innerHTML = " KLIKNIĘTO !"; // W kontenerze o  id output po kliknięciu przycisku wyświetli się komunikat KLIKNIĘTO !.
}

// !!!!! UWAGA !!!!!
// Pamiętajmy, że nawet drobne błędy w kodzie, np zapomnienie dodanie w nazwie my w myEmail np czy też postawienie pustej wiadomości jako cudzysłowie i zrobienie przerwy np " " a nie tak jak powinno czyli "" jest również nierozpoznawalne.
// Może to po dłuższym czasie szukania błędu mocno zdenerwować zupełnie niepotrzebnie, więc uważajmy nawet na najmniejsze błędy.






