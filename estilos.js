$(document).ready(function(){
    $("#hide-button").click(function(){
        $("#image").hide();
        $("#page-title").text("¡No tenemos ninguna imagen!");
    });
    $("#show-button").click(function(){
        $("#image").show();
        $("#page-title").text("¡Mirá la siguiente imagen!");
    });
});