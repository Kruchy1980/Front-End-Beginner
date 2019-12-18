var mojSejf = "";
document.getElementById("but1").addEventListener("click", myFun);

function myFun() {
    console.log("HELLO");
    let desc = new XMLHttpRequest();
    desc.onreadystatechange = function () {
        if (desc.readyState == 4 && desc.status == 200) {
            document.getElementById('output4').innerHTML = this.responseText;
        }
    }
    d.open("GET", "data.txt", true);
    d.send();
}

// AJAX Server interaction.117 - update form to multiple inputs challenge 122 - przerwa do uzyskania odpowiedzi.