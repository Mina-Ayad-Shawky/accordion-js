
$(document).ready(function(){
  let question=$(".h");
 question.click(function(){
  let paragraph = $(this).closest('div').next('.para');
  paragraph.slideToggle(500);
  let icon=$(this).next('.fa-solid');
  if(icon.hasClass("fa-circle-plus")){
    icon.removeClass("fa-circle-plus").addClass("fa-circle-minus");
icon.css({
  "transition":"all 1s"
})
  }else{
    icon.removeClass("fa-circle-minus").addClass("fa-circle-plus");

  }
 })
function updateImageSrc(){
  let windowWidth=$(window).width();
  let image=$(".back");
  if(windowWidth<750){
image.attr("src","./assets/images/background-pattern-mobile.svg")
  }else{
image.attr("src","./assets/images/background-pattern-desktop.svg")
  }
}
updateImageSrc();
// Run on window resize
$(window).resize(function() {
  updateImageSrc();
});
})

