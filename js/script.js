// 首頁
var tabHome = $('.tab-bars .bar.home')
var reservation = $(".home-page .reservation");
var apply = $(".home-page .apply");

// 頁面
var homePage = $('.home-page')
var applyPage = $('.apply-page')
var recruitPage = $('.recruit-page')

tabHome.on("click", () => {
    homePage.show();
    applyPage.hide();
    recruitPage.hide();
})

apply.on("click", () => {
    history.pushState({
        page: 'apply'
    }, "page", "index.html");
    applyPage.show();
    homePage.hide();
});

// 申請頁選單
var recruit = $('.apply-page .recruit')

recruit.on('click', () => {
    applyPage.hide();
    recruitPage.show();
})

console.log(history.state)