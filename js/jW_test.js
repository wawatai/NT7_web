$(function(){
    $(".jumpWindow .closeBtn").click(function(){
        $(".coverBg,.jumpWindow").removeClass("display");
    })

    //最新公告
    $(".callNews").click(function(){
        $(".jumpWindow").removeClass("display");
        $(".coverBg,.jumpWindow.news").addClass("display");
    })

    //各類遊戲呼叫
    $(".callSport").click(function(){
        $(".jumpWindow").removeClass("display");
        $(".coverBg,.jumpWindow.quickTransfer.sport").addClass("display");
    })
    $(".callLive").click(function(){
        $(".jumpWindow").removeClass("display");
        $(".coverBg,.jumpWindow.quickTransfer.live").addClass("display");
    })
    $(".callLottery").click(function(){
        $(".jumpWindow").removeClass("display");
        $(".coverBg,.jumpWindow.quickTransfer.lottery").addClass("display");
    })
})