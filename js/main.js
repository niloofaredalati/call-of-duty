let flag=true
$("div#root>div.main>div.menu>div.icon>i").click(function(){
    if(flag){
    $("div#root>div.main>div.menu>div.icon>div.sub-menu").fadeIn("500"),
    flag=false
    }else{
    $("div#root>div.main>div.menu>div.icon>div.sub-menu").fadeOut("500"),
    flag=true}
})
$("div#root>div.main>div.menu>div.main>nav>ul>li>a.1").mouseenter(function(){
    $("div#root>div.main>div.menu>div.main>nav>ul>li>p.1").text(" -"),
    $("div#root>div.main>div.menu>div.sub-menu1").css({display:"block"})
})
$("div#root>div.main>div.menu>div.main>nav>ul>li>a.1").mouseleave(function(){
    $("div#root>div.main>div.menu>div.main>nav>ul>li>p.1").text(" +"),
    $("div#root>div.main>div.menu>div.sub-menu1").css({display:"none"})
})
$("div#root>div.main>div.menu>div.main>nav>ul>li>a.2").mouseenter(function(){
    $("div#root>div.main>div.menu>div.main>nav>ul>li>p.2").text(" -")
})
$("div#root>div.main>div.menu>div.main>nav>ul>li>a.2").mouseleave(function(){
    $("div#root>div.main>div.menu>div.main>nav>ul>li>p.2").text(" +")
})
$("div#root>div.main>div.menu>div.main>nav>ul>li>a.4").mouseenter(function(){
    $("div#root>div.main>div.menu>div.main>nav>ul>li>p.4").text(" -")
})
$("div#root>div.main>div.menu>div.main>nav>ul>li>a.4").mouseleave(function(){
    $("div#root>div.main>div.menu>div.main>nav>ul>li>p.4").text(" +")
})
$("div#root>div.News>div.right>button").mouseenter(function(){
    $(this).css({backgroundColor: "rgb(166, 159, 159)"})
})
$("div#root>div.News>div.right>button").mouseleave(function(){
    $(this).css({backgroundColor: "transparent"})
})
$("div#root>div.getthegame>button").mouseenter(function(){
    $(this).css({backgroundColor: "rgb(166, 159, 159)"})
})
$("div#root>div.getthegame>button").mouseleave(function(){
    $(this).css({backgroundColor: "transparent"})
})

$("div#root>div.News>div.left>div.down>img.1").mouseenter(function(){
    $(this).css({ transform: "scale(1.01)"})
})
$("div#root>div.News>div.left>div.down>img.1").mouseleave(function(){
    $(this).css({ transform: "none"})
})
$("div#root>div.News>div.left>div.down>img.2").mouseenter(function(){
    $(this).css({ transform: "scale(1.01)"})
})
$("div#root>div.News>div.left>div.down>img.2").mouseleave(function(){
    $(this).css({ transform: "none"})
})
$("div#root>div.News>div.left>div.up>img").mouseenter(function(){
    $(this).css({ transform: "scale(1.01)",border: "1px solid white"})
})
$("div#root>div.News>div.left>div.up>img").mouseleave(function(){
    $(this).css({ transform: "none",border:"none"})
})
$("div#root>div.getthegame>div.part>div.first").mouseenter(function(){
    $("div#root>div.getthegame>div.part>div.first>img.first").css({ transform: "scale(1.01)"})
})
$("div#root>div.getthegame>div.part>div.first").mouseleave(function(){
    $("div#root>div.getthegame>div.part>div.first>img.first").css({ transform: "none"})
})
$("div#root>div.getthegame>div.part>div.second").mouseenter(function(){
    $("div#root>div.getthegame>div.part>div.second>img.second").css({ transform: "scale(1.01)"})
})
$("div#root>div.getthegame>div.part>div.second").mouseleave(function(){
    $("div#root>div.getthegame>div.part>div.second>img.second").css({ transform: "none"})
})
$("div#root>div.getthegame>div.part>div.third").mouseenter(function(){
    $("div#root>div.getthegame>div.part>div.third>img.third").css({ transform: "scale(1.01)"})
})
$("div#root>div.getthegame>div.part>div.third").mouseleave(function(){
    $("div#root>div.getthegame>div.part>div.third>img.third").css({ transform: "none"})
})
$("div#root>div.getthegame>div.part>div.forth").mouseenter(function(){
    $("div#root>div.getthegame>div.part>div.forth>img.forth").css({ transform: "scale(1.01)"})
})
$("div#root>div.getthegame>div.part>div.forth").mouseleave(function(){
    $("div#root>div.getthegame>div.part>div.forth>img.forth").css({ transform: "none"})
})       