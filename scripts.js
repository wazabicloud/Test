function pidineria () {
    document.getElementById("vuoto").innerHTML = "BUONGIONNO PICCIMIMI! ❤"
    document.getElementById("vuoto").style.borderWidth = "4px";
}

function aprichiudibarra() {
    sidesize = document.getElementById("sidebar").style.width;
    if (sidesize == 0) {
        document.getElementById("sidebar").style.width = "200px";
    } else {
        document.getElementById("sidebar").style.width = "0";
    }

}