var mojSejf = "";
document.getElementById("but1").addEventListener("click", myFun);

function myFun() {
    console.log("HELLO");
    var desc = new XMLHttpRequest();
    desc.onreadystatechange = function () {
        if (desc.readyState == 4 && desc.status == 200) {
            document.getElementById('output4').innerHTML = this.responseText;
        }
    }
    desc.open("GET", "data.php", true);
    desc.send();
}

