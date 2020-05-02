function pidineria () {
    document.getElementById("vuoto").innerHTML = "BUONGIONNO<br>PICCIMIMI! ❤";
    document.getElementById("vuoto").style.border = "4px solid black";
    document.getElementById("vuoto").style.padding = "15px";
    document.getElementById("premibtn").style.display = "none";
};

$(document).ready(function(){
    $(".dropbtn").click( function () {
        $(this).parent().next().slideToggle("slow");
    });
});