function pidineria () {
    document.getElementById("vuoto").innerHTML = "BUONGIONNO<br>PICCIMIMI! ❤";
    document.getElementById("vuoto").style.border = "4px solid black";
    document.getElementById("vuoto").style.padding = "15px";
    document.getElementById("premibtn").style.display = "none";
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