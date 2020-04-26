function pidineria () {
    document.getElementById("vuoto").innerHTML = "BUONGIONNO PICCIMIMI! ❤";
    document.getElementById("vuoto").style.borderWidth = "4px";
}
var sidestate = 0;

function aprichiudibarra() {
    if (sidestate == 0) {
        document.getElementById("sidebar").style.width = "50vw";
        sidestate = 1;
    } else {
        document.getElementById("sidebar").style.width = "0";
        sidestate = 0;
    };
};