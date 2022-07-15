//  $(".closeBtn").click(function(e){
//      e.stopPropagation();
//      $(".coverBg").toggle();})

$(function(){
    $(".jumpWindow .closeBtn").click(function(){
        $(".coverBg,.jumpWindow").removeClass("display");
    })
})