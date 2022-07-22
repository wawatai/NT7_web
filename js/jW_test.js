$(function(){
    $(".jumpWindow .closeBtn").click(function(){
        $(".coverBg,.jumpWindow").removeClass("display");
    })

    //忘記密碼
    $("header .password .forget_ic").click(function(){
        $(".jumpWindow").removeClass("display");
        $(".coverBg,.jumpWindow.forgotPw").addClass("display");
    })

    //請先登入
    $(".unLogin").click(function(){
        $(".jumpWindow").removeClass("display");
        $(".coverBg,.jumpWindow.clickWindow.plsLogin").addClass("display");
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
    $(".callSlot").click(function(){
        $(".jumpWindow").removeClass("display");
        $(".coverBg,.jumpWindow.quickTransfer.slot").addClass("display");
    })

    //查詢紅利
    $(".pointWrap td p:first-child").click(function(){
        $(".jumpWindow").removeClass("display");
        $(".coverBg,.jumpWindow.pointWindow").addClass("display");
    })

    //查看注單
    $(".dealWrap .waterBox .list").click(function(){
        $(".jumpWindow").removeClass("display");
        $(".coverBg,.jumpWindow.waterWindow").addClass("display");
    })

    //存款提示
    $(".depositWrap .cardFinish .check").click(function(){
        $(".jumpWindow").removeClass("display");
        $(".coverBg,.jumpWindow.clickWindow.deposit").addClass("display");
    })

    //更變密碼
    $(".changePwBtn").click(function(){
        $(".jumpWindow").removeClass("display");
        $(".coverBg,.jumpWindow.passwordWindow").addClass("display");
    })

    //更變手機
    $(".changePhBtn").click(function(){
        $(".jumpWindow").removeClass("display");
        $(".coverBg,.jumpWindow.phoneWindow").addClass("display");
    })
})