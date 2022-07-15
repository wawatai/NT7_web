//查看
$(function(){
    $(".eventPage .check").click(function(){
        $(".eventAll").removeClass("display");
        $(".eventDitail").addClass("display");
    })
})


//返回前列
$(function(){
    $(".eventPage .backBtn").click(function(){
        $(".eventDitail").removeClass("display");
        $(".eventAll").addClass("display");
    })
})