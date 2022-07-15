//案讚
$(function(){
    $(".gameCloum .addLike").click(function(){
        $(this).toggleClass("active");
    })
})


 收回案讚
 $(function(){
     $(".gameCloum .addLiked").click(function(){
         $(".addLiked").removeClass("display");
         $(".addLike").addClass("display");
     })
 })