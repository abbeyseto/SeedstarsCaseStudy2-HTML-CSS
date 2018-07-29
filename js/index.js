$(".w3-teal").on("click", function () {
    //alert("menu clicked");
    $('aside').show();
});

$("text").on("click", function () {
    //alert("menu clicked");
    $('aside').hide();
    $('aside').removeAttr("style");
});
