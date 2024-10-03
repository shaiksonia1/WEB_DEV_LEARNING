// document.getElementsByTagName("h1")[0].style.color = "pink";
// $("h1").addClass("big-title")
$("button").css("backgroundColor","pink")


$("h1").click(function(){
    $("h1").addClass("big-title")
    

})
$("button").click(function(){
    $("h1").css("color","purple");
});
$(document).keypress(function(Event){
    $("h1").text(Event.key)

})
