function pidineria () {
    document.getElementById("vuoto").innerHTML = "BUONGIONNO<br>PICCIMIMI! ❤";
    document.getElementById("vuoto").style.border = "4px solid black";
    document.getElementById("vuoto").style.padding = "15px";
    document.getElementById("premibtn").style.display = "none";
};

$(document).ready(function(){

    //Dropdown buttons

    $(".dropbtn").click( function () {
        $(this).parent().next().slideToggle("slow");
    });

    //Sidebar sliding

    $(".sidebarbtn").click( function () {
        if ($(".sidebar").css("left") !== "0px") {
            $(".sidebar").animate({left: '0'},500);
        } else {
            $(".sidebar").animate({left: '-50%'},500);
        }
    });
});