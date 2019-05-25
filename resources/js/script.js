window.onload = function(){
    
 $("html, body").animate({ scrollTop: 0 }, "slow");
    $("#header").fadeIn(1500, descFade);
    function descFade(){
        $("#desc").fadeIn(1000, function(){$("nav").fadeIn(1000)});
    }
}


$(".btn").on("click", form);

$("#hire").on("click", form);
function form(){
$(".btn").hide();
    $(".form").slideDown(1000);
}
