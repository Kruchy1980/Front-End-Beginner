var mojSejf = "";
document.getElementById("but1").addEventListener("click", myFun);

function myFun() {
    console.log("HELLO");
    var d = new XMLHttpRequest();
    d.onreadystatechange = function () {
        if(d.readyState == 4 && d.status == 200) {
            console.log(this.responseText);
        }
    }
    d.open("GET", "/home/jakub/Documents/Front End JS/Kurs Laurence'a Svekis/Repo/Front-End-Beginner/6._JS_JSON_AJAX/javas/data.txt", true);
    d.send();
}

// AJAX Server interaction.117 - update form to multiple inputs challenge 122 - przerwa do uzyskania odpowiedzi.