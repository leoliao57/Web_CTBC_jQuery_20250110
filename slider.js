// 當網頁載入完畢準備完成後執行箭頭函式
$(document).ready(() => {
    // 點擊事件:點下任何一個 .slider都會執行
    $(".slider").click(function() {
        // 刪除全部的 .slider類別 active
        $(".slider").removeClass("active");
        // 添加點下去的 .slider類別 active
        $(this).addClass("active");

    });
});