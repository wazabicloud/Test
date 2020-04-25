function pidineria () {
    document.getElementById("vuoto").innerHTML = "BUONGIONNO PICCIMIMI! ❤";
    document.getElementById("vuoto").style.borderWidth = "4px";
}
var i = 0;

function aprichiudibarra() {
    if (i == 0) {
        document.getElementById("sidebar").style.width = "200px";
        i=1;
    } else {
        document.getElementById("sidebar").style.width = "0";
        i=0;
    };
};