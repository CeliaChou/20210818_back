//tabs//
$(".myTabs").each(function() {
    var $myTabs = $(this);
    $myTabs.find(".tab_content").hide().first().show();
    $myTabs.find("ul.tabs_list li:first").addClass("active").show();
    $myTabs.find("ul.tabs_list li").click(function() {
        var $this = $(this);
        $this.addClass("active").siblings().removeClass("active");
        $myTabs.find(".tab_content").hide();
        var activeTab = $this.find("a").attr("href");
        $(activeTab).fadeIn();
        return false;
    });
});
//pop//
$(".close").click(function() {
    $('.popup').fadeOut(200);
});
$(".blacklayer").click(function() {
    $('.popup').fadeOut(200);
});
$(".notice").click(function() {
$("div[id=" + $(this).attr("data-pop") + "]").fadeIn(200);
});
$(".show").click(function() {
    $("div[id=" + $(this).attr("data-pop") + "]").fadeIn(200);
    });